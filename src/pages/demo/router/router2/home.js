import React from 'react';
import { Link } from 'react-router-dom';
export default class Home extends React.Component{
    render(){
        return (
           <div>
                <ul>
                    <li><Link to='/'>home1</Link></li>
                    <li><Link to='/about'>about1</Link></li>
                    <li><Link to='/toppic'>toppic1</Link></li>
                </ul>
                <hr />
                {this.props.children}
           </div>
        )
    }
} 