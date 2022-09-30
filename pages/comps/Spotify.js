import styles from '../../styles/Spotify.module.css'
import Image from 'next/image'
import Current from './TopSongs.js'




const Spotify = ({token}) => {
    const URI = 'https://accounts.spotify.com/authorize?client_id=9fd3324981ad47478e9bd85ebe108d57&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000%2Fcallback&scope=user-read-currently-playing%20user-top-read'



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
                    <Current token = {token}/>
                </div>


                

            </div>
        </div>
        
     );
}
 
export default Spotify;