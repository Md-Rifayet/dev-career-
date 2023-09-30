import { getShoppingCart } from "../utilities/fakedb";

const jobLoader =async() => {
    const loadedJobs = await fetch('featuredjobs.json');
    const jobs = await loadedJobs.json();
    
const storedCart = getShoppingCart();

const savedJob = [];

for(const id in  storedCart){
  const addedJob = jobs.find(job => job.id === id);

  if(addedJob){
    const appliedTime = storedCart[id];
    addedJob.appliedTime = appliedTime;
    savedJob.push(addedJob)

  }
}

    return savedJob
}

export default jobLoader;