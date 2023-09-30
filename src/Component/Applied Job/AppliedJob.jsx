import React, { useState } from 'react';
import "./AppliedJob.css";
import { useLoaderData } from 'react-router-dom';
import FinalAppliedJob from '../FinalAppliedJob/FinalAppliedJob';

const AppliedJob = () => {
  const loadJob = useLoaderData();
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const filteredJobs = selectedType ? loadJob.filter(job => job.type1 === selectedType) : loadJob;

  return (
    <div>
      <div className='jobLocation'>
        <button onClick={() => handleTypeChange('Remote')}>Remote</button>
        <button onClick={() => handleTypeChange('Onsite')}>Onsite</button>
      </div>

      <div className='appliedJob-Main'>
        {filteredJobs.map(jobAre => (
          <FinalAppliedJob key={jobAre.id} jobAre={jobAre}></FinalAppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
