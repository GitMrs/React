import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import Main from '../route1/main';
import Toppic from '../route1/toppic';
import About from './about';
import Info from './info';
import Nomatch from './noMatch';
export default class IRouter extends React.Component {
    render() {
        return (
            <Router>
                <Home>
                    <Switch>
                        <Route path='/' exact component={Main}></Route>
                        <Route path='/about' render={() =>
                            <About>
                                <Route path='/about/:value' component={Info}></Route>
                            </About>
                        }></Route>
                        <Route path='/toppic' component={Toppic}></Route>
                        <Route component={Nomatch}></Route>
                    </Switch>
                </Home>
            </Router>
        )
    }
}