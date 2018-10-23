import React from 'react';
import { Card, Form, Radio, Checkbox, Select, Switch, DatePicker, TimePicker, Input, Icon, InputNumber, Upload } from 'antd';
const FormItem = Form.Item
const TextArea = Input.TextArea
class Reginst extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 20
            }
        }
        return (
            <div>
                <Card title='注册表单'>
                    <Form>
                        <FormItem label='用户名' {...formItemLayout}>
                            {
                                getFieldDecorator('username', {
                                    initialValue: 'jack'
                                })(
                                    <Input type='value' prefix={<Icon type='user' />} />
                                )
                            }
                        </FormItem>
                        <FormItem label='密码' {...formItemLayout}>
                            {
                                getFieldDecorator('userpwd', {
                                    initialValue: ''
                                })(
                                    <Input type='password' prefix={<Icon type='lock' />} />
                                )
                            }
                        </FormItem>
                        <FormItem label='性别' {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '1'
                                })(
                                    <Radio.Group>
                                        <Radio value='1'>男</Radio>
                                        <Radio value='2'>女</Radio>
                                    </Radio.Group>
                                )
                            }
                        </FormItem>
                        <FormItem label='年龄' {...formItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: '18'
                                })(
                                    <InputNumber />
                                )
                            }
                        </FormItem>
                        <FormItem label='当前状态' {...formItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: '1'
                                })(
                                    <Select>
                                        <Select.Option value='1'>咸鱼一条</Select.Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label='爱好' {...formItemLayout}>
                            {
                                getFieldDecorator('insert', {
                                    initialValue: ['1']
                                })(
                                    <Select mode='multiple'>
                                        <Select.Option value='1'>游泳</Select.Option>
                                        <Select.Option value='2'>打篮球</Select.Option>
                                        <Select.Option value='3'>踢足球</Select.Option>
                                        <Select.Option value='4'>跑步</Select.Option>
                                        <Select.Option value='5'>骑行</Select.Option>
                                        <Select.Option value='6'>桌球</Select.Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label='是否已婚' {...formItemLayout}>
                            {
                                getFieldDecorator('married', {
                                    valuePropName: 'checked',
                                    initialValue: ''
                                })(
                                    <Switch />
                                )
                            }
                        </FormItem>
                        <FormItem label='生日' {...formItemLayout}>
                            {
                                getFieldDecorator('birthday', {
                                    initialValue: ''
                                })(
                                    <DatePicker showTime format='YYYY-MM-DD HH:MM:SS' />
                                )
                            }
                        </FormItem>
                        <FormItem label='联系地址' {...formItemLayout}>
                            {
                                getFieldDecorator('address', {
                                    initialValue: ''
                                })(
                                    <TextArea minRows='' ></TextArea>
                                )
                            }
                        </FormItem>
                        <FormItem label='早起' {...formItemLayout}>
                            {
                                getFieldDecorator('weekup', {
                                    initialValue: ''
                                })(
                                    <TimePicker />
                                )
                            }
                        </FormItem>
                        <FormItem label='头像' {...formItemLayout}>
                            {
                                getFieldDecorator('userImg', {
                                    initialValue: ''
                                })(
                                    <Upload
                                        listType='picture-card'
                                        showUploadList={true}
                                        action=''
                                       
                                    >
                                    </Upload>
                                )
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(Reginst)