import React from 'react'
import './Coins.css'
import { styled } from '@mui/material/styles';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { BsArrowUpRight, BsArrowDownLeft } from "react-icons/bs";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';


const CoinItem = (props) => {

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    
    <>
      <StyledTableCell className='lock' ><FaStar className='icon-unlock' /><FaRegStar className='icon-lock' /> {props.coins.market_cap_rank}</StyledTableCell>
      <StyledTableCell className='img-symbol'>
        <img src={props.coins.image} alt='' />
        {props.coins.name}
      </StyledTableCell>
      <StyledTableCell >${props.coins.current_price.toLocaleString()}</StyledTableCell>
      <StyledTableCell style={{ 'alignItems': 'right' }}>
      {props.coins.price_change_percentage_24h < 0 ? (
            <p style={{color:'red'}}>{props.coins.price_change_percentage_24h.toFixed(2)}% <BsArrowDownLeft /></p>
          ) : (
            <p style={{color:'green'}}>{props.coins.price_change_percentage_24h.toFixed(2)}% <BsArrowUpRight /></p>
          )}</StyledTableCell>
      <StyledTableCell >${props.coins.total_volume.toLocaleString()}</StyledTableCell>
    </>
  )
}

export default CoinItem