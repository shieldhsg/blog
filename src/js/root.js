import React from 'react';
import ReactDOM from 'react-dom';
import PcIndex from './components/pc_index';
import 'antd/dist/antd.css';
export default class Root extends React.Component {
	render(){
		return (
			<div>
				<PcIndex/>
			</div>
		);
	};
}

ReactDOM.render(
	<Root/>,document.getElementById('mainContainer')
)
