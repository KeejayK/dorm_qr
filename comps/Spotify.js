import styles from '../styles/Spotify.module.css'
import Image from 'next/image'
import TopSongs from './TopSongs.js'




const Spotify = () => {

    return ( 

        <div className={styles.main}>
            <div className={styles.spotify}>
                <div className={styles.lableContainer}>
                    <Image src='/spotify1.png' width={18} height={18}/>
                    <p className={styles.lable}>Top Tracks This Month</p>
                    {/* list top tracks and top artists
                        also add link to compare music tastes
                    
                    */}


                </div>

                <div className={styles.songs}>                      
                    <TopSongs/>
                </div>


                

            </div>
        </div>
        
     );
}
 
export default Spotify;