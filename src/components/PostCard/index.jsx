import styles from './PostCard.module.css';

export default function PostCard({post}) {

    return(
        <div className={styles.post}>
            <img 
                className={styles.image} 
                src={`/assets/Movies/${post.id}/img.png`} 
                alt="Card Post" 
            />
            <h1 className={styles.title}>{post.titulo}</h1>
            <p className={styles.text}>
                Tipo: {post.tipo} <br />
                Duração: {post.duracao} <br />
                Lançamento: {post.lançamento} <br />
                Direção: {post.direção} <br />
                Classificação: {post.classificação} <br />
            </p>
            
            <button className={styles.button}>Assistir</button>
        </div>
    )
}