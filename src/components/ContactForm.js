import React from "react";
import "./ContactForm.css";

const ContactForm = props => {
  return (
    <form className="contact" onSubmit={props.submit}>
      <h3>Contact us</h3>
      <textarea
        onChange={props.change}
        value={props.value}
        placeholder="Write to us..."
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
