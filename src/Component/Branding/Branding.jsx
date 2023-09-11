import React from 'react'
import  './Branding.css'
import brandMan from "../../assets/All Images/brandMan.png"
const Branding = () => {
  return (
    <div className='brandContainer'>
        <div className='brandMessage'>
          <h2>One Step <br></br>Closer To Your <br></br> <span className='dreamJob'>Dream Job</span></h2>
          <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button className='button'>Get Started</button>
        </div>
        <div className='img'>
          <img src={brandMan} alt="" />
        </div>
    </div>
  )
}

export default Branding