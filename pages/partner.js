import React, { useState } from "react";
import Head from 'next/head';

import useTranslation from "../utils/useTranslation";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";
import { Form } from "react-bootstrap";

const Partner = () => {
  const translate = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    designation: "",
    contact: "",
    message: "",
  });

  const validate = (e) => {
    e.preventDefault();
    let newErrors = {};
    let isValid = true;

    // Basic form validation
    for (const key in formData) {
      if (formData[key].trim() === "") {
        newErrors[key] = `*Please enter ${key}`;
        isValid = false;
      }
    }

    setErrors(newErrors);

    if (isValid) {
      // Form submission logic can be added here
      console.log("Form submitted:", formData);
    } else {
      console.log("Form validation failed");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: value.trim() === "" ? `*Please enter ${id}` : "",
    }));
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Partner</title>
        <meta name="description" content="Besides making Bumppy fully entertaining and unique, we are also
                 interested in providing intensive and exclusive content to multiple companies and brands also. Our hands are 
                 free to welcome someone who wants to have partnership with us. So, if you wishing to be partner of us, then 
                 without any doubt and hesitation just approach us"></meta>


        <meta property="og:site_name" content="Bumppy"></meta>
        <meta property="og:type" content="activity"></meta>
        <meta property="og:title" content="Partner"></meta>
        <meta property="og:description" content="Besides making Bumppy fully entertaining and unique, we are also interested
                  in providing intensive and exclusive content to multiple companies and brands also. Our hands are free to welcome someone
                   who wants to have partnership with us. So, if you wishing to be partner of us, then without any doubt and hesitation just
                    approach us"></meta>
        <meta property="og:url" content="https://www.bumppy.com/partner/"></meta>


        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:title" content="Partner"></meta>
        <meta name="twitter:description" content="Besides making Bumppy fully entertaining and unique, we are also interested in providing
                     intensive and exclusive content to multiple companies and brands also. Our hands are free to welcome someone who wants to have partnership
                      with us. So, if you wishing to be partner of us, then without any doubt and hesitation just approach us"></meta>
        <meta name="google" content="nositelinkssearchbox"></meta>
      </Head>
      <NavBar />
      <div className="container">
        <div className="p-md-5 p-4">
          <div className="px-md-5">
            <p style={{ fontSize: "1.8rem", fontWeight: "500" }}>{translate(`Partner`)}</p>
            <p style={{ fontSize: ".9rem" }}>
              {translate(`Besides making Bumppy fully entertaining and unique, we are also
              interested in providing intensive and exclusive content to
              multiple companies and brands also. Our hands are free to welcome
              someone who wants to have a partnership with us.`)}
            </p>
            <p style={{ fontSize: ".9rem" }}>
              {translate(` So, if you wish to be a partner of us, then without any doubt and
              hesitation just approach us at{" "}`)}
              <a
                style={{ color: "cornflowerblue" }}
                href="mailto:hello@bumppy.com"
              >
                {translate(` hello@bumppy.com`)}
              </a>{" "}
              {translate(`and someone from our business development department will revert
              you back ASAP.`)}
            </p>
            <p style={{ fontSize: ".9rem" }}>
              {translate(` For making you more comfortable, we are having another alternative
              for you. Just fill this form, and we will revert back to you.`)}
            </p>
          </div>
          <div className="px-md-5 pt-md-4 pt-3">
            <Form className="col-md-6">
              <Form.Group controlId="name">
                <Form.Label style={{ fontSize: ".9rem" }}>
                  {translate(` Your Name (required)`)}
                </Form.Label>
                <Form.Control
                  style={{ border: "1px solid gainsboro", height: "2rem" }}
                  type="text"
                  onChange={handleChange}
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
              </Form.Group>

              <Form.Group className="pt-md-4 pt-3" controlId="email">
                <Form.Label style={{ fontSize: ".9rem" }}>
                  {translate(`Your Email (required)`)}
                </Form.Label>
                <Form.Control
                  style={{ border: "1px solid gainsboro", height: "2rem" }}
                  type="email"
                  onChange={handleChange}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </Form.Group>

              <Form.Group className="pt-md-4 pt-3" controlId="designation">
                <Form.Label style={{ fontSize: ".9rem" }}>
                  {translate(` Your Designation`)}
                </Form.Label>
                <Form.Control
                  style={{ border: "1px solid gainsboro", height: "2rem" }}
                  type="text"
                  onChange={handleChange}
                />
                {errors.designation && (
                  <p style={{ color: "red" }}>{errors.designation}</p>
                )}
              </Form.Group>

              <Form.Group className="pt-md-4 pt-3" controlId="contact">
                <Form.Label style={{ fontSize: ".9rem" }}>
                  {translate(`Your Contact`)}
                </Form.Label>
                <Form.Control
                  style={{ border: "1px solid gainsboro", height: "2rem" }}
                  type="tel"
                  onChange={handleChange}
                />
                {errors.contact && <p style={{ color: "red" }}>{errors.contact}</p>}
              </Form.Group>

              <Form.Group className="pt-md-4 pt-3" controlId="message">
                <Form.Label style={{ fontSize: ".9rem" }}>
                  {translate(`Your Message`)}
                </Form.Label>
                <textarea
                  className="form-control"
                  style={{ border: "1px solid gainsboro" }}
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <p style={{ color: "red" }}>{errors.message}</p>
                )}
              </Form.Group>

              <div className="py-md-4 py-2">
                <div
                  className="btn btn-success"
                  style={{
                    fontSize: ".8rem",
                    color: "#fff",
                    background: "#000",
                    cursor: "pointer",
                  }}
                  onClick={validate}
                >
                  {translate(` Send`)}
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Partner;
