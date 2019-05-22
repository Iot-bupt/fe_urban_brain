import React, { Component } from 'react'
import './style.css';

import DigitalCard from '../../components/digitalCard';
import Pie from '../../components/charts/pie';
import Radar from '../../components/charts/radar';
import Bar from '../../components/charts/bar';


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

const pieDataA = [
  {value: 2, name: "已使用"},
  {value: 3, name: "未使用"},
  {value: 1, name: "不可使用"}
]

const pieDataB = [
  {value: 5, name: "维修中"},
  {value: 1, name: "掉线"},
  {value: 6, name: "在线"}
]

class OverView extends Component {

  render() {
    return (
      <div className="overViewContainer">
        <div className="SideRowWrap">
          <div className="cardBorder"><Radar /></div>
          <div className="cardBorder"><Pie data={ pieDataA }/></div>  
        </div>
        <div className="MiddleRowWrap">
          <div className="cardBorder" id="barWrap"><Bar /></div>
        </div>
        <div className="SideRowWrap">
          <div className="cardBorder"><Pie data={ pieDataB }/></div>
          <div className="cardBorder"><DigitalCard {...CHARGING_PILE_DATA}/></div>
          <div className="cardBorder"><DigitalCard {...CHARGING_PILE_STATUS}/></div>          
        </div>
      </div>
    )
  }
}

export default OverView