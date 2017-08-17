import React from 'react';
import ReactDOM from 'react-dom';
import {Menu,Icon} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class PcSidebar extends React.Component{
	constructor(){
		super();
		this.state = {
			current: 'index'
		}
	}

	handleClick(e){
		 this.setState({current: e.key});
	}

	handleSearch(e){
		console.log(e);
	}
	render(){
		return(
				<div class='sidebar'>
							<span class='signature'>——从hello world到征服世界</span>
							<Menu
								class='menu'
								mode='inline'
								defaultOpenKeys = {['subkey1','subkey2','subkey3','subkey4']}
								onClick= {this.handleClick.bind(this)}
							>
								<Menu.Item key='index'>
									<Icon type='home'/>最新发布
								</Menu.Item>
								<SubMenu key='subkey1' title={<span><Icon type='folder'/>2017年10月</span>}>
									<Menu.Item key='JavaScript'>
										<Icon type='book'/>mysql基础入门
									</Menu.Item>
									<Menu.Item key='PHP'>
										<Icon type='book'/>GO语言搭建接口项目
									</Menu.Item>
									<Menu.Item key='GO'>
										<Icon type='book'/>Nginx在centOS上的部署
									</Menu.Item>
									<Menu.Item key='mySQL'>
										<Icon type='database'/>mySQL索引介绍
									</Menu.Item>
								</SubMenu>
								<SubMenu key='subkey2' title={<span><Icon type='folder'/>2017年9月</span>}>
									<Menu.Item key='JavaScript'>
										<Icon type='book'/>mysql基础入门
									</Menu.Item>
									<Menu.Item key='PHP'>
										<Icon type='book'/>GO语言搭建接口项目
									</Menu.Item>
									<Menu.Item key='GO'>
										<Icon type='book'/>Nginx在centOS上的部署
									</Menu.Item>
									<Menu.Item key='mySQL'>
										<Icon type='database'/>mySQL索引介绍
									</Menu.Item>
								</SubMenu>
								<SubMenu key='subkey3' title={<span><Icon type='folder'/>2017年8月</span>}>
									<Menu.Item key='JavaScript'>
										<Icon type='book'/>mysql基础入门
									</Menu.Item>
									<Menu.Item key='PHP'>
										<Icon type='book'/>GO语言搭建接口项目
									</Menu.Item>
									<Menu.Item key='GO'>
										<Icon type='book'/>Nginx在centOS上的部署
									</Menu.Item>
									<Menu.Item key='mySQL'>
										<Icon type='database'/>mySQL索引介绍
									</Menu.Item>
								</SubMenu>
								<SubMenu key='subkey4' title={<span><Icon type='folder'/>2017年7月</span>}>
									<Menu.Item key='JavaScript'>
										<Icon type='book'/>mysql基础入门
									</Menu.Item>
									<Menu.Item key='PHP'>
										<Icon type='book'/>GO语言搭建接口项目
									</Menu.Item>
									<Menu.Item key='GO'>
										<Icon type='book'/>Nginx在centOS上的部署
									</Menu.Item>
									<Menu.Item key='mySQL'>
										<Icon type='database'/>mySQL索引介绍
									</Menu.Item>
								</SubMenu>
							</Menu>
							</div>
		)
	}
}