import { useRef } from 'react';
import styles from './TopSeries.module.css';
import SerieCard from "components/SerieCard";
import posts from 'json/series.json';

export default function TopSeries() {

  const carousel = useRef(null);

  const handleLeftClick = e =>{
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = e =>{
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return(
    <>
      <div className={styles.container} ref={carousel}>
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <SerieCard post={post} />
                </li>
            ))}                
        </ul>
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.btnCarrosel} onClick={handleLeftClick}>Voltar</button>
        <button className={styles.btnCarrosel} onClick={handleRightClick}>Avançar</button>  
      </div>     
    
    </>
);
}
