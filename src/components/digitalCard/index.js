import React from 'react'
import './style.css';

import carIcon from "./../../static/image/car.png";

const DigitalCard = (data) => {
  const { title, items } = data

  return (
    <div className="digitalCardContainer">
      <div className="cardTitle">{ title }</div>
      <div className="cardContent">
        { items.map((item,index) => {
          return (
            <div className="itemContent" key={ index }>
              <div><img src={ carIcon } alt="汽车" className="itemIcon"/></div>
              <div className="itemContext">
                <div className="itemTitle">{ item.name }</div>
                <div className="itemNumber">{ item.count }</div>
              </div>
            </div>
          )
        }) }
      </div>
    </div>
  )
}

export default DigitalCard 