import React, { useEffect } from 'react'
import './Cart.css'

const CartProduct = (props) => {
    const {id} = props;
    const [name,setName] = React.useState();
    const [price,setPrice] = React.useState();

    async function getProductById(id){
        const response = await fetch(`http://localhost:8080/service/product/${id}`);
        const data = await response.json();
        setName(data.name);
        setPrice(data.price);
        
    }

    useEffect(()=>{
        getProductById(id);
    }
    ,[])
  return (
        <div className='cart-product'>
            <div>
                <img className='cart-product-img' src="" alt="" />
                <div className='cart-product-name'>{name}</div>
            </div>
            <div className='cart-product-price'>{price}</div>
        </div>
  )
}

export default CartProduct