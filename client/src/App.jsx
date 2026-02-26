import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './page/Home';
import Login from './page/Login'



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
