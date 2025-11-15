function About() {
  return (
    <div className="about">

      {/* Top section */}
      <div className="heading-picture">
        <h3>About Us</h3>
        <p>A next-generation freelancing platform built by developers</p>

        <div className="about-pic">
          <img src="/src/assets/AboutPic.jpg" alt="About CodeOps" />
        </div>
      </div>

      {/* Stats section */}
      <div className="more-info">
        <div className="info-card">
          <div className="number">250+</div>
          <div className="number-text">Employees</div>
        </div>

        <div className="info-card">
          <div className="number">10+</div>
          <div className="number-text">Countries</div>
        </div>

        <div className="info-card">
          <div className="number">100+</div>
          <div className="number-text">Projects Done</div>
        </div>

        <div className="info-card">
          <div className="number">20+</div>
          <div className="number-text">Offices</div>
        </div>

        <div className="info-card">
          <div className="number">5+</div>
          <div className="number-text">Project Awards</div>
        </div>
      </div>
      
      {/* Introduction */}
      <div className="about-intro-section">
        <div className="intro-heading">
            <h3>Crafting Excellence</h3>
            <h2>The VisionCrafters Journey</h2>
        </div>

            <div className="intro">
                <p>
                CodeOps is a next-generation freelancing platform built by developers, 
                for developers. Our mission is simple — to empower skilled individuals 
                and deliver top-notch solutions to clients worldwide.

                We handpick passionate developers, evaluate them based on real coding 
                abilities, and assign them to projects that match their expertise.

                From frontend and backend development to full-stack and cybersecurity 
                solutions, we ensure every project is handled by the right talent.

                At CodeOps, we value transparency, efficiency, and growth — helping 
                businesses achieve goals faster while giving freelancers the freedom 
                and recognition they deserve.
                </p>
            </div>
        </div>


        {/* Work */}
        <div className="work">
            <h2>Our Work</h2>
            <div className="row">
                <img src="src/assets/frontend.jpg" alt="Frontend" />
                <p>Our frontend developers focus on creating interfaces that feel effortless and engaging.
                     We combine modern frameworks, clean component architecture, and thoughtful design 
                     principles to build user experiences that look sharp and perform smoothly across all devices. 
                     From intuitive layouts to dynamic interactions, our goal is simple — 
                    make every user enjoy the product from the very first click.
                </p>
            </div>
            <div className="row-reverse">
                <img src="src/assets/Backend.jpg" alt="Backend" />
                <p>
                    Behind every great product is a strong backend, and 
                    our team engineers systems built for durability, speed, and scale. 
                    We handle everything from API design and server logic to database management
                     and performance optimization. With a deep focus on security and reliability, our backend developers 
                     ensure that your application runs smoothly, 
                    handles growth, and stands strong even under heavy usage.
                </p>
            </div>
            <div className="row">
                <img src="src/assets/FullStack.jpg" alt="Fullstack" />
                <p>
                    Our full-stack developers bridge the gap between frontend beauty and backend power. 
                    They understand the full journey of a feature — from designing the UI to structuring the 
                    database and deploying the final system. This end-to-end expertise allows CodeOps to ship 
                    cohesive, production-ready solutions quickly and efficiently. Whether it’s a small feature or a complete platform, 
                    our full-stack team brings balance, clarity, and speed to every build.
                </p>
            </div>
            <div className="row-reverse">
                <img src="src/assets/Cybersecurity.jpg" alt="" />
                <p>
                    Security is at the core of everything we build. Our cybersecurity 
                    specialists work to protect applications from threats, vulnerabilities, 
                    and data breaches through rigorous testing, audits, and proactive defense strategies.
                     From secure coding practices to risk assessments and real-time monitoring, we ensure that every project meets strong industry standards. At CodeOps, we don’t treat security as an afterthought —
                     we build it into the foundation.
                </p>
            </div>
        </div>
    </div>
  );
}

export default About;