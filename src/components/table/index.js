import React from 'react'
import './style.css';


const Table = (data) => {
  const { title } = data

  return (
    <div className="tableContainer">
      <div className="tableTitle">{ title }</div>
      <div className="tableContent">
        <table className="cardTable">
          <tr className="cardTr">
            <td></td>
            <td>本日</td>
            <td>本周</td>
            <td>本月</td>
          </tr>
          <tr className="cardTr">
            <td>充电桩</td>
            <td>29</td>
            <td>260</td>
            <td>391</td>
          </tr>
          <tr className="cardTr">
            <td>停车地磁</td>
            <td>50</td>
            <td>79</td>
            <td>102</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Table 