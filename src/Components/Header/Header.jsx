import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
  
  return (
    <div className='header'>
        <div className='header-1'>
            <img className='img-logo' src="src/assets/logo-dbp-removebg-preview.png" alt="" />
            <div className='name-logo'>PARLOUR</div>
            <div className='header-1-2'>
              <div>Product</div>
              <div>Testimonial</div>
            </div>
        </div>
        <div className='header-2'>
          <div className='obj-center'>
            <LoginIcon sx={{fontSize:'large'}}/>
            <div>LOGIN</div>
          </div>
          <Link to='/cart' style={{textDecoration:'none',color:'white', display:'flex',alignItems:'center'}}>
            <ShoppingCartIcon/>
          </Link>
          <Button variant="contained" sx={{backgroundColor:'#8b7bf3'}}>Reserve Your Spot</Button>
        </div>
    </div>
  )
}

export default Header