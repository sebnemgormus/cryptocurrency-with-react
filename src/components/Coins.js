import { useState, useEffect } from 'react';
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import { Link } from 'react-router-dom'
import './Coins.css'
import Search from './Search'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Coins = ({coins}) => {

      
//   const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
    console.log(e.target.value)  
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
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
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


  
//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];

//   const filteredCoins = coins.filter(coin =>
//     coin.name.toLowerCase().includes(search.toLowerCase())
//   );{}
    // console.log(props.coins)
    return (
        <div className='container'>
            <div>
                <Search
                    coins={coins}
                    search={search}
                    setSearch={setSearch}
                    handleChange={handleChange}
                />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell >#</StyledTableCell>
          <StyledTableCell >Coin</StyledTableCell>
          <StyledTableCell >Price</StyledTableCell>
          <StyledTableCell >24h</StyledTableCell>
          <StyledTableCell >24h Volume</StyledTableCell>
          </TableRow>
        </TableHead>
        </Table> 
        
   
        {coins
                .filter((coin)=>coin.name.toLowerCase().includes(search.toLowerCase()))
                .map(coins => {
                    return (
                    <StyledTableRow>
                        <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                            <CoinItem coins={coins} />  
                        </Link>
                    </StyledTableRow>
                    )
                })}
       
        </TableContainer> 
    
    </div>
    </div>
    )
}
 export default Coins
                {/* <div className='heading'>
                    <p>#</p>
                    <p>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>24h Volume</p>
                </div> */}
                {/* {props.coins
                .filter((coin)=>coin.name.toLowerCase().includes(search.toLowerCase()))
                .map(coins => {
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

*/}