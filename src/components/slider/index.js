import React from 'react';
import { Menu } from 'antd';
import { NavLink} from 'react-router-dom';
import menuList from '../../config/menuConfig';
import './index.less'
class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            MenuTreeNode: ""
        }
    }
    componentWillMount() {
        const MenuTree = this.renderMenu(menuList)
        this.setState({
            MenuTreeNode: MenuTree
        })
    }
    componentDidMount(){
        console.log(this.state)
    }
    //菜单渲染
    renderMenu = (data) => {
        const SubMenu = Menu.SubMenu
        const Item = Menu.Item
        return data.map(v => {
            if (v.children) {
                return (
                    <SubMenu key={v.key} title={v.title}>
                        {this.renderMenu(v.children)}
                    </SubMenu>
                )
            }
            return <Item key={v.key} title={v.title}>
                        <NavLink to= {v.key}> {v.title}</NavLink>   
                    </Item>
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" width="80px" alt="" />
                    <h1>msg</h1>
                </div>
                <Menu theme="dark">
                    {this.state.MenuTreeNode}
                </Menu>
            </div>
        )
    }
}
export default Slider;