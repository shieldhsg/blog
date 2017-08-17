import React from 'react';
import {Row,Col} from 'antd';

export default class PcIndexFooter extends React.Component{
	render(){
		return(
			<footer>
			<Col span={2}></Col>
			<Col span={20} class='footer'>
				<div>&copy;&nbsp;2017 胡盛国 All Right Reserved.</div>
			</Col>
			<Col span={2}>
			</Col>
			</footer>
		)
	}
}
