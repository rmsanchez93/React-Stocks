import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

const MainContainer = () => {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sort, setSort] = useState("none");
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/stocks")
      .then((resp) => resp.json())
      .then((stocks) => setStocks(stocks));
  }, []);

  const handleRemoveStock = (stock) => {
    setPortfolio(portfolio.filter((port) => port !== stock));
  };

  const displayStocks = () => {
    let newStocks = stocks;

    if (sort !== "none") {
      sort === "Alphabetically"
        ? (newStocks = newStocks.sort((a, b) => (a.name > b.name ? 1 : -1)))
        : (newStocks = newStocks.sort((a, b) => (a.price < b.price ? 1 : -1)));
    }

    if (filter !== "all") {
      newStocks = newStocks.filter((stock) => stock.type === filter);
    }

    newStocks = newStocks.filter((stock) =>
      stock.name.toLowerCase().includes(query.toLowerCase())
    );

    return newStocks;
  };

  return (
    <div>
      <SearchBar
        sort={sort}
        setSort={setSort}
        setFilter={setFilter}
        query={query}
        setQuery={setQuery}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={displayStocks()}
            setPortfolio={setPortfolio}
            portfolio={portfolio}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            handleRemoveStock={handleRemoveStock}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;