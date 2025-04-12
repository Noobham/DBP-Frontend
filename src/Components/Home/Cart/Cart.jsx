import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import CartProduct from './CartProduct';
import { Button } from '@chakra-ui/icons';

export const Cart = () => {
    const [cartList, setCartList] = useState();
    const [cookies, setCookies] = useCookies();

    useEffect(() => {
        setCartList(cookies.productId);
    },[])
    

    const handlePayment = async () => {
        const amount = 500; // in INR
      
        // Step 1: Create order from backend
        const res = await fetch('http://localhost:8080/api/payment/create-order?amount=' + amount, {
          method: 'POST'
        });
        const data = await res.json();
      
        // Step 2: Open Razorpay checkout
        const options = {
          key: 'rzp_test_49bBWvQww6oyKP', // from Razorpay dashboard
          amount: data.amount,
          currency: data.currency,
          name: 'Your Company Name',
          description: 'Test Transaction',
          order_id: data.id,
          handler: function (response) {
            alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
            // Optionally verify the signature with your backend
          },
          prefill: {
            name: 'Your Name',
            email: 'your@email.com',
            contact: '9999999999'
          },
          theme: {
            color: '#3399cc'
          }
        };
      
        const rzp = new window.Razorpay(options);
        rzp.open();
      };
      

  return (
    <div>
        {
            cartList ? (
                cartList.map((item) => {
                    return (
                        <CartProduct id={item}/>
                    )
                })
            ) : (
                <>Nothing in Cart</>
            )
        }
        {
            cartList ? <div>Total {'100'}
            <Button onClick={()=>{handlePayment()}} >Order</Button>
            </div>:<></>
        }
    </div>
  )
}
