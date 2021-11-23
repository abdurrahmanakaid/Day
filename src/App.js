import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './common/Footer'
import Header from './common/Header'
import TopBar from './common/TopBar'
import Home from './screens/Home'

const App = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App
