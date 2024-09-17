import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import './App.css';
import {Box} from '@mui/material'
import Feed from './components/Feed'
import VideoDetail from './components/VideoDetail'
import ChannelDetail from './components/ChannelDetail'
import SearchFeed from './components/SearchFeed'
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Box sx={{backgroundColor:'#000'}}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Feed/>}></Route>
          <Route path="/video/:id" element={<VideoDetail/>}></Route>
          <Route path="/channel/:id" element={<ChannelDetail/>}></Route>
          <Route path="/search/:searchTerm" element={<SearchFeed/>}></Route>
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
