import { motion } from 'framer-motion';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Intro.module.css'
import AnimatedText from "../comps/AnimatedText";
import About from '../comps/About.js'



const Intro = () => {
      
    return ( 
        <div className={styles.main}>
            <Head>
                <title>Oak Hall | 207</title>
            </Head>

            <motion.div 
            className={styles.about}
            initial={{y: "0px"}}
            transition={{ type: "spring", duration: 4.5}}
            animate = {{y: ["0px","0px", "-500px"]}}
            >
                <h1>A little about us</h1>
            </motion.div>      

            <motion.div
                initial={{y: "0px"}}
                transition={{ type: "spring", duration:4.5}}
                animate = {{y: ["0px","0px", "-1300px"]}}
            >
                <div className={styles.rocket}>
                    <motion.div
                        transition={{ease: "linear", duration: 1, repeat: Infinity}}
                        animate = {{rotate: [-2,2,-1,1,-2,2,-1,1,-1]}}
                    >
                        <div>
                            <Image src="/../public/rocket.png" height={110} width={140} />
                        </div>
                    </motion.div>
                    <About/>
                </div>
            </motion.div>




        </div>

    );
}
 
export default Intro;