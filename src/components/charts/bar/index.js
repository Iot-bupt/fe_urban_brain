import React, { Component } from 'react'
import './style.css';

var echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/component/title')

class Bar extends Component {
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
    let myChart = echarts.init(this.refs.barChart)
    let options = this.setOption(data)
    myChart.setOption(options)
  }

  setOption(data) {
    return {
      title: {
        text: '充电桩历史数据柱状图',
        left:"center",
        textStyle:{
          color: 'white'
        }
      },
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', '2012', '2013', '2014', '2015'],
          ['顺义区', 41.1, 30.4, 65.1, 53.3],
          ['海淀区', 86.5, 92.1, 85.7, 83.1],
          ['朝阳区', 24.1, 67.2, 79.5, 86.4]
        ]
      },
      xAxis: [
        { type: 'category', gridIndex: 0 },
        { type: 'category', gridIndex: 1 },
      ],
      yAxis: [
        { gridIndex: 0 },
        { gridIndex: 1 },
      ],
      grid: [
        { bottom: '55%' },
        { top: '55%' }
      ],
      series: [
        // These series are in the first grid.
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        { type: 'bar', seriesLayoutBy: 'row' },
        // These series are in the second grid.
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
      ]
    }
  }

  render() {
    return (
      <div className="barWrap">
        <div ref="barChart" style={{ width: "100%", height: "600px" }}>
        </div>
      </div>
    )
  }
}

export default Bar