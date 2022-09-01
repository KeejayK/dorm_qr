import styles from '../styles/Spotify.module.css'
import Image from 'next/image'
import Current from './Current.js'
import Past from './Past.js'


const Spotify = () => {
    return ( 

        <div className={styles.main}>
            <div className={styles.spotify}>
                <div className={styles.lableContainer}>
                    <Image src='/spotify1.png' width={18} height={18}/>
                    <p className={styles.lable}>Now Playing</p>
                </div>

                <div className={styles.songs}>                      
                    <Current/>
                </div>


                <div className={styles.lableContainer}>
                    <Image src='/spotify1.png' width={18} height={18}/>
                    <p className={styles.lable}>Previously Played</p>
                </div>

                <div className={styles.songs}>                      
                    <Past/>
                </div>

                

            </div>
        </div>
        
     );
}
 
export default Spotify;