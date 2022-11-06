
import styles from './Conteudo.module.css';
import MenuSugestao from 'components/MenuSugestao'
import PopCorn from 'components/PopCorn'
import { Outlet } from 'react-router-dom'
import FooterSugestao from 'components/FooterSugestao';

export default function Conteudo() {
  return (
    <main className={styles.mainSugestao}>
      <MenuSugestao />
      <Outlet />
      <FooterSugestao />
    </main>
  )
}