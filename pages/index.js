import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Contact from '../comps/Contact.js'
import Spotify from '../comps/Spotify.js'
import Message from '../comps/Message.js'

export const getServerSideProps = async () => {
  const URI = 'https://accounts.spotify.com/authorize?client_id=9fd3324981ad47478e9bd85ebe108d57&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing%20user-top-read'
  const res = await fetch(URI, { 
    method: 'GET',
    headers: {}
  });
  const data = await res.json();

  return {
    props: { info: data }
  }
}


export default function Home(props) {
  
  console.log(props)
  return (
    <div>
      <Head>
        <title>Oak Hall | 207</title>
      </Head>
      <Contact/>
      <Spotify/>
      <Message/>
    
    </div>
  )
}

