import React from 'react';
import { Form, Select, DatePicker, Button, Input, Checkbox } from 'antd';
const FormItem = Form.Item;
class FilterForm extends React.Component {
    state = {
        orderInfo: {},
        orderConfirmVisble: false
    }
    params = {
        page: 1
    }
    formList = [
        {
            type: 'SELECT',
            label: '城市',
            intialValue: '1',
            width: 100,
            placeholder: '全部',
            list: [{ id: 0, name: "全部" }, { id: 1, name: "北京" }, { id: 2, name: "上海" }, { id: 3, name: "天津" }, { id: 4, name: "合肥" }, { id: 5, name: "武汉" }]
        },
        {
            type: '时间查询',
            label: '订单时间'
        },
        {
            type: 'SELECT',
            label: '状态',
            intialValue: '1',
            width: 100,
            placeholder: '全部',
            list: [{ id: 0, name: "全部" }, { id: 1, name: "进行中" }, { id: 2, name: "结束项" }]
        }
    ]
    OptionFn = (data) => {
        if(!data){
            return []
        }
        let options = []
        data.map((item,i)=>{
            options.push(<Select.Option value={item.id} key={i}>{item.name}</Select.Option>)
        })
        return options
    }
    initFormList = () => {
        const { getFieldDecorator } = this.props.form;
        const formList = this.props.formList;
        const formItemList = []
        formList.forEach((item, i) => {
            let label = item.label;
            let field = item.field;
            let initialValue = item.initialValue || '';
            let placeholder = item.placeholder
            let width = item.width
            if (item.type == '时间查询') {
                const beginTime = <FormItem label='订单时间' key={field}>
                    {
                        getFieldDecorator('begin_time', {

                        })(
                            <DatePicker showTime={true} format='YYYY-MM--DD HH:mm:ss' placeholder={placeholder} />
                        )
                    }
                </FormItem>
                formItemList.push(beginTime)
                const endTime = <FormItem label='~' colon={false} key={field} >
                    {
                        getFieldDecorator('end_time')(
                            <DatePicker placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss" showTime={true} />
                        )
                    }
                </FormItem>
                formItemList.push(endTime)
            } else if (item.type == 'INPUT') {
                const INPUT = <FormItem label={label} key={field}>
                    <Input type='text' placeholder={placeholder} />
                </FormItem>
                formItemList.push(INPUT)
            } else if (item.type == 'SELECT') {
                const SELECT = <FormItem label={label} key={field}>
                    <Select style={{ width: width }} placeholder={placeholder}>
                        {this.OptionFn(item.list)}
                    </Select>
                </FormItem>
                formItemList.push(SELECT)
            } else if (item.type == 'CHECKBOX') {
                const CHECKBOX = <FormItem label={label} key={field}>
                    {
                        getFieldDecorator([field], {
                            valuePropName: 'checked',
                            initialValue: initialValue
                        })(
                            <Checkbox>{label}</Checkbox>
                        )
                    }
                </FormItem>
                formItemList.push(CHECKBOX)
            }

        })
        return formItemList
    }
    render() {

        return (
            <div>
                <Form layout='inline'>
                    {this.initFormList()}
                    <FormItem>
                        <Button type='primary' style={{ margin: '0 20px' }} onClick={this.props.handleFileter}>查询</Button>
                        <Button type='primary'>重置</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
export default Form.create()(FilterForm)