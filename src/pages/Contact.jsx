// import {Form} from "react-router-dom"
// function Contact(){
//     return(
//         <div className="contact">
//             <h2 className="contact-heading">Join us</h2>
//             <Form method="post">
//                 <label htmlFor="username">Username</label><br />
//                 <input type="text" placeholder="Enter your name" required/><br />
//                 <label htmlFor="email">Email</label><br />
//                 <input type="email" placeholder="Enter your email" required/><br />
//                 <label htmlFor="message">Message</label><br />
//                 <textarea name="message" id="message" placeholder="Type Here...."></textarea>
//             </Form>
//         </div>
//     )
// }

// export default Contact

import { Form } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <h2 className="contact-heading">Join us</h2>

      <Form method="post" className="contact-form">
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
      </Form>
    </div>
  );
}

export default Contact;

