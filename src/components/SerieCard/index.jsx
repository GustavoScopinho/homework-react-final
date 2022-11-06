import styles from './SerieCard.module.css';

export default function SerieCard({serie}) {
    return(
        <div className={styles.post}>
            <img 
                className={styles.image} 
                src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} 
                alt="Serie Card" 
            />
            <div className={styles.serieTitulo}>
                <h1 className={styles.title}>{serie.name}</h1>
            </div>
            
            <button className={styles.buttoncard}>Assistir</button>
        </div>
    )
}