import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Cookies from "js-cookie";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully sent and we will get back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const { register, handleSubmit, errors } = useForm();
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  function validateEmail(email) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)) {
      return "";
    } else {
      return "Please enter a valid email address";
    }
  }

  const validate = (e) => {
    e.preventDefault();
    let errors = {};
    if (!contact.name) {
      errors.name = "Please enter a valid name";
    }
    if (contact.number.length !== 10) {
      errors.number = "Please enter a valid number";
    }
    if (!contact.subject) {
      errors.subject = "Please enter a subject";
    }
    if (!contact.text) {
      errors.text = "Please enter a message";
    }
    let err = validateEmail(contact.email);
    if (err) {
      errors.email = err;
    }
    if (Object.keys(errors).length === 0) {
      submitContactForm();
    } else {
      setFormErrors(errors);
    }
  };

  const submitContactForm = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      contact_name: contact.name,
      contact_email: contact.email,
      contact_mobile: contact.number,
      contact_subject: contact.subject,
      contact_message: contact.text,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://apitranxt.bumppypay.com/api/pages/submit_contact_us_form.aspx",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "Y") {
          // Store the API response in a cookie
          Cookies.set("apiResponse", result.msg);
          Swal.fire("Successful", result.msg, "success");
        } else {
          Swal.fire("Oops!", result.msg, "error");
        }
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    // Fetch the API response from the cookie
    const apiResponse = Cookies.get("apiResponse");
    console.log("Stored API Response:", apiResponse);
    if (apiResponse) {
      Swal.fire("Successful", apiResponse, "success");
    }
  }, []);

  return (
    <div className="contact-form">
      <form id="contactForm" onSubmit={validate}>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control"
                value={contact.name}
                onChange={handleChange}
                // ref={register({ required: true })}
              />
              <div className="invalid-feedback" style={{ display: "block" }}>
                {formErrors.name && "Please enter your Name"}
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                value={contact.email}
                onChange={handleChange}
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
              <div className="invalid-feedback" style={{ display: "block" }}>
                {formErrors.email && "Please enter your Email"}
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="number"
                placeholder="Phone"
                className="form-control"
                value={contact.number}
                onChange={handleChange}
                ref={register({ required: true })}
              />
              <div className="invalid-feedback" style={{ display: "block" }}>
                {formErrors.number && "Please enter your Number"}
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="form-control"
                value={contact.subject}
                onChange={handleChange}
                ref={register({ required: true })}
              />
              <div className="invalid-feedback" style={{ display: "block" }}>
                {formErrors.subject && "Please enter your Subject"}
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <textarea
                name="text"
                cols="30"
                rows="5"
                placeholder="Write your message..."
                className="form-control"
                value={contact.text}
                onChange={handleChange}
                ref={register({ required: true })}
              />
              <div className="invalid-feedback" style={{ display: "block" }}>
                {formErrors.text && "Write your message"}
              </div>
            </div>
          </div>

          <div
            className="col-lg-12 col-sm-12"
            style={{ paddingBottom: "15px" }}
          >
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
