import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Coins from './components/Coins'
import Coin from './routes/Coin'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false').then((response) => {
      setCoins(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])


  const handleChange = e => {
    setSearch(e.target.value);
    console.log(e.target.value)  
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Coins 
        coins={coins}

        />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;