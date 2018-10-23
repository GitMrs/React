import React from 'react';
import { Card, Modal, Button } from 'antd';
export default class Modals extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            "show1":false,
            "show2":false,
            "show3":false,
            "show4":false
        }
    }
    handleOpen = (type) =>{

        this.setState({
            [type]: true
        })
    }
    handelCancel = (type) =>{
        this.setState({
            [type]: false
        })
    }
    handelOk = (type) =>{
        this.setState({
            [type]: false
        })
    }
    handleConfirm = (type) =>{
        Modal[type]({
            title:'确认？',
            content:'信息确认框',
            onOk(){
                console.log('点击ok')
            },
            onCancel(){
                console.log('点击了取消')
            }
        })
    }
    render() {
        return (
            <div>
                <div>
                    <Card title='基础弹框'>
                        <Button type='primary' onClick={() => this.handleOpen('show1')}>基础弹框</Button>
                        <Button type='primary' onClick={() => this.handleOpen('show2')}>自定义页脚</Button>
                        <Button type='primary' onClick={() => this.handleOpen('show3')}>自定义位置</Button>
                        <Button type='primary' onClick={() => this.handleOpen('show4')}>水平垂直居中</Button>
                    </Card>
                    <Card title='信息确认框'>
                        <Button type='primary'  onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
                        <Button type='primary'  onClick={() => this.handleConfirm('info')}>Info</Button>
                        <Button type='primary'  onClick={() => this.handleConfirm('success')}>Success</Button>
                        <Button type='primary'  onClick={() => this.handleConfirm('error')}>Error</Button>
                        <Button type='primary'  onClick={() => this.handleConfirm('warning')}>Warning</Button>
                    </Card>
                </div>
                <div>
                    <Modal 
                        title="React-1"
                        visible={this.state.show1}
                        onCancel={() => this.handelCancel('show1')}
                        onOk = {() => this.handelOk('show1')}
                    >
                    <p>基础弹框</p>
                    </Modal>
                    <Modal 
                        title="React-2"
                        okText="下一步"
                        cancelText="上一步"
                        visible={this.state.show2}
                        onCancel={() => this.handelCancel('show2')}
                        onOk = {() => this.handelOk('show2')}
                    >
                    <p>自定义页脚</p>
                    </Modal>
                    <Modal 
                        title="React-3"
                        style={{top:20}}
                        visible={this.state.show3}
                        onCancel={() => this.handelCancel('show3')}
                        onOk = {() => this.handelOk('show3')}
                    >
                    <p>自定义位置</p>
                    </Modal>
                    <Modal 
                        title="React-4"
                        wrapClassName='vertical-center-modal'
                        visible={this.state.show4}
                        onCancel={() => this.handelCancel('show4')}
                        onOk = {() => this.handelOk('show4')}
                    >
                    <p>水平垂直居中</p>
                    </Modal>
                </div>
            </div>

        )
    }
}