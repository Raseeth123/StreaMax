import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import Videos from './Videos';

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [relVideos, setRelVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const videosResponse = await fetch(
          `https://youtube-v31.p.rapidapi.com/videos?part=snippet,statistics&id=${id}`, {
            method: 'GET',
            headers: {
              'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
              'X-RapidAPI-Key': 'af0cf85a99msh33cf1307eef8cefp12ad31jsn8ae13c5a6198',
            },
          }
        );
        const videoData = await videosResponse.json();
        setVideo(videoData?.items[0]);

        const relVideoResponse = await fetch(
          `https://youtube-v31.p.rapidapi.com/search?part=snippet&relatedToVideoId=${id}&type=video`, {
            method: 'GET',
            headers: {
              'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
              'X-RapidAPI-Key': 'af0cf85a99msh33cf1307eef8cefp12ad31jsn8ae13c5a6198',
            },
          }
        );
        const relData = await relVideoResponse.json();
        setRelVideos(relData?.items);
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };
    fetchVideoDetails();
  }, [id]);

  if (!video?.snippet || !video?.statistics) return 'Loading...';

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = video;

  return (
    <Box minHeight="90vh"> 
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color='#fff' variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff' }} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color='#fff'>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'skyblue', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1,xs:5}} justifyContent="center" alignItems="center">
         <Videos videos={relVideos} direction={"column"}/>
      </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
