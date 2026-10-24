
import { Suspense } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Pricing from './Components/ProductPricing/Pricing'
import Product from './Components/Product/Product'
import Upted from './Components/Upted/Upted'
import Review from './Components/Review/Review'
import Stat from './Components/Stat/Stat'

const fetchPricing = async () => {
  const res = await fetch("/pricingData.json")
  return res.json();
}

const fetchPlaces = async () => {
  const res = await fetch("/placesData.json")
  return res.json();
}


function App() {
  const productPricing = fetchPricing();
  const Place = fetchPlaces();

  return (
    <>
      <div className='max-w-[1400px] mx-auto p-5'>
        <Navbar></Navbar>
        <Home></Home>
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <Product Place={Place}></Product>
        </Suspense>
        <Upted></Upted>
        <Stat></Stat>
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <Pricing productPricing={productPricing}></Pricing>
        </Suspense>
        <Review></Review>
        <Footer></Footer>
      </div>
    </>
  )

}

export default App
