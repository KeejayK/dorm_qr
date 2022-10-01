import styles from '../styles/TopSongs.module.css'
import React, { useState, useEffect } from 'react';

const TopSongs = () => {
    const [data, setData] = useState(
        [{"artist":"Giveon","songUrl":"https://open.spotify.com/track/7r1MqPAD09w24mCUUbxiCI","title":"Make You Mine"},{"artist":"Alaina Castillo","songUrl":"https://open.spotify.com/track/7n9HM57yQg6c6kFTbqU8n5","title":"indica"},{"artist":"Giveon","songUrl":"https://open.spotify.com/track/52wlhIULOeaxZpzuTYrVlt","title":"Let Me Go"},{"artist":"Lauv","songUrl":"https://open.spotify.com/track/41CgzGD7xlgnJe14R4cqkL","title":"Paris in the Rain"}])
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('/api/top-tracks')
        .then((res) => res.json())
        .then((data) => {
          setData(data.tracks)
          setLoading(false)
          console.log('top songs!')
          console.log(data.tracks)
        })
    }, [])



    return (
        <div style= {{display: 'flex', marginTop: '10px', gap: '20px', color: 'white'}}> 
            <div className={styles.list}>
                <p className={styles.title}>{data[0].title}</p>
                <p className={styles.artist}>{data[0].artist}</p>

                <p className={styles.title}>{data[1].title}</p>
                <p className={styles.artist}>{data[1].artist}</p>

                <p className={styles.title}>{data[2].title}</p>
                <p className={styles.artist}>{data[2].artist}</p>
            </div>
            <div className={styles.list}>
                <p className={styles.title}>{data[0].title}</p>
                <p className={styles.artist}>{data[0].artist}</p>

                <p className={styles.title}>{data[1].title}</p>
                <p className={styles.artist}>{data[1].artist}</p>

                <p className={styles.title}>{data[2].title}</p>
                <p className={styles.artist}>{data[2].artist}</p>
            </div>
        </div>

    );
}
 
export default TopSongs;