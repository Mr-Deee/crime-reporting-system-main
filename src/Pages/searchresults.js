import React from "react";

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
                  <strong>{crime.location}</strong>
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
