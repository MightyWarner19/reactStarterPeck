// src/components/JobCategory.js
// import React from 'react';
// import JobListing from './JobListing';

// function JobCategory({ category }) {
//   return (
//     <div className="category mb-10">
//     <h2 className="text-3xl font-semibold mb-4 text-blue-600">{category.name}</h2>
//     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//       {category.jobs.map(job => (
//         <JobListing key={job.id} job={job} />
//       ))}
//     </div>
//   </div>
//   );
// }

// export default JobCategory;
// src/components/JobCategory.js

// src/components/JobCategory.js
// src/components/JobCategory.js
import React from 'react';
import { Link } from 'react-router-dom';

function JobCategory({ category }) {
  return (
    <div className="category mb-10">
      <h2 className="text-3xl font-semibold mb-4 text-blue-600">{category.name}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {category.jobs.map(job => (
          <div key={job.id} className="job border rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">{job.title}</h3>
            <Link to={`/job/${job.id}`} className="text-blue-500 hover:underline focus:outline-none focus:shadow-outline-blue active:text-blue-800">More Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobCategory;

