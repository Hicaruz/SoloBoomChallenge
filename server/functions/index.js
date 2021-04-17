require('dotenv').config()

const axios = require("axios").default
const express = require("express")
const functions = require("firebase-functions");
const morgan = require('morgan')


const api = express()
api.set("apikey", process.env.RIOT_API_KEY)

api.use(morgan('tiny'));

const https = axios.create({
    baseURL: "https://la1.api.riotgames.com/lol",
    headers: { "X-Riot-Token": process.env.RIOT_API_KEY }
})

api.get("/summoner/:tag", async (req, res) => {
    try {
        const { tag } = req.params
        const query_account = await https.get(`/summoner/v4/summoners/by-name/${tag}`)
        const summoner = query_account.data
        const query_ranked = await https.get(`/league/v4/entries/by-summoner/${summoner.id}`)
        const queues = query_ranked.data

        summoner.queues = queues
        res.send({ payload: summoner });
    } catch (err) {
        res.sendStatus(400)
    }
    res.end()
})


exports.api = functions.https.onRequest(api);
