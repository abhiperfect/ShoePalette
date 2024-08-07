import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';

function App() {


  return (

    <BrowserRouter>
      <Routes path='/' element ={<Layout/>} >
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
