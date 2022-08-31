import styles from '../styles/Spotify.module.css'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'


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
                    <div className={styles.song}>
                        <div className={styles.current}>
                            <div className= {styles.songCover}>
                                <Image src = '/paris_cover.jpg' layout={'fixed'} width={40} height={40}/>    
                            </div>

                            <div className={styles.currentText}>
                                    <Marquee pauseOnHover={true} direction='left' gradient={false}>     
                                        <p className={styles.title}>
                                            <span>Indigo</span>
                                        </p>
                                    </Marquee>
                                    <p className={styles.artist}>
                                        <span>Lauv</span>
                                    </p>
                                </div>

                        </div>


                    </div>
                    <div className={styles.song}>
                        <div className={styles.current}>
                            <div className= {styles.songCover}>
                                <Image src = '/paris_cover.jpg' layout={'fixed'} width={40} height={40}/>    
                            </div>

                            
                            <div className={styles.currentText}>
                                <Marquee pauseOnHover={true} direction='left' gradient={false}>     
                                    <p className={styles.title}>
                                        <span>Indigo</span>
                                    </p>
                                </Marquee>
                                <p className={styles.artist}>
                                    <span>Lauv</span>
                                </p>
                            </div>
                        





                        </div>
                    </div>
                </div>

                <div className={styles.lableContainer}>
                    <a href='https://www.snapchat.com/add/keejaykim?share_id=L1zGgiZmtcQ&locale=en-US'>
                            <Image src='/spotify1.png' width={18} height={18}/>
                    </a>
                    <p className={styles.lable}>Previously Played</p>
                </div>

                <div className={styles.songs}>                       
                    <div className={styles.song}>
                        <div className={styles.current}>
                            <div className= {styles.songCover}>
                                <Image src = '/paris_cover.jpg' layout={'fixed'} width={40} height={40}/>    
                            </div>

                            <div className={styles.currentText}>
                                    <Marquee pauseOnHover={true} direction='left' gradient={false}>     
                                        <p className={styles.title}>
                                            <span>Indigo</span>
                                        </p>
                                    </Marquee>
                                    <p className={styles.artist}>
                                        <span>Lauv</span>
                                    </p>
                                </div>

                        </div>


                    </div>
                    <div className={styles.song}>
                        <div className={styles.current}>
                            <div className= {styles.songCover}>
                                <Image src = '/paris_cover.jpg' layout={'fixed'} width={40} height={40}/>    
                            </div>

                            
                            <div className={styles.currentText}>
                                <Marquee pauseOnHover={true} direction='left' gradient={false}>     
                                    <p className={styles.title}>
                                        <span>Indigo</span>
                                    </p>
                                </Marquee>
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