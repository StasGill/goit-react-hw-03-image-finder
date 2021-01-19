import React from 'react'

const Searchbar = ({onChange,onSubmit, value}) => {
    return (
        <header className="Searchbar">
        <form className="SearchForm" onSubmit={onSubmit} >
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
      
          <input
            className="SearchForm-input"
            type="text"
            placeholder="Search images and photos"
            name='searchQuery' onChange={onChange} value={value}
          />
        </form>
      </header>
      
    );
}

export default Searchbar;





