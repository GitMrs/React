import React from 'react';
import { Link } from 'react-router-dom';
export default class Home extends React.Component{
    render(){
        return (
           <div>
                <ul>
                    <li><Link to='/'>home3</Link></li>
                    <li><Link to='/about'>about3</Link></li>
                    <li><Link to='/toppic'>toppic3</Link></li>
                    <li><Link to='/top'>404</Link></li>
                </ul>
                <hr />
                {this.props.children}
           </div>
        )
    }
} 