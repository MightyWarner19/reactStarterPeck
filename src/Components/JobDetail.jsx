// src/components/JobDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function JobDetail({ job }) {
  const { jobId } = useParams();
  const selectedJob = job.find(job => job.id === jobId);

  if (!selectedJob) {
    return <div>Job not found</div>;
  }

  return (
    <div className="job-detail">
      <h2 className="text-3xl font-semibold mb-4 text-blue-600">{selectedJob.title}</h2>
      <p className="text-gray-600 mb-2">{selectedJob.description}</p>
      <p className="mb-2"><strong className="text-gray-800">Requirements:</strong> {selectedJob.requirements}</p>
      <p className="mb-2"><strong className="text-gray-800">Location:</strong> {selectedJob.location}</p>
      <p className="mb-2"><strong className="text-gray-800">Salary:</strong> {selectedJob.salary}</p>
      <a href={selectedJob.applyLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Apply Now</a>
    </div>
  );
}

export default JobDetail;
