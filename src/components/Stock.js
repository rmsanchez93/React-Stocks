import React from 'react'

const Stock = (props) => (
  
  <div onClick={()=>props.clickAction(props.stockProp)}>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            props.stockProp.name
          }</h5>
        <p className="card-text">{
           `${props.stockProp.ticker} : ${props.stockProp.price}`
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
