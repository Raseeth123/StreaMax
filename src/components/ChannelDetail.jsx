import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Videos from './Videos';
import ChannelCard from './ChannelCard';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchChannelDetail = async () => {
      try {
        const channelResponse = await fetch(`https://youtube-v31.p.rapidapi.com/channels?part=snippet&id=${id}`, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
            'X-RapidAPI-Key': 'af0cf85a99msh33cf1307eef8cefp12ad31jsn8ae13c5a6198', 
          },
        });
        
        const channelData = await channelResponse.json();
        setChannelDetail(channelData?.items[0]);
        
        const videosResponse = await fetch(`https://youtube-v31.p.rapidapi.com/search?part=snippet&channelId=${id}&maxResults=50`, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
            'X-RapidAPI-Key': 'af0cf85a99msh33cf1307eef8cefp12ad31jsn8ae13c5a6198',
          },
        });

        const videosData = await videosResponse.json();
        setVideos(videosData?.items); 

      } catch (error) {
        console.error("Error fetching channel details:", error);
      }
    }

    fetchChannelDetail();
  }, [id]);

  console.log("Channel Detail:", channelDetail);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{background:'linear-gradient(90deg,rgba(0,238,247,1) 0%,rgba(206,3,184,1) 100%,rgba(0,212,255,1) 100%)',zIndex:10,height:'300px'}}
        />
         <ChannelCard channelDetail={channelDetail} margintop="-110px"/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr:{sm:'100px',md:'20px'},ml:{md:'20px'}}}/>
          <Videos videos={videos}/>
      </Box>
    </Box>
  );
}

export default ChannelDetail;
