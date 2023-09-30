import React, { useEffect, useState } from 'react';
import JobFeature from '../JobFeature/JobFeature';
import './FeaturedJob.css';

const FeaturedJob = () => {
  const [fetjobs, setfetjobs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('featuredjobs.json')
      .then((res) => res.json())
      .then((data) => setfetjobs(data));
  }, []);

  const displayedJobs = showAll ? fetjobs : fetjobs.slice(0, 4);

  return (
    <div>
      <div className="feature-job-header">
        <h2>Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. It's your future
        </p>
      </div>
      <div className="featured-job-container">
        {displayedJobs.map((fetjob) => (
          <JobFeature key={fetjob.id} fetjob={fetjob}></JobFeature>
        ))}
      </div>
      {!showAll && (
        <button onClick={() => setShowAll(true)} className="see-more-btn">
          See More
        </button>
      )}
    </div>
  );
};

export default FeaturedJob;
