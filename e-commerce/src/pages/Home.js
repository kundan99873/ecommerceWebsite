import React from 'react'
import Announcement from '../components/Announcement'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <div>
      <div className="App">
      <Announcement />
      <Navbar />
      <Slider />
      <Category />
      <h1>Products</h1>
      <Products sort={10}/>
      <Footer />
    </div>
    </div>
  )
}
