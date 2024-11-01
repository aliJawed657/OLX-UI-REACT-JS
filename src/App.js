import React from 'react'
import Navbar from "./Component/Navbar"
import Category from './Component/Category'
import AllCategories from './Component/AllCategories'
import Products from './Component/Products'
import Footer from './Component/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Category />
      <AllCategories />
      <Products />
      <div style={{ paddingTop: "40px" }}>
        <Footer />
      </div>
    </div>
  )
}

export default App
