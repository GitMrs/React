import React from 'react';
import { Card } from "antd";
import ReactEcharts from 'echarts-for-react';

import echarts from 'echarts/lib/echarts';
import echartsTheme from './echartTheme';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';

export default class Line extends React.Component {
    componentWillMount() {
        echarts.registerTheme('immock', echartsTheme)
    }
    getOptions = () => {
        let options = {
            title: {
                text: '折线图'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['折线图']
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周七']
            },
            yAxis: {
                type: 'value'
            },
            series: {
                type: 'line',
                name: '折线图',
                data: ['3000', '1600', '1811', '4341', '2243', '1314', '2612']
            }

        }
        return options
    }
    getOptions2 = () => {
        let options = {
            title: {
                text: '折线图'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                data: ['蓝的', '黄的']
            },
            xAxis: {
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周七']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                type: 'line',
                name: '蓝的',
                data: ['3000', '1600', '1811', '4341', '2243', '1314', '2612']
            },
            {
                type: 'line',
                name: '黄的',
                data: ['1000', '2600', '4511', '2341', '4243', '2314', '1612']
            }
            ]

        }
        return options
    }
    getOptions3 = () => {
        let options = {
            title: {
                text: '折线图'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                data: ['折线图']
            },
            xAxis: {
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周七']
            },
            yAxis: {
                type: 'value'
            },
            series: {
                type: 'line',
                name: '折线图',
                areaStyle: {},
                data: ['3000', '1600', '1811', '4341', '2243', '1314', '2612']
            }

        }
        return options
    }
    render() {
        return (
            <div>
                <Card title='折线图表之一'>
                    <ReactEcharts option={this.getOptions()} theme='immock' />
                </Card>
                <Card title='折线图表之二'>
                    <ReactEcharts option={this.getOptions2()} theme='immock' />
                </Card>
                <Card title='折线图表之三'>
                    <ReactEcharts option={this.getOptions3()} theme='immock' />
                </Card>
            </div>
        )
    }
}