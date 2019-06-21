import React from 'react'
import './style.css';

import carIcon from "./../../../static/image/car.png";

const BarCard = (data) => {
  const { title, items } = data

  return (
    <div className="bar_digitalCardContainer">
      <div className="bar_cardTitle">{ title }</div>
      <div className="bar_cardContent">
        { items.map((item,index) => {
          return (
            <div className="bar_itemContent" key={ index }>
              <div><img src={ carIcon } alt="汽车" className="bar_itemIcon"/></div>
              <div className="bar_itemTitle">{ item.name }</div>
              <div className="bar_itemBar"><div className="bar_itemBar_color" style={{width: item.count+'%'}}/></div>
              <div className="bar_itemNumber">{ item.count }</div>
            </div>
          )
        }) }
      </div>
    </div>
  )
}

export default BarCard 