import React, { Component } from 'react'
import './style.css';

import DigitalCard from '../../components/card/digitalCard';
import Pie from '../../components/charts/pie';
import Radar from '../../components/charts/radar';
import Bar from '../../components/charts/bar';
import BarCard from '../../components/card/barCard';
import Table from '../../components/table';


const parkingGeoData_table = {
  title: '停车地磁使用情况',
}
const chargingPileData_card = {
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
const chargingPileData_bar_card = {
  title: '各街道充电桩数量分布',
  items: [
    {
      icon: '',
      name: '沿河街道',
      count: 20,
    },
    {
      icon: '',
      name: '十里河街道',
      count: 50,
    },
    {
      icon: '',
      name: '万岁街道',
      count: 15,
    },
    {
      icon: '',
      name: '上庄街道',
      count: 73,
    },
    {
      icon: '',
      name: '沙河街道',
      count: 11,
    }
  ]
}

const chargingPileData_pie = {
  title: '充电桩使用情况',
  data : [
    {value: 5, name: "维修中"},
    {value: 1, name: "掉线"},
    {value: 6, name: "在线"}
  ]
}

class OverView extends Component {

  render() {
    return (
      <div className="overViewContainer">
        <div className="SideRowWrap">
          <div className="cardBorder"><Radar /></div>
          <div className="cardBorder"><BarCard {...chargingPileData_bar_card}/></div>  
        </div>
        <div className="MiddleRowWrap">
          <div className="cardBorder" id="barWrap"><Bar /></div>
        </div>
        <div className="SideRowWrap">
          <div className="cardBorder"><Pie { ...chargingPileData_pie }/></div>
          <div className="cardBorder"><Table {...parkingGeoData_table}/></div>
          <div className="cardBorder"><DigitalCard {...chargingPileData_card}/></div>          
        </div>
      </div>
    )
  }
}

export default OverView