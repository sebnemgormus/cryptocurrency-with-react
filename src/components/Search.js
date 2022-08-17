import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coins from './Coins'


function Search() {
  
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('');


  const handleChange = e => {
    setSearch(e.target.value);
    console.log(e.target.value)  
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search Currency'
          />
        </form>
      </div>
      {filteredCoins.map(coins => {
        <Coins coins={filteredCoins} />

    })}
  </div>
);
}
export default Search;