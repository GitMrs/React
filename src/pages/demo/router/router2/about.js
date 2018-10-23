import React from 'react';
import { Link } from 'react-router-dom';
export default class About extends React.Component {
    render() {
        return (
            <div>
                <Link to='/about/a' > sub child </Link>
                <h1>About</h1>
                {this.props.children}
            </div>
        )
    }
} 