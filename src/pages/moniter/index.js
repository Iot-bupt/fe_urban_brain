import React,{ Component } from 'react'
import './style.css';

import backgroundImgUrl from './../../static/image/world_vanilla.jpg'

class Moniter extends Component {
  render(){
    return (
      <div className="moniterContainer">
        <img src={backgroundImgUrl} alt="背景图" className="backgroundImg"/>
      </div>
    )
  }
  
}

export default Moniter