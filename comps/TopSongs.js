import Song from './Song.js'
import React, { useState, useEffect } from 'react';



const TopSongs= (props) => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)


    
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

