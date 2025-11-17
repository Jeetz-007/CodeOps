import { useState } from "react";

function Contact() {

  const [showPopup, setShowPopup] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setShowPopup(true);

    e.target.reset()

    // Auto hide after 3 sec
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  }

  return (
    <div className="contact">
      <h2 className="contact-heading">Join us</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          name="username"
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email</label>
        <input 
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea 
          id="message"
          name="message"
          placeholder="Type here...."
        ></textarea>

        <button type="submit" className="contact-btn">Submit</button>
      </form>

        {/* success popup */}
      {showPopup && (
        <div className="popup">
          <p>Message Submitted Successfully! 🎉</p>
        </div>
      )}
    </div>
  );
}

export default Contact;

