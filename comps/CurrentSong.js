import Song from './Song.js'
import React, { useState, useEffect } from 'react';



const TopSongs= () => {
  const [data, setData] = useState({isPlaying: false, albumImageUrl: 'https://i.scdn.co/image/ab67616d0000b2735355919e31efac9b14c45c49'});
  const [isLoading, setLoading] = useState(false)

  const [recent, setRecent] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch('/api/now-playing')
      .then((res) => res.json())
      .then((data) => {
        if (!data.isPlaying) {
          fetch('/api/last-played')
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
            console.log('Not Currently Playing Anything')
            console.log(data)

          })
        }

        setData(data)
        setLoading(false)
        console.log(data)
      })


  }, [])


    
  if (isLoading) return <p>Loading...</p>
  // if (!data.isPlaying) return <p>Not Currently Playing </p>


  return (  
      <div style= {{display: 'flex', marginTop: '10px', gap: '20px'}} >
          <Song img = {data.albumImageUrl} title = {data.title} link = {data.songUrl} artist = {data.artist}/>
          <Song img = '/paris_cover.jpg' title = 'helloooo'/>
      </div>


  );


}
 
export default TopSongs;

