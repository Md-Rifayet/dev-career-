import React from 'react'
import Branding from '../Branding/Branding'
import JobCategor from '../JobCategor/JobCategor'
import { useLoaderData } from 'react-router-dom'
import FeaturedJob from '../FeaturedJob/FeaturedJob'

const Home = () => {


  return (
    <div>
      <Branding />
      <JobCategor/>
      <FeaturedJob />
    </div>
  );
}

export default Home;
