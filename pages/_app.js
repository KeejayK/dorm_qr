import '../styles/globals.css'
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
    <motion.div
      className={"page"}
      key={router.route}
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{
        duration: 1 ,
      }}
      variants={{
        initialState: {
          opacity: 0,
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)"
          // clipPath: "circle(100% at 50% 25%)",
        },
        animateState: {
          opacity: 1,
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)"
          // clipPath: "circle(100% at 50% 25%)",
        },
        exitState: {
          clipPath: "polygon(100% 100%, 100% 100%, 100% 0, 100% 0)"
          // clipPath: "circle(0% at 50% 25%)",
        },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  </AnimatePresence>

  )
}

export default MyApp

