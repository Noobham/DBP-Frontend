import React, { useEffect, useState } from 'react'
import './Modal.css'
import BasicSelect from '../../Mui/BasicSelect'
import axios from 'axios';
import Product from '../Product/Product';



const Modal = () => {
  let [categoryList,setCategoryList] = useState([]);
  let [productList,setProductList] = useState([]);
  
  async function getCategoryList(){
    const response = await axios.get('http://localhost:8080/service/category');
    setCategoryList(response.data);
  }
  async function getProductByCategory(category){
    const response = await axios.get(`http://localhost:8080/service/${category}`);
    console.log(response.data);
    setProductList(response.data);
  }

  useEffect(()=>{
    getCategoryList();
    getProductByCategory('all');
  },[])

  return (
    <div className='modal-container'>
      <BasicSelect labelName='Category' menuList={categoryList}/>
      {/* <BasicSelect labelName='test' menuList={['some','oen']} disabled={true} /> */}

      {
      productList?productList.map((data)=>{
        return <Product id={data.serviceId} price={data.price} description={data.description} name={data.name} link='https://compote.slate.com/images/22ce4663-4205-4345-8489-bc914da1f272.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=2200'/>
      }):<></>
      }
      
    </div>
  )
}

export default Modal