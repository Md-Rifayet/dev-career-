import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


const Header = () => {
  return (
   <div className='header'>
    <h3 className='companyName'>Dev Career</h3>

    <nav className='nav-part'>
        <Link to='/'> Home</Link>
        <Link to='statistics'> Statistics</Link>
        <Link to='appliedjob'>Applied Job </Link>
        <Link to='blog'> Blog</Link>
    </nav>

    <button>Dev Caree</button>
    
   </div>
  )
}

export default Header