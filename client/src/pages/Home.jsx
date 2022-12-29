import React from 'react'
import Announcement from '../components/Announcement/Announcement'
import Cateories from '../components/categories/Cateories'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Newletter from '../components/newsletter/Newletter'
import Products from '../components/products/Products'
import Slider from '../components/slider/Slider'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Cateories />
      <Products />
      <Newletter />
      <Footer />
    </div>
  )
}

export default Home