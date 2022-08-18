import React from 'react'
import './Coins.css'
import { styled } from '@mui/material/styles';
import { FaRegStar, FaStar } from 'react-icons/fa';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';


const CoinItem = (props) => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,

        },
      }));
      
    return (
      <>
        <StyledTableCell className='lock'><FaStar className='icon-unlock'/><FaRegStar className='icon-lock'/> {props.coins.market_cap_rank}</StyledTableCell>

        <StyledTableCell >{props.coins.name}</StyledTableCell>
        <StyledTableCell >{props.coins.current_price.toLocaleString()}</StyledTableCell>
        <StyledTableCell >{props.coins.price_change_percentage_24h.toFixed(2)}%</StyledTableCell>
        <StyledTableCell >${props.coins.total_volume.toLocaleString()}</StyledTableCell>
     </>
        // <div className='coin-row'>
        //     <p className='lock'><FaStar className='icon-unlock'/><FaRegStar className='icon-lock'/> {props.coins.market_cap_rank}</p>
        //     <div className='img-symbol'>
        //         <img src={props.coins.image} alt='' />
        //         <p  className='coin-name'>{props.coins.name}</p>
        //     </div>
        //     <p className='coin-price'>${props.coins.current_price.toLocaleString()}</p>
        //     <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        //     <p className='hide-mobile'>${props.coins.total_volume.toLocaleString()}</p>
        // </div>
    )
}

export default CoinItem