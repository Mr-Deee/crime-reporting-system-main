import React from "react";
import "./trackcase.css";
import SearchBar from "./searches";
import SearchResults from "./searchresults";
import { useState } from "react";

const Trackcase = () => {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div>
      <h1 className="trackhead">Track Your Case</h1>
      <SearchBar setSearchResults={setSearchResults} />
      <div>
        <SearchResults results={searchResults} />
      </div>
    </div>
  );
};

export default Trackcase;
