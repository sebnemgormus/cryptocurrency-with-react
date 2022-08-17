import React from 'react'
import './Coins.css'
import { FaRegStar, FaStar } from 'react-icons/fa';

const CoinItem = (props) => {
    return (
        <div className='coin-row'>
            <p className='lock'><FaStar className='icon-unlock'/><FaRegStar className='icon-lock'/> {props.coins.market_cap_rank}</p>
            <div className='img-symbol'>
                <img src={props.coins.image} alt='' />
                <p  className='coin-name'>{props.coins.name}</p>
            </div>
            <p className='coin-price'>${props.coins.current_price.toLocaleString()}</p>
            <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
            <p className='hide-mobile'>${props.coins.total_volume.toLocaleString()}</p>
        </div>
    )
}

export default CoinItem