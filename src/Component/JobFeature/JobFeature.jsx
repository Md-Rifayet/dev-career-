import React from 'react'
import "./JobFeature.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsd, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const JobFeature = ({fetjob}) => {

    const imageUrl = `/CompanyImg/${fetjob.photo}`;
   

  return (
    <div className='job-details-container'>
        <img src={imageUrl} alt="" />
        <h4>{fetjob.name}</h4>
        <h5>{fetjob.title}</h5>
        <button className='job-type-btn'>{fetjob.type1}</button> <button className='job-type-btn'>{fetjob.type2}</button>

       <div className='loc-salary'>
        <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> {fetjob.location}</p>
        <p><FontAwesomeIcon icon={faUsd}></FontAwesomeIcon> {fetjob.salary}</p>
       </div>
       <Link to={`/jobDetails/${fetjob.id}`} state={{ fetjob }}>
        <button className='view-details-btn'> View Details</button>
      </Link>
    </div>
    
  )
}

export default JobFeature
