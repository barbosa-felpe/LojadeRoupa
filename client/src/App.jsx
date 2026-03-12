import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Home from './page/Home';
import Login from './page/Login'
import Categoria from './page/Categoria'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './page/NotFound';


function Layout() {
  const location = useLocation();
  const hiddenRoutes = ['/login', '/register', '/forgot-password']
  const hideLayout = hiddenRoutes
  return (
    <>

      {!hideLayout && <Navbar />}
      <Routes >
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/categoria/:catProduto' element={<Categoria />}></Route>
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
