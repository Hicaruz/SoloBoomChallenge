import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../views/home'
import Pickem from '../views/pickem'
import Stats from '../views/stats'
import E404 from '../views/404'
export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/pickem" exact>
                    <Pickem/>
                </Route>
                <Route path="/stats" exact>
                    <Stats />
                </Route>
                <Route path="" >
                    <E404/>
                </Route>

            </Switch>
        </Router>
    )
}