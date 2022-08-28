import styles from '../styles/Spotify.module.css'


const Spotify = () => {
    return ( 
        <div className={styles.spotify}>
            <div className={styles.jaeSpotify}>
                <p className={styles.lable}>Currently Playing</p>
                <p className={styles.current}>test 1</p>
                <p className={styles.lable}>Last Played</p>
                <p className={styles.last}>test 1</p>
              
              
            </div>
            <div className={styles.keejaySpotify}>
                <p className={styles.lable}>Currently Playing</p>
                <p className={styles.current}>test 1</p>
                <p className={styles.lable}>Last Played</p>
                <p className={styles.last}>test 1</p>
              
            </div>
        </div>
     );
}
 
export default Spotify;