import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Videos from './Videos';
import { useState, useEffect } from 'react';
import {Typography} from '@mui/material';
import FetchFromAPI from '../utils/FetchFromAPI';

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  const url = `https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${searchTerm}&maxResults=50`;
  return (
    <>
      <FetchFromAPI url={url} setVideos={setVideos} />
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white",ml:"15px",fontSize:{ xs: '22px', sm: '24px',md:'30px'} }}>
            Search results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> Videos
      </Typography>
      <Box minHeight="95vh" sx={{ padding: { xs: '16px', sm: '24px' } }}>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" p="2">
        <Box sx={{ width: '100%', marginBottom: '16px' }} />
        <Videos videos={videos} />
      </Box>
    </Box>
    </>
  );
}

export default SearchFeed;
