import React from 'react'
import Nav from './Componenets/Nav'
import Resister from './Componenets/Resister'
import Login from './Componenets/Login'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <>
    <Router>
    <Nav />
      <Routes>
       
        {/* <Route path='/' element={<Nav/>}></Route> */}
        <Route path='/Resister' element={<Resister/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </Router>
  
    </>
  )
}

export default App