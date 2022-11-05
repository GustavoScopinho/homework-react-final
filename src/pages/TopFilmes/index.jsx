import styles from './TopFilmes.module.css';
import PostCard from "components/PostCard";
import posts from 'json/posts.json';


export default function TopFilmes() {
  return(
        <div className={styles.container}>
          <ul className={styles.posts}>
              {posts.map((post) => (
                  <li key={post.id}>
                      <PostCard post={post} />
                  </li>
              ))}                
          </ul>
          
        </div>    
        
);
}
