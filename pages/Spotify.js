import styles from '../styles/Spotify.module.css'
import Image from 'next/image'

const Spotify = () => {
    return ( 
        <div className={styles.spotify}>

            <div className={styles.jaeSpotify}>
                <p className={styles.lable}>Now Playing</p>
                <div className={styles.current}>
                    <div style = {{borderRadius: '10px', overflow: 'hidden'}}>
                        <Image src = '/paris_cover.jpg' layout={'fixed'} height={35} width={40}/>    
                    </div>

                    <div className={styles.currentText}>
                        <p className={styles.title}>
                            <span>Paris in the Rain</span>
                        </p>
                        <p className={styles.artist}>
                            <span>Lauv</span>
                        </p>
                    </div>

                </div>

              
            </div>
            <div className={styles.keejaySpotify}>
                <p className={styles.lable}>Now Playing</p>
                <div className={styles.current}>
                    <div style = {{borderRadius: '10px', overflow: 'hidden'}}>
                        <Image src = '/paris_cover.jpg' layout={'fixed'} height={35} width={40}/>    
                    </div>
                    <div className={styles.currentText}>
                        <p className={styles.title}>
                            <span>Paris in the Rain</span>
                        </p>
                        <p className={styles.artist}>
                            <span>Lauv</span>
                        </p>
                    </div>

                </div>
              
            </div>
        </div>
     );
}
 
export default Spotify;