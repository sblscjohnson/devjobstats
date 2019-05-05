import React from 'react'
import {Link} from 'react-router-dom'

import './Navbar.css'

const Navbar = (props) => {

  return (
    <div className='Navbar-parent'>
      <div className='Navbar-links'>
        <Link to='/'>Home</Link>
        <Link to='/Survey'>Survey</Link>
        <Link to='/Results'>Results</Link>
      </div>
      <hr />
    </div>
  )
}

export default Navbar