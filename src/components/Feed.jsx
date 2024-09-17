import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Videos from './Videos';
import FetchFromAPI from '../utils/FetchFromAPI';
import { Box, Stack, Typography } from '@mui/material';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  const url = `https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${selectedCategory}&maxResults=50`;
  return (
    <>
      <FetchFromAPI url={url} setVideos={setVideos} />
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
          <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          
          <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
            Copyright © 2026 StreaMax
          </Typography>
        </Box>

        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white",marginLeft:{md:'30px',sm:'2px'} }}>
            {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
          </Typography>

          <Videos videos={videos} />
        </Box>
      </Stack>
    </>
  );
};

export default Feed;
