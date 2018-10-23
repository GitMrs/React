import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
// import Home from '../components/home';


function Home() {
    return (
        <div>11111</div>
    )
}
function Path1() {
    return (
        <div>Path1</div>
    )
}
function Path2() {
    return (
        <div>Path2</div>
    )
}
class RoutersLink extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <HashRouter>
                    <div>
                        <ul>
                            <li>
                                <Link to='/'>首页</Link>
                            </li>
                            <li>
                                <Link to='/path1'>项目1</Link>
                            </li>
                            <li>
                                <Link to='/path2'>项目二</Link>
                            </li>
                        </ul>
                        {/* {this.props.children} */}
                        <Route exact path='/' component={Home}></Route>

                        <Route path='/path1' component={Path1}></Route>

                        <Route path='/path2' component={Path2}></Route>

                    </div>
                </HashRouter>
            </div>
        )
    }
}
export default RoutersLink;