/*import React from 'react'
import './Coins.css'
import { styled } from '@mui/material/styles';
import { FaRegStar, FaStar } from 'react-icons/fa';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CoinItem = (props) => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,

        },
      }));
      
    return (
      <>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableBody>

      <TableRow>
        <StyledTableCell align="right" className='lock'><FaStar className='icon-unlock'/><FaRegStar className='icon-lock'/> {props.coins.market_cap_rank}</StyledTableCell>
        <StyledTableCell align="right">{props.coins.name}</StyledTableCell>
        <StyledTableCell align="right">{props.coins.current_price.toLocaleString()}</StyledTableCell>
        <StyledTableCell align="right">{props.coins.price_change_percentage_24h.toFixed(2)}%</StyledTableCell>
        <StyledTableCell align="right">${props.coins.total_volume.toLocaleString()}</StyledTableCell>
        </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
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

*/

import React from 'react'
import './Coins.css'
import { styled } from '@mui/material/styles';
import { FaRegStar, FaStar } from 'react-icons/fa';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


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
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        
      }));

    //   console.log("name",props.coins.name[0])
     
    return (
        
        <StyledTableRow style={{'display': 'block',
        'flexDirection': 'row',
        'float': 'left',
        'alignItems': 'left',
        'flexWrap': 'wrap'}}>
        <StyledTableCell className='lock' ><FaStar className='icon-unlock'/><FaRegStar className='icon-lock'/> {props.coins.market_cap_rank}</StyledTableCell>
        <StyledTableCell >{props.coins.name}</StyledTableCell>
        <StyledTableCell >{props.coins.current_price.toLocaleString()}</StyledTableCell>
        <StyledTableCell style={{'alignItems': 'right'}}>{props.coins.price_change_percentage_24h.toFixed(2)}%</StyledTableCell>
        <StyledTableCell >${props.coins.total_volume.toLocaleString()}</StyledTableCell>
        </StyledTableRow>

    
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