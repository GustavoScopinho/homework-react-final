import styles from './PopCorn.module.css';
import PopImage from '../../assets/PopImage/popcorn-sug.png';

export default function PopCorn() {
    return(
        <div className={styles.position}>
            <h1 className={styles.title}>Sujestões?</h1>
            <img
            className={styles.image} 
            src={PopImage} 
            alt="Pop Corn" 
            />
        </div>
    )
}