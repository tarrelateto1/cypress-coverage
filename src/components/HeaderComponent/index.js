import React,{Component} from "react"
import {Layout} from "antd";

const {Header} = Layout;

export default class HeaderComponent extends Component{
    render(){
        return(
            <Header className="site-layout-background" style={{padding: 0}}/>
        )

    }
}
