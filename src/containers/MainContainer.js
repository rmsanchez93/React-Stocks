import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

const stockUrl = "http://localhost:3000/stocks";
class MainContainer extends Component {
  state = {
    allStocks: [],
    myStocks: [],
    sort: "None",
    filter: "All",
    search: ""
  };

  componentDidMount = () => {
    fetch(stockUrl)
      .then((response) => response.json())
      .then((allStocks) => this.setState({ allStocks }));
  };

  addStock = (stock) => {
    if (!this.state.myStocks.find((oldStock) => stock === oldStock)) {
      this.setState({ myStocks: [...this.state.myStocks, stock] });
    }
  };

  removeStock = (stock) => {
    this.setState({
      myStocks: this.state.myStocks.filter((oldStock) => oldStock !== stock),
    });
  };

  updateSort = (sort) => {
    this.setState({sort})
  }

  updateFilter = (filter) => {
    this.setState({filter})
  }

  updateSearch = (search) => {
    this.setState({search})
  }

  displayStocks = () => {
    let displayStocks = this.state.allStocks.filter(stock=> stock.name.toLowerCase().includes(this.state.search)
    )

    if (this.state.filter !== "All"){
      displayStocks = displayStocks.filter(stock => stock.type === this.state.filter)
    }

    switch(this.state.sort){
      case "Alphabetically":
        return displayStocks.sort((a,b)=> a.name > b.name ? 1 : -1)
      case "Price":
          return displayStocks.sort((a,b)=> a.price > b.price ? -1 : 1)
      case "None":
        return displayStocks
    }
    return displayStocks
  }

  render() {
    return (
      <div>
        <SearchBar 
          sort={this.state.sort}
          updateSort = {this.updateSort}
          updateSearch = {this.updateSearch}
          updateFilter = {this.updateFilter}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              addStock={this.addStock}
              allStocks={this.displayStocks()}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              removeStock={this.removeStock}
              myStocks={this.state.myStocks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
