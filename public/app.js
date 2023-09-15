import React from 'react'
import { render } from 'react-dom'
import ReactTextDemo from '../src/index.jsx'    //引入组件

const App = () => {
    return <ReactTextDemo />
};
render(<App/>, document.getElementById('root'));   //获取虚拟dom的挂载节点
