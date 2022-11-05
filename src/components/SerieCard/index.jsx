import styles from './SerieCard.module.css';

export default function SerieCard({post}) {

    return(
        <div className={styles.post}>
            <img 
                className={styles.image} 
                src={`/assets/Series/${post.id}/img.png`} 
                alt="Serie Card" 
            />
            <h1 className={styles.title}>{post.titulo}</h1>
            <p className={styles.text}>
                Tipo: {post.tipo} <br />
                Duração: {post.duracao} <br />
                Lançamento: {post.lançamento} <br />
                Direção: {post.direção} <br />
                Classificação: {post.classificação} <br />
            </p>
            
            <button className={styles.buttoncard}>Assistir</button>
        </div>
    )
}