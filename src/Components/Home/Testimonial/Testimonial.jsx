import React from 'react'
import './Testimonial.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const Testimonial = () => {
    const testi = [
        {name:"Divya Singh",desc:"Awesome i loved it Didi ,It is the best place to grow."},
        {name:"Divya Singh",desc:"Awesome i loved it Didi ,It is the best place to grow."},
        {name:"Divya Singh",desc:"Awesome i loved it Didi ,It is the best place to grow."},
        {name:"Divya Singh",desc:"Awesome i loved it Didi ,It is the best place to grow."},
        {name:"Divya Singh",desc:"Awesome i loved it Didi ,It is the best place to grow."},
        {name:"Divya Singh",desc:"Awesome i loved it Didi ,It is the best place to grow."},
        {name:"Divya Singh",desc:"Awesome i loved it Didi ,It is the best place to grow."},
        {name:"Divya Singh",desc:"Awesome i loved it Didi ,It is the best place to grow."}
    ]

  return (
    <div className='testi-block'>
    {testi.map((res)=>{
    return <div className='testimonial'>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'3px'}}>
            <AccountCircleIcon fontSize='large' className='testi-img'/>
            <div>Divya Singh</div>
        </div>
        <div>
            Awesome i loved it Didi ,
            It is the best place to grow.
        </div>
        <div style={{position:'absolute',bottom:'0'}}>
            Open tweet/review...
        </div>
    </div>})}
    </div>
  )
}

export default Testimonial