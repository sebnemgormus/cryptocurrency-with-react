import React from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import { Link } from 'react-router-dom'

import './Coins.css'
import Search from './Search'



const Coins = (props) => {
    return (
        <div className='container'>
            <div>
                <Search />
                <div className='heading'>
                    <p>#</p>
                    <p>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>24h Volume</p>
                </div>
                {props.coins.map(coins => {
                    return (
                        <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                            <CoinItem coins={coins} />
                        </Link>

                    )
                })}
            </div>
        </div>
    )
}

export default Coins