import React, { useEffect, useState } from 'react'
import './Category.css'
import axios from 'axios';


const Category = ({setStep}) => {
  const [categoryList,setCategoryList] = useState();
 
  
  useEffect(()=>{
  
    callCategoryApi();
    
  },[])
  const callCategoryApi = async ()=>{
    const response = await axios.get('http://localhost:8080/service/category');
    console.log(response.data);
    
    setCategoryList(response.data);
  }
  return (
    <>
    {
      categoryList==undefined?<>Loading</>:
      
         <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <div style={{fontSize:'30px', fontWeight:'bold',margin:'20px',borderBottom:"solid 2px rgb(116, 97, 240)"}}>Our Services</div>
          <div style={{display:'flex',gap:'18px'}}>
            {categoryList.map((category)=>{
              if(category==null){return <></>}
              return <div className='cat-block' onClick={()=>{setStep(2)}}>
                <div style={{fontSize:'25px',fontWeight:'bold'}} >{category}</div>
              </div>
            })}
          </div>
          
          
        </div>
    }
    </>
  )
}

export default Category;