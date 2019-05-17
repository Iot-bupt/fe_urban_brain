import React,{ Component } from 'react'
import './style.css';

import backgroundImgUrl from './../../static/image/world_slate.jpg'

class PublicManagemant extends Component {
  render(){
    return (
      <div className="publicManagemantContainer">
        <img src={backgroundImgUrl} alt="背景图" className="backgroundImg"/>
      </div>
    )
  }
  
}

export default PublicManagemant