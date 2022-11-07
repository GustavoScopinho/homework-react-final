import styles from './PopCorn.module.css';
import PopImage from '../../assets/PopImage/popcorn-suges.png';
import { Link } from 'react-router-dom';

export default function PopCorn() {
    return(  
            <div className={styles.position}>
                <h1 className={styles.title}>Sugestões?</h1>
                <Link to="/Sugestao">
                    <img
                    className={styles.image} 
                    src={PopImage} 
                    alt="Pop Corn" 
                    />
                </Link>
            </div>
    )
}