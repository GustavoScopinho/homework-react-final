import styles from './PopCorn.module.css';
import PopImage from '../../assets/PopImage/popcorn-suges.png';
import { Link } from 'react-router-dom';

export default function PopCorn() {
    return(
        <Link to="/Sugestao">

<div className={styles.position}>
            <h1 className={styles.title}>Sujestões?</h1>
            <img
            className={styles.image} 
            src={PopImage} 
            alt="Pop Corn" 
            />
        </div>

        </Link>
    )
}