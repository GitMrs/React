import React from 'react';
import { Card , Button,Alert} from 'antd';
export default class Notification extends React.Component {
    render() {
        return (
            <div>
                <Card title='基础提示框'>
                    <Button type='primary'>基础警告</Button>
                </Card>
                 <Alert></Alert>
            </div>
        )
    }
} 