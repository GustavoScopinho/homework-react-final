import styles from './CarouselSeries.module.css';
import { useRef, useState, useEffect } from 'react';
import SerieCard from "components/SerieCard";
import Left from '../../assets/leftarrow.png';
import Right from '../../assets/rightarrow.png';
import axios from 'axios';

export default function CarouselSeries(){

    const [series, setSeries] = useState([]);

    const apiSeries = axios.create({
        baseURL: 'https://api.themoviedb.org/3/tv/popular?api_key=8426a1374a213b578abf04fbd0c08f8a&language=pt-BR&page=1',
    });

    useEffect(()=>{
        apiSeries
        .get()
        .then(response => setSeries(response.data.results))
    }, []);




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
                    {series.map((serie) => (
                        <li key={serie.id}>
                            <SerieCard serie={serie} />
                        </li>
                    ))}                
                </ul>
            </div>
            <button className={`${styles.btnCarrosel} ${styles.btnRight}`} onClick={handleRightClick}><img src={Right} alt="Right" className={styles.setas}/></button> 
            </div>    
        </>
    )
}