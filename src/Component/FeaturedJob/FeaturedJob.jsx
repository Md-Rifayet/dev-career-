import React, { useEffect, useState } from 'react'
import JobFeature from '../JobFeature/JobFeature';
import "./FeaturedJob.css"

const FeaturedJob = () => {
  
  const [fetjobs ,setfetjobs] = useState([]);

  useEffect(() => {
    fetch('featuredjobs.json')
    .then(res => res.json())
    .then(data => setfetjobs(data))
  }, [])
  return (
   <dir>
     <div className='feature-job-header'>
        <h2>Featured Jobs</h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>   
        <div className='featured-job-container'>
            {
              fetjobs.map(fetjob => <JobFeature key={fetjob.id} fetjob={fetjob}></JobFeature>)
            }
        </div>
    
   </dir> 
  )
}

export default FeaturedJob