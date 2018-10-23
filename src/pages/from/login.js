import React from 'react';
import { Card, Form, Input, Button, message, Checkbox, Icon } from 'antd';
const FormItem = Form.Item
class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClick = () =>{
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(`${userInfo.userName}成功通过测试`)
            }else{
                console.log(err)
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div>
                <Card title='登录行内表单'>
                    <Form layout='inline'>
                        <FormItem>
                            <Input placeholder='请输入用户名' />
                        </FormItem>
                        <FormItem>
                            <Input placeholder='请输入密码' />
                        </FormItem>
                        <FormItem>
                            <Button type='primary'>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title='登录水平表单'>
                    <Form style={{ width: 300 }}>
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: 'jack',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        },
                                        {
                                            max:10,
                                            min:5,
                                            message:'长度不在范围内'
                                        },
                                        {
                                            pattern:/^\w+$/g,
                                            message:'用户名是字母或者数字'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type='user' />} type='value' placeholder='请输入用户名' />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('passWord', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required:'true',
                                            message:'用户名不能为空'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type='lock' />} type='password' placeholder='请输入用户名' />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName:'checked',
                                    initialValue: false,
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href='#' style={{float:'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type='primary' onClick={this.handleClick}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(Login);