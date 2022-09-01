import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Contact from './Contact.js'
import Spotify from './Spotify.js'
import Message from './Message.js'


export default function Home() {
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
