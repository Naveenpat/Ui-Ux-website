import React, { useState } from 'react'
const Navbar = () => {

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('')
  const Login=(e)=>{
         e.preventDefault();
        console.log(email,password)
  }
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="logo.png" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <label className='label'>Email</label>
          <input className='input1' type='text' onChange={(e)=>setEmail(e.target.value)}></input>
          <label className='label'>Password</label>
          <input className='input1' type='password' onChange={(e)=>setPassword(e.target.value)}></input>
          <button className='btn_home'onClick={Login}>Log in</button>
          <li>
            <button className='btn_register'>REGISTER</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar