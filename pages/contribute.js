import React, { useState } from "react";
import Head from 'next/head';

import useTranslation from "../utils/useTranslation";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";
import { Form, Button } from "react-bootstrap";

const Contribute = () => {
  const translate = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    place: "",
    website: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <Head>
        <title>Contribute</title>
        <meta name="description" content="Your talent is only certain clicks 
    away from getting recognize by viewers of Bumppy. If you are having something appreciable
     and want to share it with us then your contribution is taken immediately."></meta>
        <meta name="keywords" content="contribute,investor,talent"></meta>

        <meta property="og:site_name" content="Bumppy"></meta>
        <meta property="og:type" content="activity"></meta>
        <meta property="og:title" content="Contribute"></meta>
        <meta property="og:description" content="Your talent is only certain clicks away from getting
      recognize by viewers of Bumppy. If you are having something appreciable and want to share it with
       us then your contribution is taken immediately."></meta>
        <meta property="og:url" content="https://www.bumppy.com/contribute/"></meta>

        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:description" content="Your talent is only certain clicks away from getting recognize 
       by viewers of Bumppy. If you are having something appreciable and want to share it with us then your
        contribution is taken immediately."></meta>
        <meta name="google" content="nositelinkssearchbox"></meta>
      </Head>

      <NavBar />
      <div className="container">
        <div className="p-md-5 p-4">
          <div className="px-md-5">
            <p style={{ fontSize: "1.8rem", fontWeight: "500" }}>{translate(`Contribute`)}</p>
            <p style={{ fontSize: ".9rem" }}>
              {translate(` Your talent is only certain clicks away from getting recognized by viewers of Bumppy. If you are having something appreciable and want to share it with us, then your contribution is taken immediately. The original creator is always awarded full appreciation and credit here.`)}
            </p>
            <p style={{ fontSize: ".9rem" }}>
              {translate(`If you want to contribute, then just drop a message at us &nbsp;`)}
              <a
                style={{ color: "cornflowerblue" }}
                href="mailto:hello@bumppy.com"
              >
                {translate(` hello@bumppy.com`)}
              </a>{" "}
              {translate(`For making you more comfortable, we are having another alternative for you. Just fill this form and we will revert back to you.`)}
            </p>
            <p style={{ fontSize: ".9rem" }}>
              {translate(`For making you more comfortable, we are having another alternative for you. Just fill this form, and we will revert back to you.`)}
            </p>
          </div>
          <div className="px-md-5 pt-md-4 pt-3">
            <Form className="col-md-6" onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label style={{ fontSize: ".9rem" }}>
                  {translate(`Your Name (required)`)}
                </Form.Label>
                <Form.Control
                  style={{ border: "1px solid gainsboro", height: "2rem" }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p style={{ color: "red" }}>{errors.name}</p>
                )}
              </Form.Group>

              <Form.Group className="pt-md-4 pt-3" controlId="formEmail">
                <Form.Label style={{ fontSize: ".9rem" }}>
                  {translate(`Your Email (required)`)}
                </Form.Label>
                <Form.Control
                  style={{ border: "1px solid gainsboro", height: "2rem" }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p style={{ color: "red" }}>{errors.email}</p>
                )}
              </Form.Group>

              <Form.Group className="pt-md-4 pt-3" controlId="formDesignation">
                <Form.Label style={{ fontSize: ".9rem" }}>
                  {translate(`Place`)}
                </Form.Label>
                <Form.Control
                  style={{ border: "1px solid gainsboro", height: "2rem" }}
                  type="text"
                  name="place"
                  value={formData.place}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="pt-md-4 pt-3" controlId="formContact">
                <Form.Label style={{ fontSize: ".9rem" }}>
                  {translate(`Website URL`)}
                </Form.Label>
                <Form.Control
                  style={{ border: "1px solid gainsboro", height: "2rem" }}
                  type="tel"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="pt-md-4 pt-3" controlId="formContact">
                <Form.Label style={{ fontSize: ".9rem" }}>
                  {translate(`Contact`)}
                </Form.Label>
                <Form.Control
                  style={{ border: "1px solid gainsboro", height: "2rem" }}
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="pt-md-4 pt-3" controlId="formMessage">
                <Form.Label style={{ fontSize: ".9rem" }}>
                  {translate(`Your Message`)}
                </Form.Label>
                <textarea
                  className="form-control"
                  style={{ border: "1px solid gainsboro" }}
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </Form.Group>
              <div className="form-group pt-3">
                <div
                  className="btn"
                  type="submit"
                  variant="success"
                  style={{
                    fontSize: ".8rem",
                    color: "#fff",
                    background: "#000",
                  }}
                  onClick={handleSubmit}
                >
                  {translate(`Send`)}
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

export default Contribute;
