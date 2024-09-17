import React, { useEffect, useState } from 'react';

// Define the API URL and options
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'af0cf85a99msh33cf1307eef8cefp12ad31jsn8ae13c5a6198',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};
const FetchFromAPI = ({ url, setVideos }) => {
  const udata = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json(); 
      setVideos(result.items); 
    } catch (error) {
      console.error('Error fetching data:', error); 
    }
  };

  useEffect(() => {
    udata();
  }, [url]); 
  
  return null; 
};

export default FetchFromAPI;
