import React, { useState } from 'react'
import './Home.css'
import Testimonial from './Testimonial/Testimonial'
import Modal from './Modal/Modal'


const Home = () => {
  const [step , setStep] = useState(1);


  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'20px'}}>
    <div className='home-block'>
      <img className='landing-img' src="src/assets/IMG-20230105-WA0026.jpg" alt="" />
      <div className='moto'>
        <div className='text-moto'>Beauty perfected with us.</div>
        <div className='book-button'>BOOK NOW</div>
      </div>
    </div>
     <Modal/>
     <Testimonial/>
    </div>
  )
}

export default Home