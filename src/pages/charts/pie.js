import React from 'react';
import {Card} from "antd";
import echarts from 'echarts/lib/echarts'
import echartTheme from './themeLight';
import ReactEcharts from 'echarts-for-react'
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/markPoint'

export default class Pie extends React.Component{
    componentWillMount(){
        echarts.registerTheme('immock',echartTheme)
    }
    getOptions = ()=>{
        let option = {
            title:{
                text:"饼状图",
                top:'0',
                x:'0'
            },
            tooltip:{
                trigger:'item',
                formatter:'{a}<br /> {b}:{c}({d}%)'
            },
            legend:{
                data:['周一','周二','周三','周四','周五','周六','周七'],
                orient:'vertical',
                right:'10',
                top:'20',
                bottom:'20'
            },
            series:{
                type:"pie",
                name:'饼状图',
                data:[
                    {
                        name:'周一',
                        value:'1000'
                    },
                    {
                        name:'周二',
                        value:'1300'
                    },
                    {
                        name:'周三',
                        value:'1500'
                    },
                    {
                        name:'周四',
                        value:'1600'
                    },
                    {
                        name:'周五',
                        value:'1700'
                    },
                    {
                        name:'周六',
                        value:'1800'
                    },
                    {
                        name:'周七',
                        value:'2000'
                    }
                ]
            }
        }
        return option;
    }
    getOptions2 = ()=>{
        let option = {
            title:{
                text:"饼状图",
                top:'0',
                x:'0'
            },
            tooltip:{
                trigger:'item',
                formatter:'{a}<br /> {b}:{c}({d}%)'
            },
            legend:{
                data:['周一','周二','周三','周四','周五','周六','周七'],
                orient:'vertical',
                right:'10',
                top:'20',
                bottom:'20'
            },
            series:{
                type:"pie",
                name:'饼状图',
                radius:['50%','80%'],
                data:[
                    {
                        name:'周一',
                        value:'1000'
                    },
                    {
                        name:'周二',
                        value:'1300'
                    },
                    {
                        name:'周三',
                        value:'1500'
                    },
                    {
                        name:'周四',
                        value:'1600'
                    },
                    {
                        name:'周五',
                        value:'1700'
                    },
                    {
                        name:'周六',
                        value:'1800'
                    },
                    {
                        name:'周七',
                        value:'2000'
                    }
                ]
            }
        }
        return option;
    }
    getOptions3 = ()=>{
        let option = {
            title:{
                text:"饼状图",
                top:'0',
                x:'0'
            },
            tooltip:{
                trigger:'item',
                formatter:'{a}<br /> {b}:{c}({d}%)'
            },
            legend:{
                data:['周一','周二','周三','周四','周五','周六','周七'],
                orient:'vertical',
                right:'10',
                top:'20',
                bottom:'20'
            },
            series:{
                type:"pie",
                name:'饼状图',
                data:[
                    {
                        name:'周一',
                        value:'1000'
                    },
                    {
                        name:'周二',
                        value:'1300'
                    },
                    {
                        name:'周三',
                        value:'1500'
                    },
                    {
                        name:'周四',
                        value:'1600'
                    },
                    {
                        name:'周五',
                        value:'1700'
                    },
                    {
                        name:'周六',
                        value:'1800'
                    },
                    {
                        name:'周七',
                        value:'2000'
                    }
                ].sort((a,b)=>{
                    return a.value - b.value
                })
            },
            roseType:'radius'
        }
        return option;
    }
    render(){
        return (
            <div>

                <Card title='饼状图之一'>
                    <ReactEcharts option={this.getOptions()} theme = 'immock' />
                </Card>
                <Card title='饼状图之二'>
                    <ReactEcharts option={this.getOptions2()} theme = 'immock' />
                </Card>
                <Card title='饼状图之三'>
                    <ReactEcharts option={this.getOptions3()} theme = 'immock' />
                </Card>
            </div>
        )
    }
}