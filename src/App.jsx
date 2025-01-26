import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Category from './Components/Home/Booking/Category/Category'
import { Route, Routes } from 'react-router-dom'
import Product from './Components/Product/Product'

function App() {
  return (
    <>
     <Header/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product?' element = {<Product />} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
