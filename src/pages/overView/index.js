import React, { Component } from 'react'
import './style.css';

import DigitalCard from '../../components/digitalCard';

const CHARGING_PILE_DATA = {
  title: '停车地磁使用情况',
  items: [
    {
      icon: '',
      name: '已用',
      count: 10,
    },
    {
      icon: '',
      name: '空闲',
      count: 17,
    }
  ]
}
const CHARGING_PILE_STATUS = {
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
  render() {
    return (
      <div className="overViewContainer">
        <div className="DigitalCardWrap">
          <DigitalCard {...CHARGING_PILE_STATUS} />
          <DigitalCard {...CHARGING_PILE_DATA} />
        </div>
        <div className="MiddleCardWrap">
          
        </div>
        <div className="DigitalCardWrap">
          <DigitalCard {...CHARGING_PILE_DATA} />
          <DigitalCard {...CHARGING_PILE_STATUS} />
        </div>
      </div>
    )
  }
}

export default OverView