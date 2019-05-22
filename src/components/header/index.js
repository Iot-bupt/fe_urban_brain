import React,{ Component } from 'react'
import Menu from './component/menu/index';
import moment from "moment";
import './style.css';

class Header extends Component {
  renderDate = () => {
    const date = moment().format('YYYY-MM-DD');
    return(
      <div className="text">{ date }</div>
    )
  }

  render(){
    return (
      <div className="header">
        <Menu />
        <div className="title">
          <div className="text">顺义区城市大脑</div>
          { this.renderDate() }
        </div>
      </div>
    )
  }
  
}

export default Header