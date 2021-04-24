import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import { Prompt } from "react-router-dom";

function ContactPage() {
  const [valueForm, setValueForm] = useState("");
  const [isEmpty, setContent] = useState(true);

  const handleChange = e => {
    setValueForm(e.target.value);
    valueForm ? setContent(false) : setContent(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setValueForm("");
    setContent(true);
  };

  return (
    <>
      <ContactForm
        value={valueForm}
        submit={handleSubmit}
        change={handleChange}
      />
      <Prompt
        when={!isEmpty}
        message="Your form is not empty. Are you sure to leave this page? "
      />
    </>
  );
}

export default ContactPage;
