import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function gotoCareers() {
    navigate("/careers");
  }

  return (
    <div className="home-container">
      <div className="hero-content">
        <h1 className="hero-title">Build. Create. Deploy.</h1>

        <p className="hero-subtitle">
          At CodeOps, we connect skilled developers with real-world projects.
          Whether you're a freelancer or a business, CodeOps helps you grow,
          innovate, and ship quality products faster.
        </p>

        <button className="hero-btn" onClick={gotoCareers}>
          Join as a Freelancer →
        </button>
      </div>
    </div>
  );
}

export default Home;
