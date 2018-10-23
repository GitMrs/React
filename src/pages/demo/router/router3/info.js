import React from 'react';
export default class Info extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div>
               动态路由的值 {this.props.match.params.value}
            </div>
        )
    }
}