import styles from '../styles/Song.module.css'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const Song = ({img, title, artist, link}) => {
    console.log()
    return (  
        <div className='main'>
            <div className={styles.song}>
                <div className= {styles.songCover}>
                    <Image src = {img} layout={'fixed'} width={40} height={40}/>    
                </div>

                <div className={styles.text}>
                        <Marquee pauseOnHover={true} direction='left' gradient={false}>     
                            <p className={styles.title}>
                                <span>{title}</span>
                            </p>
                        </Marquee>
                        <p className={styles.artist}>
                            <span>Lauv</span>
                        </p>
                </div>

            </div>


        </div>

    );
}
 
export default Song;