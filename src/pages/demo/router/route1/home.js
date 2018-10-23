import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import Main from './main';
import Toppic from './toppic';
import About from './about';
class Home extends React.Component {
    render() {
        return (

            <HashRouter >
                <div>
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/about'>about</Link></li>
                        <li><Link to='/toppic'>toppic</Link></li>
                    </ul>
                    <hr />
                    {/* <Switch> */}
                        <Route path='/' exact component={Main}></Route>
                        <Route path='/about' component={About}></Route>
                        <Route path='/toppic' component={Toppic}></Route>
                    {/* </Switch> */}
                </div>
            </HashRouter>
        )
    }
}
export default Home;