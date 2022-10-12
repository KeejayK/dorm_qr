import Head from 'next/head'
import Contact from '../comps/Contact.js'
import Spotify from '../comps/Spotify.js'
import Message from '../comps/Message.js'
import { motion } from 'framer-motion';


const SpotifyPage = () => {
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
 
export default SpotifyPage;

