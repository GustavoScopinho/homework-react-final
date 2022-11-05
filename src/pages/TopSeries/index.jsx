import styles from './TopSeries.module.css';
import SerieCard from "components/SerieCard";
import posts from 'json/series.json';

export default function TopSeries() {
  return(
        <div className={styles.container}>
          <ul className={styles.posts}>
              {posts.map((post) => (
                  <li key={post.id}>
                      <SerieCard post={post} />
                  </li>
              ))}                
          </ul>
        </div>    
);
}
