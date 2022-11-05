import styles from './CHome.module.css'
import imgAmigo from '../../assets/meuamigo.jpg'
import imgStranger from '../../assets/stranger.jpg'
import { Link } from 'react-router-dom'

export default function ConteudoHome() {
  return(
    <>
       <div className={styles.containerHome}>
       <img src={imgAmigo} alt="" />
       <button class="noselect"> <Link to="/TopFilmes">+ Filmes</Link></button>
       </div>
       <div className={styles.containerSecond}>
        <img src={imgStranger} alt="" />
        <button class="noselect"> <Link to="/TopSeries">+ Séries</Link></button>

        
       </div>
    </>
  )
}