import React from 'react';
import {Card,Spin} from 'antd';
import './ui.less'
export default class Loading extends React.Component{
    render(){
        return(
            <div>
                <Card
                    title='Spin用法'
                    className='card-wrap'
                >
                    <Spin  size='small' />
                    <Spin  size='default' style={{marginLeft:20}} />
                    <Spin  size='large' style={{marginLeft:20}} />

                </Card>
                <Card className='card-wrap'>

                </Card>

            </div>
        )
    }
}
