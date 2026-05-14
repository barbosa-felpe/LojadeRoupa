import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Home from './page/Home';
import Cart from './page/Cart'
import Login from './page/Login'
import Categoria from './page/Categoria'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './page/NotFound';
import Register from './page/Register';
import ForgotPassword from './page/ForgotPassword';
import Checkout from './page/Checkout';
import ProductDetail from './page/ProductDetail';
import QuemSomos from './page/QuemSomos';
import PerguntasFrequentes from './page/PerguntasFrequentes';
import SejaUmFranqueado from './page/SejaUmFranqueado';
import NossasLojas from './page/NossasLojas';
import TrabalheConosco from './page/TrabalheConosco';
import MinhaConta from './page/MinhaConta';
import MeusPedidos from './page/MeusPedidos';
import Privacidade from './page/Privacidade';
import TermosDeUso from './page/TermosDeUso';
import TrocasEDevolucao from './page/TrocasEDevolucao';
import EntregaEFrete from './page/EntregaEFrete';
import Pagamento from './page/Pagamento';


function Layout() {
  const location = useLocation();
  const hiddenRoutes = ['/login', '/register', '/forgot-password', '/checkout']
  const hideLayout = hiddenRoutes.includes(location.pathname)
  return (
    <>

      {!hideLayout && <Navbar />}
      <Routes >
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/forgot-password' element={<ForgotPassword />}></Route>
        <Route path='/categoria/:catProduto' element={<Categoria />}></Route>   
        <Route path='/produto/:produto' element={<ProductDetail />}></Route>   
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/quem-somos' element={<QuemSomos />}></Route>
        <Route path='/perguntas-frequentes' element={<PerguntasFrequentes />}></Route>
        <Route path='/seja-um-franqueado' element={<SejaUmFranqueado />}></Route>
        <Route path='/nossas-lojas' element={<NossasLojas />}></Route>
        <Route path='/trabalhe-conosco' element={<TrabalheConosco />}></Route>
        <Route path='/minha-conta' element={<MinhaConta />}></Route>
        <Route path='/meus-pedidos' element={<MeusPedidos />}></Route>
        <Route path='/privacidade' element={<Privacidade />}></Route>
        <Route path='/termos-de-uso' element={<TermosDeUso />}></Route>
        <Route path='/trocas-e-devolucao' element={<TrocasEDevolucao />}></Route>
        <Route path='/entrega-e-frete' element={<EntregaEFrete />}></Route>
        <Route path='/pagamento' element={<Pagamento />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      {!hideLayout && <Footer />}

    </>
  )
}


function App() {


  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
