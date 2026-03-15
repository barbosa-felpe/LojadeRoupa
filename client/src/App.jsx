import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Home from './page/Home';
import Cart from './page/Cart'
import Login from './page/Login'
import Categoria from './page/Categoria'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './page/NotFound';
import Register from './page/Register';
import ProductDetail from './page/ProductDetail';


function Layout() {
  const location = useLocation();
  const hiddenRoutes = ['/login', '/register', '/forgot-password']
  const hideLayout = hiddenRoutes.includes(location.pathname)
  return (
    <>

      {!hideLayout && <Navbar />}
      <Routes >
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/categoria/:catProduto' element={<Categoria />}></Route>   
        <Route path='/produto/:produto' element={<ProductDetail />}></Route>   
        <Route path='/cart' element={<Cart />}></Route>
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
