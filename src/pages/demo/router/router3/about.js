import React from 'react';
import { Link } from 'react-router-dom';
export default class About extends React.Component {
    render() {
        return (
            <div>
                <Link to='/about/a' > sub child 1 </Link>
                <Link to='/about/a11' > sub child 2 </Link>
                <h1>About</h1>
                {this.props.children}
            </div>
        )
    }
} 