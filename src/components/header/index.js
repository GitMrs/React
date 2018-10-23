import React from 'react';
import { Row, Col } from 'antd';
import './index.less'
import Until from '../../until/until';
import Axios from '../../axios/index';
class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userName:"河畔",
            url:'http://api.map.baidu.com/telematics/v3/weather?location=beijing&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }
    }
    componentWillMount(){
        this.setState({
            userName:'河畔'
        })
        setInterval(()=>{
           let sysTime =  Until.frommateDate(new Date().getTime())
           this.setState({
               sysTime
           })
        },1000)
        this.getWeatherData()
    }
    getWeatherData(){
        let city =encodeURIComponent('北京')
        console.log(city)
        Axios.jsonp({
            url:`http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
        }).then((res)=>{
            console.log(res)
            if(res.status == 'success'){
                let data = res.results[0].weather_data[0];
                console.log(data)
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        })
    }
    render() {
        return (
            <div className='header'>
                <Row className='header-title'>
                    <Col span="24">
                        <span>欢迎：{this.state.userName}</span>
                        <a>退出</a>
                    </Col>
                </Row>
                <Row className='breadcrumb'>
                    <Col span="4" className='breadcrumb-title'>
                        <span>首页</span>
                    </Col>
                    <Col span='20' className='breadcrumb-weather'>
                        <span>{this.state.sysTime}</span>
                        <span className='weather'>
                            <img src={this.state.dayPictureUrl} width='22'  alt='' />
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Header;