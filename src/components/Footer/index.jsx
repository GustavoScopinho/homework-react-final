import styles from './Footer.module.css';
import stylesGlobal from '../../App.css';
import playStore from '../../assets/play-store.svg';
import appleStore from '../../assets/app-store.svg'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import tiktok from '../../assets/tiktok.png'
import twitter from '../../assets/twitter.png'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
          <div className={styles.mobileContainer}>
            <p>Também disponível no seu smartphone</p>
            <img src={playStore} alt="" />
            <img src={appleStore} alt="" />
          </div>
      <footer>        
        <div className={styles.redesContainer}>
          <p>SIGA-NOS</p>
          <div className={styles.redesIcons}>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={tiktok} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
        <div className={styles.rights}>
          <p>Sobre o Enzo Filmes |</p>
          <p>Contato |</p>
          <p> <Link to="/Sugestao">Sugestões |</Link></p>
          <p>Termos e condições |</p> 
          <p>Política de privacidade |</p>
          <p>©EnzoFilmes</p>  
        </div>
      </footer>
    </>
  )
}
