import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Admin from './admin';
import Home from './pages/home';
import Button from './pages/ui/botton';
import Modals from './pages/ui/modals';
import Loading from './pages/ui/loadings';
import Notification from './pages/ui/notification';
import Login from './pages/from/login';
import Reginst from './pages/from/reginst';
import BikeMap from './pages/bikeMap/index';
import Bar from './pages/charts/bar';
import Pie from './pages/charts/pie';
import Line from './pages/charts/line';
import Rich from './pages/rich/index';
import App from './App';
import Nomatch from './pages/nomatch';
export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path='/login' component={Login} ></Route>
                    <Route path='/admin' render={() =>
                        <Admin>
                            <Switch>
                                <Route path='/admin/home' component={Home}></Route>
                                <Route path='/admin/ui/buttons' component={Button}></Route>
                                <Route path='/admin/ui/modals' component={Modals}></Route>
                                <Route path='/admin/ui/loadings' component={Loading}></Route>
                                <Route path='/admin/ui/notification' component={Notification}></Route>
                                <Route path='/admin/form/login' component={Login}></Route>
                                <Route path='/admin/form/reg' component={Reginst}></Route>
                                <Route path='/admin/BikeMap' component={BikeMap}></Route>
                                <Route path='/admin/charts/bar' component={Bar}></Route>
                                <Route path='/admin/charts/pie' component={Pie}></Route>
                                <Route path='/admin/charts/line' component={Line}></Route>
                                <Route path='/admin/rich' component={Rich}></Route>
                                <Route component={Nomatch}></Route>
                            </Switch>
                        </Admin>
                    } ></Route>
                </App>
            </HashRouter>
        )
    }
} 