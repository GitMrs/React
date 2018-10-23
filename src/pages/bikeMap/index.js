import React from 'react';
import axios from '../../axios';
import FilterForm from '../../components/BaseForm';
import {Card} from 'antd';
export default class bikeMap extends React.Component{
    state = {
        totleCount: 0
    }
    map = ""
    formList = [
        {   type: 'SELECT',
            label:"城市",
            initiaValue: '1',
            width: 100,
            placeholder: '全部',
            list: [{ id: 0, name: "全部" }, { id: 1, name: "北京" }, { id: 2, name: "上海" }, { id: 3, name: "天津" }, { id: 4, name: "合肥" }, { id: 5, name: "武汉" }]
        },
        {
            type: '时间查询',
            label: '订单时间'
        },
        {
            type:"SELECT",
            label:"订单状态",
            field:"order_state",
            placeholder:"全部",
            initiaValue:0,
            width:"100px",
            list:[{id:0,name:"全部"},{id:1,name:"进行中"},{id:2,name:"行程结束"}]
        }
    ]
    requestList = () => {
        const bike_list = require('../../resource/api/map/bike_list.json')
        this.setState({
            totleCount:bike_list.result.total_count
        })
        this.renderMap(bike_list.result)
    }
    handleFileterList = () =>{
       this.requestList()
    }
    renderMap = (res) => {
        let list = res.route_list;
        this.map = new window.BMap.Map("container", {enableMapClick: false});
        let gps1 = list[0].split(',');
        let startPoint = new window.BMap.Point(gps1[0], gps1[1]);
        let gps2 = list[list.length - 1].split(',');
        let endPoint = new window.BMap.Point(gps2[0], gps2[1]);
        this.map.centerAndZoom(endPoint, 11);
        //绘制开始点
       let startPointIcon = new window.BMap.Icon('/assets/start_point.png',new window.BMap.Size(36,42),{
            imageSize:new window.BMap.Size(36,42),
            anchor: new window.BMap.Size(18,21)
        })
        let bikeMarkStart = new window.BMap.Marker(startPoint,{icon:startPointIcon})
        this.map.addOverlay(bikeMarkStart)
        //绘制结束点
        let endPointIcon = new window.BMap.Icon('/assets/end_point.png',new window.BMap.Size(36,42),{
            imageSize:new window.BMap.Size(36,42),
            anchor:new window.BMap.Size(18,21)
        })
        let bikeMarkEnd = new window.BMap.Marker(endPoint,{icon:endPointIcon})
        this.map.addOverlay(bikeMarkEnd)
        //行驶路线
        let routerList = []

        list.forEach((item,i)=>{
            let p =item.split(',')
            let point = new window.BMap.Point(p[0],p[1])
            routerList.push(point)
        })
        var pointLine = new window.BMap.Polyline(routerList,{
            strokeColor:"#ef4136",
            strokeWidth:2,
            strokePocity:1
        })
        this.map.addOverlay(pointLine)

        //绘制行驶范围

        let serviceList = res.service_list;
        let servicePointist = []
        serviceList.forEach((item) => {
            let point = new window.BMap.Point(item.lon, item.lat);
            servicePointist.push(point);
        })
        let serverLine = new window.BMap.Polyline(servicePointist,{
            strokeColor:"#ef4236",
            strokeWidth:3,
            strokePocity:1
        })
        this.map.addOverlay(serverLine)

        //绘制自行车

        let bikeList = res.bike_list;
        let bikeIcon = new window.BMap.Icon('/assets/bike.jpg',new window.BMap.Size(36,42),{
            imageSize: new window.BMap.Size(36,42),
            anchor:new window.BMap.Size(18,21)
        })
        bikeList.forEach((item,i)=>{
            let p = item.split(',');
            let bikePoint = new window.BMap.Point(p[0],p[1])
            let bikeMark = new window.BMap.Marker(bikePoint,{icon:bikeIcon})
            this.map.addOverlay(bikeMark)
        })


        //添加地图控件

        this.addMapControl()


    }
    addMapControl = () => {
        let map = this.map;
          // 左上角，添加比例尺
          var top_right_control = new window.BMap.ScaleControl({anchor: window.BMAP_ANCHOR_TOP_RIGHT});
          var top_right_navigation = new window.BMap.NavigationControl({anchor: window.BMAP_ANCHOR_TOP_RIGHT});
          //添加控件和比例尺
          map.addControl(top_right_control);
          map.addControl(top_right_navigation);
          map.enableScrollWheelZoom(true);
          // legend.addLegend(map);

    }
    render(){
        return (
            <div>
                <Card>
                    <FilterForm formList={this.formList} handleFileter={this.handleFileterList}/>
                </Card>
                <Card>
                    <div>共有车辆{this.state.totleCount}量</div>
                    <div id='container' style={{height:"500px",width:"100%"}}></div> 
                </Card>
            </div>
        )
    }
}