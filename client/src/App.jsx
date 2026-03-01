import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Home from './page/Home';
import Login from './page/Login'
import Categoria from './page/Categoria'
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function Layout() {
  const location = useLocation();
  const hideLayout = location.pathname === '/login'
  return (
    <>

      {!hideLayout && <Navbar />}
      <Routes >
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/categoria/:catProduto' element={<Categoria />}></Route>
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
