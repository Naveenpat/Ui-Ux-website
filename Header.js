import React from 'react'
import Navbar from './Navbar'
const Header = () => {
  
  return (
    <div className="banner">
        <Navbar/>
    <div className="banner__content">
      <div className="container">
        <div className="banner__text">
          <h3>Delisious Pizza</h3>
          <h1>Mummy's Pizza..</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            minus ut mollitia error molestiae quia.
          </p>
          <div className="banner__btn">
            <button  className="btn btn-smart">
              COMING SOON
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header