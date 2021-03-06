import React, { Component } from 'react'
import './style.css';

var echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/pie')
require('echarts/lib/component/title')

class Pie extends Component {
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
    const { data, title } = this.props
    let myChart = echarts.init(this.refs.pieChart)
    let options = this.setOption(data, title)
    myChart.setOption(options)
  }
  
  setOption(data, title) {
    return {
      title:{
        text: title,
        left:"center",
        textStyle:{
          color: 'white'
        }
      },
      series : [
        {
          name: '比例',
          type: 'pie',
          data: data,
          label: {
            normal: {
              formatter: "{d}% \n{b}",
            }
          }
        }
      ]
    }
  }

  render() {
    return (
    <div className="pieWrap">
      <div ref="pieChart" style={{width: "100%", height: "250px"}}>
      </div>
    </div>
  )
}
}

export default Pie