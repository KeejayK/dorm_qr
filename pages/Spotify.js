import styles from '../styles/Spotify.module.css'


const Spotify = () => {
    return ( 
        <div className={styles.spotify}>
            <div className={styles.jaeSpotify}>
                <a className={styles.lable}>Currently Playing</a>
                <h3 className={styles.current}>test 1</h3>
                <a className={styles.lable}>Last Played</a>
                <h3 className={styles.last}>test 1</h3>
              
            </div>
            <div className={styles.keejaySpotify}>
                <a className={styles.lable}>Currently Playing</a>
                <h3 className={styles.current}>test 1</h3>
                <a className={styles.lable}>Last Played</a>
                <h3 className={styles.last}>test 1</h3>
              
            </div>
        </div>
     );
}
 
export default Spotify;