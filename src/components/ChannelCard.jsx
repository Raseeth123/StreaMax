import React from 'react'
import {Box,CardContent,CardMedia,Typography} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/Constants'
const ChannelCard = ({channelDetail,margintop}) => {
  return (
    <Box sx={{boxShadow:'none',borderRadius:'20px',display:'flex',justifyContent:'center',width: { xs: '100%', sm: '250px', md: '320px' },margin:'auto',height:'326px',marginTop:margintop}}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'}}>
          <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url||demoProfilePicture} alt={channelDetail?.snippet?.title} sx={{borderRadius:'50%',width:'180px',height:'180px',mb:2,border:'1px solid #e3e3e3'}}/>
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}}/>
          </Typography>
          {
            channelDetail?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}
              </Typography>
            )
          }
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard;
