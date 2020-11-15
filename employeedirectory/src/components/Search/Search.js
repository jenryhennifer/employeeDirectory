import React from 'react';
import './style.css';

function Search() {
  return (
    <div class="md-form mt-0">
      <input
        class="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <button type="submit" class="btn btn-primary mb-2">
        Search
      </button>
    </div>
  );
}

export default Search;
