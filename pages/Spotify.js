import styles from '../styles/Spotify.module.css'
import Image from 'next/image'

const Spotify = () => {
    return ( 
        <div className={styles.main}>
            <div className={styles.spotify}>

                <div className={styles.lableContainer}>
                    <a href='https://www.snapchat.com/add/keejaykim?share_id=L1zGgiZmtcQ&locale=en-US'>
                            <Image src='/spotify1.png' width={18} height={18}/>
                    </a>
                    <p className={styles.lable}>Now Playing</p>
                </div>

                <div className={styles.songs}>
                                    
                    <div className={styles.jaeSpotify}>

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

            </div>

        </div>
        
     );
}
 
export default Spotify;