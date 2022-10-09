import { motion } from 'framer-motion';
import styles from '../styles/Index.module.css'
import Link from 'next/link'
import AnimatedText from "../comps/AnimatedText";


export default function Home() {



  const placeholderText = [
    { type: "heading1", text: "It's Oak 207"},
  ];

  const textContainerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  const heyVariants = {
    hidden: {
      scale: .8,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: .2,
        type: 'tween',
        duration: .2,
      }
    },
  }


  return (
    <div className={styles.main}>
      <Link href='/intro'>
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heyVariants}
          >
                <h1 className={styles.hey}>Hey!</h1>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textContainerVariants}
          >
            <div>
              {placeholderText.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
              })}
            </div>
          </motion.div>
        </div>
      </Link>
    </div>
    
  )
}

