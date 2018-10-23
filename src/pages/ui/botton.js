import React from 'react';
import { Card, Button, Radio } from 'antd';
import './ui.less';
export default class Buttons extends React.Component {
    state = {
        loading: true,
        size: 'default'
    }
    handleCloaseLoading = () => {
        this.setState({
            loading: !this.state.loading
        })
    }
    handleChange = (e) => {
        this.setState({
            size: e.target.value
        })
    }
    render() {
        return (
            <div>
                <Card title='基础按钮'>
                    <Button type='primary'>默认按钮</Button>
                    <Button type=''>基础按钮</Button>
                    <Button type='dashed'>虚线</Button>
                    <Button type='danger'>危险</Button>
                    <Button disabled>禁用</Button>
                </Card>
                <Card className='card-wrap' title='图形按钮'>
                    <Button icon='plus'>创建</Button>
                    <Button icon='edit'>编辑</Button>
                    <Button icon='delete'>删除</Button>
                    <Button shape='circle' icon='search'></Button>
                    <Button type='primary' icon='search' >搜索</Button>
                    <Button type='primary' icon='download'>下载</Button>
                </Card>
                <Card className='card-wrap' title='loading按钮'>
                    <Button type='primary' loading={this.state.loading} >确定</Button>
                    <Button shape='circle' loading type='primary' loading={this.state.loading} ></Button>
                    <Button loading={this.state.loading} >点击加载</Button>
                    <Button loading={this.state.loading} type='primary' ></Button>
                    <Button type='primary' onClick={this.handleCloaseLoading}>{this.state.loading ? '关闭' : '开启'}</Button>
                </Card>
                <Card className='card-wrap' title='按钮组'>
                    <Button.Group>
                        <Button type='primary' icon='left' >返回</Button>
                        <Button type='primary' icon='right'>前进</Button>
                    </Button.Group>
                </Card>
                <Card className='card-wrap' title='按钮大小'>
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value='small'>小</Radio>
                        <Radio value='default'>中</Radio>
                        <Radio value='large'>大</Radio>
                    </Radio.Group>
                    <Button size={this.state.size} type='primary'>默认按钮</Button>
                    <Button size={this.state.size} type=''>基础按钮</Button>
                    <Button size={this.state.size} type='dashed'>虚线</Button>
                    <Button size={this.state.size} type='danger'>危险</Button>
                    <Button size={this.state.size} disabled>禁用</Button>
                </Card>
            </div>
        )
    }
}