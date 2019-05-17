import React,{ Component } from 'react'
import './style.css';

import backgroundImgUrl from './../../static/image/world.jpg'

class OverView extends Component {
  render(){
    return (
      <div className="overViewContainer">
        <img src={backgroundImgUrl} alt="背景图" className="backgroundImg"/>
      </div>
    )
  }
}

export default OverView