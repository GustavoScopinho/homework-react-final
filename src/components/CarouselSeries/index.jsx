import styles from './CarouselSeries.module.css'
import { useRef } from 'react';
import SerieCard from "components/SerieCard";
import posts from 'json/series.json';
import Left from '../../assets/leftarrow.png'
import Right from '../../assets/rightarrow.png'

export default function CarouselSeries(){

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
            <div className={styles.containerGeral}>         
            <button button className={`${styles.btnCarrosel}  ${styles.btnLeft}`} onClick={handleLeftClick}><img src={Left} alt="left" className={styles.setas}/></button>   
            <div className={styles.container} ref={carousel}>
                <ul className={styles.posts}>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <SerieCard post={post} />
                        </li>
                    ))}                
                </ul>
            </div>
            <button className={`${styles.btnCarrosel} ${styles.btnRight}`} onClick={handleRightClick}><img src={Right} alt="Right" className={styles.setas}/></button> 
            </div>    
        </>
    )
}