import React from "react";
import "../styles/Careers.css";

function Careers() {
  const jobListings = [
    {
      id: 1,
      title: "Cashier",
      location: "New York, NY",
      description: "Looking for a friendly and fast cashier to join our team.",
    },
    {
      id: 2,
      title: "Chef",
      location: "Chicago, IL",
      description: "Experienced chef needed with passion for fast food.",
    },
    {
      id: 3,
      title: "Delivery Driver",
      location: "Los Angeles, CA",
      description: "Must have valid license and know the city well.",
    },
    {
      id: 4,
      title: "Restaurant Manager",
      location: "Houston, TX",
      description: "Lead the team and ensure smooth restaurant operations.",
    },
  ];

  const handleApply = (title) => {
    alert(`Thank you for your interest in the ${title} role!`);
  };

  return (
    <div className="careers-container">
      <h2>Join Our Team</h2>
      <p>
        We’re always looking for enthusiastic people to join our restaurant
        family!
      </p>
      <div className="jobs-list">
        {jobListings.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p className="job-location">{job.location}</p>
            <p>{job.description}</p>
            <button
              className="apply-btn"
              onClick={() => handleApply(job.title)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Careers;
