import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <navbar className="navbar">
      <h1>Gaming Blog</h1>
      <div className='links'>
        <a href='/' style={{ 
        color:"red",
        background:"yellow",
        borderRadius:"10px"
       }}>Home</a>
      <a href="/blog-list">Blog</a>
      <a href="/aboutus">About Us</a>
      <a href='/teams'>Teams</a>
    {/* <Link  to='./' style={{ 
        color:"red",
        background:"yellow",
        borderRadius:"10px"
       }}>Home</Link>
      <Link to="/BlogList">Blog</Link>
      <Link to="/Aboutus">About Us</Link>
      <Link to='/Teams'>Teams</Link>*/}

      {/*/  <NavLink  to='/' style={{ 
      //     color:"red",
      //     background:"yellow",
      //     borderRadius:"10px"
      //    }}>Home</NavLink>
      //   <NavLink to="/BlogList">Blog</NavLink>
      //   <NavLink to="/Aboutus">About Us</NavLink>
    //   <NavLink to='/Teams'>Teams</NavLink>*/}
      </div>
    </navbar>
  )
}

export default Navbar
