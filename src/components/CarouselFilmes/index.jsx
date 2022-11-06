import styles from './CarouselFilmes.module.css';
import { useRef, useState, useEffect } from 'react';
import FilmesCard from "components/FilmesCard";
import Left from '../../assets/leftarrow.png'
import Right from '../../assets/rightarrow.png'
import axios from 'axios';

export default function CarouselFilmes(){

    const [movies, setMovies] = useState([]);
    
    const apiMovies = axios.create({
        baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=8426a1374a213b578abf04fbd0c08f8a&language=pt-BR&page=1',
    });
    
    useEffect(()=> {
        apiMovies
        .get()
        .then(response => setMovies(response.data.results));
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
                    {movies.map((filme) => (
                        <li key={filme.id}>
                            <FilmesCard filme={filme} />
                        </li>
                    ))}                
                </ul>
            </div>
            <button className={`${styles.btnCarrosel} ${styles.btnRight}`} onClick={handleRightClick}><img src={Right} alt="Right" className={styles.setas}/></button> 
            </div>    
        </>
    )
}