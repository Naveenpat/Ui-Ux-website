import React from 'react'
import Loader from './Loader'
const Prices = ({data}) => {
  
  return (
    <div className='container'>
      {!data ? <Loader/> : data.map((item)=>(
        <div className='container_body'>
           <div className='container_img'>
            <img src={item.image} alt='pizza'/>
           </div> 
           <div className='container_item'>
            <h3>{item.Heading}</h3>
            <p>{item.Description}</p>
            <h4><button className='btn btn-smart'>{item.price}</button></h4>
           </div>
      </div>
      ))}
      
    </div>
  )
}

export default Prices