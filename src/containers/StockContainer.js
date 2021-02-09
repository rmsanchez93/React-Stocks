import React, { Component } from "react";
import StockComponent from "../components/Stock";

class StockContainer extends Component {
  render() {
    console.log(this.props, "props in StockContainer");
    return (
      <div>
        <h2>Stocks</h2>
        {
          //for every stock in stocks array we want a stock component
          //with that object as a prop also called stock
          this.props.stocks.map((stockObj) => {
            return (
              <StockComponent
                stockProp={stockObj}
                clickAction={this.props.handleStockClick}
              />
            );
          })

          // in ruby
          // array.map do | s |
          // end
        }
      </div>
    );
  }
}

export default StockContainer;
