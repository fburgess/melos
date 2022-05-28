import React from "react";

function Search({ setQuery }) {
 
  return (
    <div className="searchbar">
      <h2> Search By Food Type:</h2>
      <div class="search-box">
      <input
        className="fas"
        type="text"
        id="search"
        placeholder=" Type a genre to search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      </div>
    </div>
  );
}

export default Search;