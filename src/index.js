import React from 'react';
import ReactDOM from 'react-dom';
import Home from './router';
import 'antd/dist/antd.less'
import './style/comment.less'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
