import React, { useState } from 'react'
import './Home.css'
import Testimonial from './Testimonial/Testimonial'
import Category from './Booking/Category/Category'


const Home = () => {
  const [step , setStep] = useState(1);


  return (
    <div>
    <div className='home-block'>
      <img className='landing-img' src="src/assets/IMG-20230105-WA0026.jpg" alt="" />
      <div className='moto'>
        <div className='text-moto'>Beauty perfected with us.</div>
        <div className='book-button'>BOOK NOW</div>
      </div>
    </div>
     <Category/>
     <Testimonial/>
    </div>
  )
}

export default Home