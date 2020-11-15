import React from 'react';
import './style.css';

function Search() {
  const [search, setSearch] = React.useState("");
  const handleChange = event => {
    setSearch(event.target.value)
  }
  
  return (
    <div className="md-form mt-0">
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <button type="submit" className="btn btn-primary mb-2" value ={search} onChange ={ handleChange }>
        Search
      </button>
    </div>
  );
}

export default Search;
