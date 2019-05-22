import React, { Component } from 'react'
import './style.css';

var echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/radar')
require('echarts/lib/component/title')

class Radar extends Component {
  constructor(props) {
    super(props)
    this.setOption = this.setOption.bind(this)
    this.initPieChart = this.initPieChart.bind(this)
  }

  componentDidMount() {
    this.initPieChart();
  }

  componentDidUpdate() {
    this.initPieChart();
  }

  initPieChart() {
    const { data } = this.props
    let myChart = echarts.init(this.refs.radarChart)
    let options = this.setOption(data)
    myChart.setOption(options)
  }

  setOption(data) {
    return {
      title: {
        text: '充电桩性能雷达图',
        left:"center",
        textStyle:{
          color: 'white'
        }
      },
      tooltip: {},
      // legend: {
      //   data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
      // },
      radar: {
        name: {
          textStyle: {
            color: '#fff',
          }
        },
        indicator: [
          { name: '充电速度', max: 100 },
          { name: '耗电速度', max: 100 },
          { name: '破损', max: 100 },
          { name: '投放', max: 100 },
          { name: '使用', max: 100 },
          { name: '维修', max: 100 }
        ]
      },
      series: [{
        name: '估算性能vs实际性能',
        type: 'radar',
        data: [
          {
            value: [80, 70, 85, 73, 60, 90],
            name: '估算性能'
          },
          {
            value: [61, 58, 30, 50, 65, 88],
            name: '实际性能'
          }
        ]
      }]
    }
  }

  render() {
    return (
      <div className="radarWrap">
        <div ref="radarChart" style={{ width: "100%", height: "350px" }}>
        </div>
      </div>
    )
  }
}

export default Radar