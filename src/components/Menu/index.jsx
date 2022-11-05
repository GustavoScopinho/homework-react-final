import MenuLink from 'components/MenuLink'
import styles from './Menu.module.css'
import pipocaHeader from '../../assets/imagem-pipoca.png'
import luzes from '../../assets/luzes.png'

export default function Menu() {
  return (
    <>
      <header>
        <nav className={styles.navegacao}>
          <img className={styles.imgLuzes} src={luzes} alt="" />
          <img className={styles.imgPipoca} src={pipocaHeader} alt="" />
          <MenuLink to="/TopFilmes"><p>Top Filmes</p></MenuLink>
          <MenuLink to="/"><h1>Home</h1></MenuLink>
          
          <MenuLink to="/TopSeries"><p>Top Séries</p></MenuLink>
          {/* <MenuLink to="/Sujestao">Sujestão</MenuLink> */}
        </nav>
      </header>
    </>
  )
}
