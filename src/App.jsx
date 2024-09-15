import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css";
import "bootstrap/dist/css/bootstrap.css"; 
import { Route, Routes } from 'react-router-dom';
import Inp from './Component/Signup/Inp';
import Layout from './Component/Layout/Layout';
import Home from './Component/Home';
import Login from './Component/Login/Login';
import About from './Component/About/About';

function App(){
 
return(
  <>
  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route path='/' element={<Home/>} />
    <Route path='/Signup' element={<Inp/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/Login' element={<Login/>} />
    </Route>
  </Routes>
  </>
)




}

export default App
