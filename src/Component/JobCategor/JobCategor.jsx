import React, { useEffect, useState } from 'react'

import Availablejob from '../Availablejob/Availablejob'
import "./JobCategor.css"



const JobCategor = () => {

  const [jobLists ,setjobLists] = useState([]);

  useEffect(() => {
    fetch('jobList.json')
    .then(res => res.json())
    .then(data => setjobLists(data))
  }, [])
  
  return (
    <div>
        <div className='job-container-header'>
        <h1>Job Category List</h1>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className='job-container'>
          {
            jobLists.map(jobList => <Availablejob key={jobList.id} jobList={jobList}></Availablejob>)
          }
        </div>
    </div>
  )
}

export default JobCategor