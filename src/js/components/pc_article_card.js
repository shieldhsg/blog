import React from 'react';
import ReactDOM from 'react-dom';
import {Row,Col,Card} from 'antd';
import showdown from 'showdown';

export default class PcArticleCard extends React.Component{
  render(){
    let articleContent = "+  列表导航的层级扩展性强；水平空间利用率高，可展示更多内容；导航可以固定，使得用户在操作和浏览时可以快速定位和切换当前位置，非常高效。导航的层级扩展性强；水平空间利用率高，可展示更多内容；导航可以固定，使得用户在操作和浏览时可以快速定位和切换当前位置，非常高效。导航的层级扩展性强；水平空间利用率高，可展示更多内容；导航可以固定，使得用户在操作和浏览时可以快速定位和切换当前位置，非常高效。导航的层级扩展性强；水平空间利用率高，可展示更多内容；导航可以固定，使得用户在操作和浏览时可以快速定位和切换当前位置，非常高效。";
    let converter = new showdown.Converter();
    let text = converter.makeHtml(articleContent);
    return(
      <div class='article_div'>

            <Card class='article_card'  title='JavaScript内部逻辑探讨'>
                <div dangerouslySetInnerHTML={{__html:text}}/>
            </Card>

      </div>
    );
  }
}
