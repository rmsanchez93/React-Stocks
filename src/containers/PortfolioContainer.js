import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  render() {
    const { portfolio, handleRemoveStock } = this.props;
    return (
      <div>
        <h2>My Portfolio</h2>
        {portfolio.map((port) => (
          <div onClick={() => handleRemoveStock(port)}>
            <Stock stock={port} key={port.id} />
          </div>
        ))}
      </div>
    );
  }
}

export default PortfolioContainer;
