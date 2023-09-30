import React from 'react'
import "./FinalAppliedJob.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsd, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const FinalAppliedJob = ({jobAre}) => {

const{name, photo, title, company, type1, type2, location, salary} = jobAre;

const imageUrl = `/CompanyImg/${jobAre.photo}`;

  return (
    <div className='jobs'>
  
  <div className='appliedJob-Style'>
      <img src={imageUrl} alt="" />
      <div className='appliedJob-cart-info'>
          <h3>{name}</h3>
          <h4>{title}</h4>
          <button>{type1}</button>
          <button>{type2}</button>
          <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> {location} || <FontAwesomeIcon icon={faUsd}></FontAwesomeIcon> {salary}</p>
        
      </div>
      
  <Link to={`/jobDetails/${jobAre.id}`} state={{ fetjob: jobAre }}>
  <button className='view-details-btn'>View Details</button>
</Link>

  </div>
  </div>
  )
}



export default FinalAppliedJob