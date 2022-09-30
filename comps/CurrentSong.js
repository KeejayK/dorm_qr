import Song from './Song.js'
import React, { useState, useEffect } from 'react';



const TopSongs= () => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/now-playing')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
        console.log(data)
      })
  }, [])


    
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>


  return (  
      <div style= {{display: 'flex', marginTop: '10px', gap: '20px'}} >
          <Song img = {data.albumImageUrl} title = {data.title} link = {data.songUrl} artist = {data.artist}/>
          <Song img = '/paris_cover.jpg' title = 'helloooo'/>
      </div>


  );


}
 
export default TopSongs;

