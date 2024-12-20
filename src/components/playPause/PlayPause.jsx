import styles from './playPause.module.css';


const PlayPause = ({ isClicked, togglePlay }) => {



    return (
        <>
            <div className={styles.playPause} onClick={togglePlay}>
                <span className={`${styles.playDash} ${styles.slantedDown} ${isClicked ? styles.active : ''}`}></span>
                <span className={`${styles.playDash} ${styles.upStraight}`}></span>
                <span className={`${styles.playDash} ${styles.slantedUp} ${isClicked ? styles.active : ''}`}></span>
            </div>
        </>
    )
}

export default PlayPause;