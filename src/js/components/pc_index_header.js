import React from 'react';
import {Row,Col,Menu,Icon,Dropdown,Input} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;

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

	handleSearch(e){
		console.log(e);
	}
	render(){
		return(
			<header>
				<Row>
					<Col span={4}>
					<div class='logo'>
						{/*图标以及博客名称*/}
						<img src='./src/images/blog_logo.png'/>
					    <span>Frank's blog</span>
				    </div>
					</Col>

					<Col span={9}>
						{/*放置搜索框*/}
						<div class='search'>
						<Search
							placeholder = '查询文章关键字'
							onSearch={value=>this.handleSearch(value).bind(this)}
						/>
						</div>

					</Col>
					<Col span={10}>
							<div class='index_menu'>
							<Menu
								mode='horizontal'
								selectedKeys = {[this.state.current]}
								onClick= {this.handleClick.bind(this)}
							>
								<Menu.Item key='index'>
									<Icon type='home'/>首页
								</Menu.Item>
								<SubMenu title={<span><Icon type='folder'/>coding日记</span>}>
									<Menu.Item key='JavaScript'>
										<Icon type='book'/>JavaScript
									</Menu.Item>
									<Menu.Item key='PHP'>
										<Icon type='book'/>PHP
									</Menu.Item>
									<Menu.Item key='GO'>
										<Icon type='book'/>GO
									</Menu.Item>
									<Menu.Item key='mySQL'>
										<Icon type='database'/>mySQL
									</Menu.Item>
									<Menu.Item key='mongoDB'>
										<Icon type='database'/>mongoDB
									</Menu.Item>
									<Menu.Item key='others'>
										<Icon type='appstore-o'/>others
									</Menu.Item>
								</SubMenu>
								<SubMenu title={<span><Icon type='meh-o'/>休闲时光</span>}>
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
							</div>
					</Col>
					<Col span={1}></Col>
				</Row>
			</header>
		)
	}
}
