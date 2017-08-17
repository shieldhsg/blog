import React from 'react';
import PcArticleCard from './pc_article_card';
import PcAffix from './pc_affix';
import PcSidebar from './pc_sidebar';
import {Row,Col,Card} from 'antd';

export default class PcIndexContent extends React.Component{
	render(){
		let articles = [];
		for(let count=0;count<20;count++){
				articles.push(<PcArticleCard/>);
		}
		return(
			<div>
			<Row>
				<Col span={4}>
					<PcSidebar/>
				</Col>
				<Col span={18}>
				{articles}
				</Col>
				<Col span={2}>
					<PcAffix/>
				</Col>
			</Row>
			</div>
		)
	}
}
