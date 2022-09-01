import Song from './Song.js'
import React, { useState, useEffect } from 'react';


// export const getStaticProps = async () => {
//     TOKEN = process.env.TOKEN
//     const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
//         method: 'GET',
//         headers: {'Authorization': `bearer ${TOKEN}`}
//     })

//     const posts = await res.json()
//     console.log(posts)

//     return {
//         props: {
//             posts,
//         },
//     }
// }


const Current = (props) => {
  console.log(props)
  let token = props.secret
  console.log('TESTING')
  console.log(token)

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      method: 'GET',
      headers: {'Authorization': `bearer ${token}`}
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])


  console.log(data)

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>


  return (  
      <div style= {{display: 'flex', marginTop: '10px', gap: '20px'}} >
          {/* <Song img = '/paris_cover.jpg' title = '12345678'/>
          <Song img = '/paris_cover.jpg' title = 'helloooo'/> */}


      </div>


  );


}
 
export default Current;


function getStaticProps() {
  return {
   props: {
    secret: props.env.TOKEN
   }
  }
 }