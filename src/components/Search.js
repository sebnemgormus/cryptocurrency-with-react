import React from 'react';


function Search({ search, handleChange }) {

  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <form>
          <input
            value={search}
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search Currency'
          />
        </form>
      </div>
    </div>
  );
}
export default Search;