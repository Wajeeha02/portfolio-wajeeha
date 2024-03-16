import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="contact-me" data-aos="fade-up">
      <div className="contact-heading">
        <h1>CONTACT ME!</h1>
        <div className="line">
          <p></p>
        </div>
        <p>
          Let's turn your ideas into reality.Contact me for <br></br> your next
          project.
        </p>
      </div>
      <form action="https://formspree.io/f/myyrdyjp" method="POST">
        <div className="form">
          <label for="name">Name</label>
          <input type="text" name="name" required></input>
          <label for="email">Email</label>
          <input type="email" name="email" required></input>
          <label for="message">Message</label>
          <textarea
            cols={10}
            rows={15}
            className="text"
            name="message"
            required
          ></textarea>
          <button type="submit" className="send">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
