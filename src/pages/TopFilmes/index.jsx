import styles from './TopFilmes.module.css';
import CarouselFilmes from 'components/CarouselFilmes';

export default function TopFilmes() {
  return(
        <div className={styles.container}>
          <CarouselFilmes />
        </div>    
  );
}