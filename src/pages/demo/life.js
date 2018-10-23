import React from 'react';
import {Button} from 'antd';
// import 'antd/dist/antd.less'
// import './style.less'
// 生命周期介绍
class Lift extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
        // this.handleCell = this.handleCell.bind(this)
    }
    componentWillMount(){
        console.log('will mount')
    }
    componentDidMount(){
        console.log('did mount')
    }
    componentWillUpdate(){
        console.log('will update')
    }
    handleClick (){
        this.setState({
            count : this.state.count+1
        })
    }
    handleCell(){
        this.setState({
            count : this.state.count-1
        })
    }
    render(){
        return (
            <div>
                <p className='color'>{this.props.name}</p>
                <p>{this.state.count}</p>
                <Button type="primary" onClick={this.handleClick.bind(this)}>加一</Button>
                <Button onClick={()=>this.handleCell()}>减一</Button>
            </div>
        )
    }
}
export default Lift;