// JobDetails.jsx
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsd, faLocationDot, faPhone, faMessage, faCalendar, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom';
import "./JobDetails.css"
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const JobDetails = () => {
  const location = useLocation();
  const { fetjob } = location.state || {}; // Access the passed data

  if (!fetjob || !fetjob.name) {
    return <div>No job details available</div>;
  }

  const [jobsAre,  setJobsAre] = useState([])
  const [jobApplied, setJobApplied] = useState([]);


  useEffect(() =>{
    fetch('/featuredjobs.json')
    .then(res => res.json())
    .then(data => setJobsAre(data))
  },[])

  useEffect(() =>{
    const storedJob = getShoppingCart();

    let savedJob = []

    for(const id in storedJob){

      const storedJobID  = jobsAre.find(job => job.id === id)

      console.log(storedJobID)

        if(storedJobID){
          const setappliedTime = storedJob[id];
          storedJobID.appliedTime = setappliedTime
          savedJob.push(storedJobID)

        }
    }
  },[jobsAre])

  const handelAppliedJob = (fetjob) =>{
    const addedJobs =  [...jobApplied, fetjob]
    setJobApplied(addedJobs)
    addToDb(fetjob.id)
  }

  return (
    
<div>
    <div className='header-title'>
       <h1 >Job Details</h1>
    </div>
<div className='jobDetailsContainer'>

<div className='jobDescription'>
  <p><span className='para-head'>Job Description: </span>{fetjob.name} responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p>

  <p><span className='para-head'>Job Responsibility </span>: Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p>

  <p><span className='para-head'>Educational Requirements:</span>
  <p>Bachelor degree to complete any reputational university.</p></p>

  <p><span className='para-head'>Experiences: </span></p>
  <p>2-3 Years in this field.</p>
</div>

{/* Job Details start */}
<div>
<div className='jobDetails'>
<h2>Job Details</h2>
<p><FontAwesomeIcon icon={faUsd}></FontAwesomeIcon> <span className='para-head'>Salary :</span> 100k-150k(Per Month)</p>
<p><FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon> <span className='para-head'>Job Title :</span> {fetjob.name}</p>

<h2>Contact Information</h2>
<p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> <span className='para-head'>Phone :</span> 01750-00 00 00</p>
<p><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon> <span className='para-head'>Email :</span>  info@gmail.com</p>
<p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> <span className='para-head'>Address :</span>  Dhanmondi 32, Sukrabad
Dhaka, Bangladesh</p>
</div>
<button onClick={() =>{handelAppliedJob(fetjob)}} className='apply-btn'>Apply Now</button>
</div>
{/* Job Details End */}

</div>

</div>
 
 )
};

export default JobDetails;
