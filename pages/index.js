import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Contact from './comps/Contact.js'
import Spotify from './comps/Spotify.js'
import Message from './comps/Message.js'



export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Oak Hall | 207</title>
      </Head>
      <Contact/>
      <Spotify token = {props}/>
      <Message/>
    
    </div>
  )
}

export const getServerSideProps = async () => {
  const token = process.env.TOKEN
  console.log(token);
  return {
    props: {
      token,
    },
  }
}
