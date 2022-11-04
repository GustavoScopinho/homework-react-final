import styles from './Footer.module.css';
import stylesGlobal from '../../App.css';
import playStore from '../../assets/play-store.svg';
import appleStore from '../../assets/app-store.svg'

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
          <div>
            
          </div>
        </div>
        <div>
          <p>SIGA-NOS</p>
        </div>
      </footer>
    </>
  )
}
