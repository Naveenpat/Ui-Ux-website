import React,{useState} from 'react'
import Header from './cmp/Header'
import "./App.css"
import About from './cmp/About'
import Shop from './cmp/Shop'
import Menu from './cmp/Menu'
import Clients from './cmp/Clients'
import Prices from './cmp/Prices'
import Footer from './cmp/Footer'
import {MenuData} from './cmp/data'
const App = () => {
  const[data, setData]=useState(MenuData)
  return (
    <div className='body'>
      <Header/>
      <About/>
      <Shop/>
      <Menu/>
      <Clients data={data}/>
      <Prices data={data}/>
      <Footer/>
      
    </div>
  )
}

export default App