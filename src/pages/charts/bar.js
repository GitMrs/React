import React from 'react';
// import echarts from 'echarts'; 全部加载
import echarts from 'echarts/lib/echarts';
import echartTheme from './echartTheme';

import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';
import {Card} from "antd";
export default class Bar extends React.Component{
    componentWillMount(){
        echarts.registerTheme('immock',echartTheme)
    }
    getOption = ()=>{
        let option = {
            title:{
                text:'用户订单'
            },
            tooltip:{
                trigger:'axis'
            },
            xAxis:{
                data:['周一','周二','周三','周四','周五','周六','周七']
            },
            yAxis:{
                type:'value'
            },
            series:{
                name:"订单量",
                type:'bar',
                data:['1000','1200','1111','2341','1243','2314','2312']
            }
        }
        return option;
    }
    getOption2 = ()=>{
        let option = {
            title:{
                text:'类型'
            },
            legend:{
                data:['蓝的','白的','黄的']
            },
            tooltip:{
                trigger:'axis'
            },
            xAxis:{
                data:['周一','周二','周三','周四','周五','周六','周七']
            },
            yAxis:{
                type:'value'
            },
            series:[{
                name:"蓝的",
                type:'bar',
                data:['1000','1200','1111','2341','1243','2314','2312']
            },
            {
                name:"白的",
                type:'bar',
                data:['1000','1400','11211','341','1243','4314','3312']
            },
            {
                name:"黄的",
                type:'bar',
                data:['3000','1600','1811','4341','2243','1314','2612']
            }]
        }
        return option;
    }
    render(){
        return (
            <div>
                <Card title='柱型图表之一'>
                    <ReactEcharts option={this.getOption()} theme='immock' />
                </Card>
                <Card title='柱形图表之二' style={{marginTop:'10px'}}>
                    <ReactEcharts option={this.getOption2()} theme='immock' />
                </Card>
            </div>
        )
    }
}