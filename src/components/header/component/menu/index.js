import React,{ Component } from 'react'
import {Link} from 'react-router-dom'
import './style.css';

const MenuList = [
  { text: '总览' ,url:'/'},
  { text: '公共管理' ,url:'/management'},
  { text: '公共安全' ,url:'/safety'},
  // { text: '公共服务' ,url:'/service'},
  { text: '视频' ,url:'/moniter'},
]

class Menu extends Component {
  render(){
    return (
      <div className="menuContainter">
        {MenuList.map((item, index) => {
          return (
            <Link to={item.url} className="linkText" key={index}>
              <div className="menuItem">{item.text}</div>
            </Link>
          )
        })
        }
      </div>
    )
  }
  
}

export default Menu