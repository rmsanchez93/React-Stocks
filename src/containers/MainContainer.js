import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolioStocks: [],
    sort: "None"
  };

  componentDidMount() {
    //to make sure our component is 'read' before we fetch
    fetch("http://localhost:3000/stocks")
      .then((res) => res.json())
      .then((fetchedStocks) => {
        this.setState({
          stocks: fetchedStocks,
        });
      });
  }

  handleStockClick = (clickedStock) => {
    //update our portfolio array with stock that was clicked
    //function needs to  be at the same level
    //as where our state is at
    console.log("This stock is clicked", clickedStock);
    this.setState({
      portfolioStocks: [...this.state.portfolioStocks, clickedStock]
    })
  };

  sellStock = (clickedStock) =>{
    //set new variable
    let newPortfolio = this.state.portfolioStocks.filter((stock)=> clickedStock.id !== stock.id)

    this.setState({
      portfolioStocks:newPortfolio
    })
  }

  changeHandler = (value) =>{
    //change state value for alpha and price
    console.log('alpha or price clicked')
    this.setState({
      sort: value
    })

  }

  displayStocks = () =>{
    //the one function to decide which array get set to the value of stocks
    if(this.state.sort == 'alpha'){
      //return array sort in alphabetical order
      return this.state.stocks.sort((a, b)=> a.name > b.name ? 1 : -1)
    }
    else if(this.state.sort == 'price'){
      //return array sorted by price
      return this.state.stocks.sort((a, b)=> a.price > b.price ? 1 : -1)
    }
    else{
      return this.state.stocks
    }
  }
  render() {
    return (
      <div>
        <SearchBar  changeHandler={this.changeHandler} alpha={this.state.alpha} price={this.state.price}/>

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.displayStocks()}
              handleStockClick={this.handleStockClick}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer 
              stocks={this.state.portfolioStocks}
              sellStock={this.sellStock}/>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
