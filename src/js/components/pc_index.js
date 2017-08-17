import React from 'React';
import PcIndexHeader from './pc_index_header';
import PcIndexContent from './pc_index_content';
import PcIndexFooter from './pc_index_footer';

export default class PcIndex extends React.Component {
	render(){
		return(
			<div>
				{/*此处为PC端首页组件，由头部，内容，尾部组成*/}
				<PcIndexHeader/>
				<PcIndexContent/>
				<PcIndexFooter/>
			</div>
		)
	}
}
