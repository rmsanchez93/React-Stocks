import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  render() {
    const { stocks, portfolio, setPortfolio } = this.props;

    return (
      <div>
        <h2>Stocks</h2>
        {stocks.map((stock) => (
          <div onClick={() => setPortfolio([...portfolio, stock])}>
            <Stock stock={stock} key={stock.id} />
          </div>
        ))}
      </div>
    );
  }
}

export default StockContainer;
