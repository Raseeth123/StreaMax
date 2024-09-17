import React from 'react'
import { Stack,Box } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
const Navbar = () => {
  return (
    <>
    <Stack direction="row" alignItems="center" p={2} sx={{position:'sticky',background:'black', top:0,justifyContent:'space-between'}}>
      <Link to="/" style={{display:'flex',alignItems:'center',background:'black'}}> 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_-CT-J7k03xkRQ5X4tW3Vrv5pM48B9nhMxQ&s" alt="logo" height={50} style={{ borderRadius: '50%',width: { xs: '40px', sm: '65px', md: '65px' } }}/>
        <Box 
      component="h3" 
      sx={{
        color: 'white',
        marginLeft: '15px',
        fontFamily: 'cursive',
        display: { xs: 'none', md: 'block' },
        zIndex:1000,
        background:'black',
      }}
    >
      StreaMax
    </Box>
      </Link>
      <SearchBar/>
    </Stack>
    </>
    )
}

export default Navbar