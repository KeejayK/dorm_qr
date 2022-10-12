import styles from '../styles/About.module.css'
import Head from 'next/head'
import Image from 'next/image'
import us from "../public/us.svg"
import { motion } from 'framer-motion';
import Spotify from './Spotify.js'


const About = () => {
    return (  
        <div className={styles.main}>
            <Head>
                <title>Oak Hall | 207</title>
            </Head>
            <div className={styles.content}>
                <div className={styles.keejayContainer}>
                    <div className={styles.logo} style={{marginBottom: 0}}>
                        <Image src='/profile.png' width={100} height={100}/>
                    </div>
                    <div className={styles.lableContainer}>
                        <p className={styles.name}>Keejay Kim</p>
                        <p>Computer Science</p>
                        <p>Boyds, Maryland</p>
                    </div>
                </div>


                <div className={styles.jaeContainer}>
                    <div className={styles.logo} >
                        <Image src='/profile.png' width={100} height={100}/>
                    </div>
                    <div className={styles.lableContainer}>
                        <p className={styles.name}>Jaechan Lee</p>
                        <p>Computer Science</p>
                        <p>San Jose, California</p>
                    </div>
                </div>

                
                <div className={styles.overlapGrid}>
                    <Image src={us} height={350} width={350} style ={{marginLeft: -10}}/>
                    {/* <Image src={boyds} height={350} width={350} style ={{marginLeft: -20}}/>
                    <Image src={sanJose} height={350} width={350} style ={{marginLeft: 0}}/> */}

                    <svg 
                        className={styles.svg}
                        viewBox="0 -207 1000 589" 
                        shape-rendering="geometricPrecision" 
                        text-rendering="geometricPrecision"
                    >
                        <motion.path 
                            d="M223.2911,56.95841q453.309638,59.01454,654.39956,161.416" 
                            fill="none" 
                            stroke="#ef626c" 
                            stroke-width="12"
                            initial={{

                                pathLength: 0,
                                pathOffset: 1,
                            }}
                            animate={{

                                pathLength: 1,
                                pathOffset: 0,
                            }}
                            transition={{
                                delay: 4.5,
                                duration: 2.7,
                            }}
                        />
                    </svg>

                    

                    <svg 
                        className={styles.svg}
                        viewBox="0 -207 1000 589" 
                        shape-rendering="geometricPrecision" 
                        text-rendering="geometricPrecision"
                    >
                        <motion.path 
                            d="M223.2911,57.152496c-.2912-.194086-66.68235,114.922774-53.09352,203.444294" 
                            fill="transparent" 
                            stroke="#ef626c" 
                            stroke-width="12"
                            initial={{
                                pathLength: 0,
                                pathOffset: 1,
                            }}
                            animate={{
                                pathLength: 1,
                                pathOffset: 0,
                            }}
                            transition={{
                                delay: 4.5,
                                duration: 2.7,
                            }}
                        />
                    </svg>
                    
                    <svg
                        className={styles.svg} 
                        viewBox="-14 -212 1000 589" 
                        shape-rendering="geometricPrecision" 
                        text-rendering="geometricPrecision"
                    >
                        <motion.polygon 
                            points="0,-44.353739 13.035237,-17.941464 42.182912,-13.706059 21.091456,6.85303 26.070474,35.882929 0,22.176869 -26.070474,35.882929 -21.091456,6.85303 -42.182912,-13.706059 -13.035237,-17.941464 0,-44.353739" 
                            transform="matrix(-.693642 0.72032-.72032-.693642 203.298887 55.2751)" 
                            fill="#7b32a8" 
                            // fill = "#FFD700"
                            stroke-width="0"
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: 7,
                                duration: .5,
                                type: "spring",
                            }}
                        />
                    </svg>

                    <Spotify/>


                </div>


            </div>



        </div>



    );
}
 
export default About;