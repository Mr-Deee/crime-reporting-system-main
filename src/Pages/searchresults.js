import React from "react";
import "./search.css";
const SearchResults = ({ results }) => {
  return (
    <div>
      <ul>
        {results.map((crime, index) => (
          <div>
            <h1>Searched Results</h1>
            <div>
              <div className="card" key={index}>
                <div className="cardcontent">
                  Your is case is<br></br>
                  <strong>{crime.trackCase}</strong>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
