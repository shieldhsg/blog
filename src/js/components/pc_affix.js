import React from 'react';
import ReactDOM from 'react-dom';
import {Affix,Button,Icon} from 'antd';

export default class PcAffix extends React.Component{
    render(){
        return(
            <div class='affix' >
              <Affix offsetTop={120} >
                <Button type='primary' icon='up'>顶部</Button><br/>
                <Button type='primary' icon='link'>书签</Button><br/>
                <Button type='primary' icon='share-alt'>分享</Button><br/>
                <Button type='primary' icon='down'>底部</Button><br/>
              </Affix>
            </div>
        )
    }
}
