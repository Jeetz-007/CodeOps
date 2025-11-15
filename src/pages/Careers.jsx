import { useLoaderData, Link, Outlet } from "react-router-dom";

function Careers() {
  const careers = useLoaderData();

  return (
    <div className="careers">
      <h2 className="careers-title">Open Positions</h2>

      <div className="careers-grid">
        {careers.map((career) => (
          <Link 
            to={`/careers/${career.id}`} 
            key={career.id}
            className="career-card"
          >
            <h3>{career.title}</h3>
            <p>Experience: {career.experience || "N/A"}</p>
            <p>Location : {career.location || "N/A"}</p>
            <span className="view-details">View Details →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// loader function
export const CareerLoaders = async()=>{
  const res = await fetch("https://jeetz-007.github.io/Careers-API/careers.json")
    if (!res.ok) {
    throw new Error('Failed to fetch careers data');
  }
  const data = await res.json()
  return data.jobs
}

export default Careers

