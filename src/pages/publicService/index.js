import React,{ Component } from 'react'
import './style.css';

import backgroundImgUrl from './../../static/image/world_arctic.jpg'

class PublicService extends Component {
  render(){
    return (
      <div className="publicServiceContainer">
        <img src={backgroundImgUrl} alt="背景图" className="backgroundImg"/>
      </div>
    )
  }
  
}

export default PublicService