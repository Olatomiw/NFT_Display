import React from 'react'
import "./Styles/navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <section className="logo">
          <h1>ZEUS</h1>
        </section>
        <section className='second-section'>
          <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>Market Place</li>
            <li>Blog</li>
          </ul>
        </section>
        <section className='third-section'>
          <p>connect wallet</p>
        </section>
    </nav>
  )
}

export default Navbar