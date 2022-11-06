import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sugestao from './pages/Sugestao'
import PaginaPadrao from './components/PaginaPadrao'
import TopFilmes from 'pages/TopFilmes'
import TopSeries from 'pages/TopSeries'
import Error from 'pages/Error'
import Conteudo from 'components/Conteudo'

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route path="/" element={<Home />} />
            <Route path="/TopFilmes" element={<TopFilmes />} />
            <Route path="/TopSeries" element={<TopSeries />} />
          </Route>
          <Route path="/" element={<Conteudo />}>            
          <Route path="/Sugestao" element={<Sugestao />} />
          </Route>

          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes
