import { useLoaderData, useNavigate } from "react-router-dom";


function CareerDetails() {
  const job = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="career-details-container">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="career-details-card">
        <h1 className="job-title">{job.title}</h1>
        <p className="job-type">{job.type}</p>

        <div className="info">
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Experience:</strong> {job.experience}</p>
        </div>

        {/* skills */}
        <div className="skills-section">
          <h3>Skills Required:</h3>
          <div className="skills-container">
            {job.skills_required.map((skill, index) => (
              <span key={index} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <p className="job-description">
          {job.description || "This role includes hands-on tasks, collaboration, and problem-solving."}
        </p>

        <a href={job.apply_link} target="_blank" className="apply-btn">
          Apply Now →
        </a>
      </div>
    </div>
  );
}


export const CareerDetailsLoader = async ({ params }) => {
  const res = await fetch("https://jeetz-007.github.io/Careers-API/careers.json");
  if (!res.ok) {
    throw new Error("Failed to fetch career details");
  }
  const data = await res.json();
  const jobs = data.jobs;

  // Finding job by id
  const job = jobs.find((j) => j.id.toString() === params.id);
  if (!job) {
    throw new Error("Career not found");
  }
  return job;
};


export default CareerDetails