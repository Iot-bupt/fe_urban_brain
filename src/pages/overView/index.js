import React,{ Component } from 'react'
import './style.css';

import backgroundImgUrl from './../../static/image/world.jpg'
import DigitalCard from '../../components/digitalCard';

const CHARGING_PILE_DATA = {
  title: '充电桩使用情况',
  items: [
    {
      icon: '',
      name: '已用',
      count: 20,
    },
    {
      icon: '',
      name: '空闲',
      count: 10,
    }
  ]
}

class OverView extends Component {
  render(){
    return (
      <div className="overViewContainer">
        <img src={backgroundImgUrl} alt="背景图" className="backgroundImg"/>
        <div className="chartWrap">
          <DigitalCard {...CHARGING_PILE_DATA} />
        </div>
      </div>
    )
  }
}

export default OverView