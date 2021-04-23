import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../views/home'
import Pickem from '../views/pickem'
import Stats from '../views/stats'
import E404 from '../views/404'
export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pickem" component={Pickem} />
                <Route exact path="/stats" component={Stats} />
                <Route exact path="/404" component={E404} />
                <Redirect to="/404" ></Redirect>
            </Switch>
        </Router>
    )
}