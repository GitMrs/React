import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import Main from '../route1/main';
import Toppic from '../route1/toppic';
import About from './about';
export default class IRouter extends React.Component {
    render() {
        return (
            <Router>
                <Home>
                    <Route path='/' exact component={Main}></Route>
                    <Route path='/about' render={()=>
                        <About>
                            <Route path = '/about/a' component= {Main}></Route>
                        </About>
                    }></Route>
                    <Route path='/toppic' component={Toppic}></Route>
                </Home>
            </Router>
        )
    }
}