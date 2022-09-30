import Song from './Song.js'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const TopSongs= ({token}) => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  
  console.log('Token:')
  const authToken = [Object.values(token)[0]]
  console.log(authToken)

  useEffect(() => {
    setLoading(true)

    fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      method: 'GET',
      headers: {"Authorization": `Bearer ${authToken}`}
    })
    .then(response => response.json().then(data => ({
      data
    })))
  })
  
    

  console.log('Data:')
  console.log(data)

  
    
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  

  return (  
      <div style= {{display: 'flex', marginTop: '10px', gap: '20px'}} >
          <Song img = '/paris_cover.jpg' title = '12345678'/>
          <Song img = '/paris_cover.jpg' title = 'helloooo'/>


      </div>


  );


}
 
export default TopSongs;

