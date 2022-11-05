import FooterSugestao from 'components/FooterSugestao'
import styles from './Conteudo.module.css';
import MenuSugestao from 'components/MenuSugestao'
import PopCorn from 'components/PopCorn'
import { Outlet } from 'react-router-dom'

export default function Conteudo() {
  return (
    <main className={styles.mainSugestao}>
      <MenuSugestao />
      <Outlet />
      <PopCorn />
      <FooterSugestao />
    </main>
  )
}