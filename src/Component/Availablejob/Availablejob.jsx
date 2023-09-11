import React from 'react';
import './Availablejob.css';

const Availablejob = ({ jobList }) => {
 
  const imageUrl = `/Icons/${jobList.photo}`;

  return (
    <div>
      <div className='job-details'>
        <img src={imageUrl} alt="" />
        <h2>{jobList.name}</h2>
        <h4>{jobList.availableJob} Jobs Available</h4>
      </div>
    </div>
  );
}

export default Availablejob;
