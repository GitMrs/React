import React from 'react';
import {Row,Col} from 'antd';
import Slider from './components/slider/';
import Header from './components/header/';
import Footer from './components/footer/';
class Admin extends React.Component{
    render(){
        return (
            <div>
                <Row className="container">
                    <Col span="4" className="nav_left">
                        <Slider />
                    </Col>               
                    <Col span="20" className="main">
                        <Header />
                        <Row className="content">
                            {/* <Home /> */}
                            {this.props.children}
                        </Row>
                        <Footer />
                    </Col>               
                </Row>  
            </div>
        )
    }
}
export default Admin;
