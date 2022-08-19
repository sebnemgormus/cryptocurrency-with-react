import { useState } from 'react';
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import { Link } from 'react-router-dom'
import './Coins.css'
import Search from './Search'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Coins = ({ coins }) => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
    console.log(e.target.value)
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.green,
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
            {coins
              .filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))
              .map(coins => {
                return (
                  <StyledTableRow component={Link} to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                    <CoinItem coins={coins} />
                  </StyledTableRow>
                )
              })
            }
          </Table>
        </TableContainer>

      </div>
    </div>
  )
}
export default Coins
