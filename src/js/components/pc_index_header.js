import React from 'react';
import {Row,Col,Menu,Icon,Dropdown} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class PcIndexHeader extends React.Component{
	constructor(){
		super();
		this.state = {
			current: 'index'
		}
	}

	handleClick(e){
		 this.setState({current: e.key});
	}

	render(){
		return(
			<header>
				<Row>
					{/*前后留白*/}
					<Col span={2}></Col>
					<Col span={10}>
					</Col>
					<Col span={10}>
							<Menu
								mode='horizontal'
								selectedKeys = {[this.state.current]}
								onClick= {this.handleClick.bind(this)}
							>
								<Menu.Item key='index'>
									<Icon type='home'/>首页
								</Menu.Item>
								<SubMenu title={<span><Icon type='folder'/>coding日记</span>}>
									<Menu.Item key='index2'>
										<Icon type='book'/>JavaScript
									</Menu.Item>
									<Menu.Item key='index3'>
										<Icon type='book'/>PHP
									</Menu.Item>
									<Menu.Item key='index4'>
										<Icon type='book'/>GO
									</Menu.Item>
								</SubMenu>
								<SubMenu title={<span><Icon type='meh-o'/>relaxing时光</span>}>
									<Menu.Item key='index2'>
										<Icon type='customer-service'/>music
									</Menu.Item>
									<Menu.Item key='index3'>
										<Icon type='coffee'/>story
									</Menu.Item>
									<Menu.Item key='index4'>
										<Icon type='car'/>game
									</Menu.Item>
								</SubMenu>
								<Menu.Item key='writer'>
									<Icon type='contacts'/>关于博主
								</Menu.Item>
								<Menu.Item key='user'>
									<Icon type='user'/>个人中心
								</Menu.Item>
							</Menu>
					</Col>
					<Col span={2}></Col>
				</Row>
			</header>
		)
	}
}
