import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import {Search} from '@mui/icons-material'
const SearchBar = () => {
  const [val,setVal]=useState("")
  const navigate = useNavigate();
  const handlechange=(event)=>{
    setVal(event.target.value)
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    navigate(`/search/${val}`);
    setVal("");
  }
  return (
    <Paper component="form" onSubmit={handleSubmit} sx={{borderRadius:20,border:'1px solid #e3e3e3',pl:2,boxShadow:'none',mr:{sm:5}}}>
      <input className='search-bar' placeholder='Search...' value={val} onChange={handlechange}/>
      <IconButton type="submit" sx={{p:'10px',color:'red'}}>
      <Search/>
      </IconButton>
    </Paper>
  )
}

export default SearchBar