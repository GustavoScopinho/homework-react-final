import MenuLink from 'components/MenuLink'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

export default function Menu() {
  return (
    <>
      <header>
        <nav className={styles.navegacao}>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/TopFilmes">Top Filmes</MenuLink>
          <MenuLink to="/TopSeries">Top Séries</MenuLink>
          <MenuLink to="/Sugestao">Sugestão</MenuLink>
        </nav>
      </header>
    </>
  )
}
