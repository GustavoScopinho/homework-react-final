import Footer from 'components/Footer'
import Menu from 'components/Menu'
import PopCorn from 'components/PopCorn'
import { Outlet } from 'react-router-dom'

export default function Conteudo() {
  return (
    <main>
      <Menu />
      <Outlet />
      <PopCorn />
      <Footer />
    </main>
  )
}