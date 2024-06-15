import React, { Component } from "react";
import {
  Col,
  Row,
  Nav,
  Tabs,
  Tab,
  Accordion,
  Card,
  Button,
} from "react-bootstrap";

import Service from "../../pages/service_accordian";
import Link from "../../utils/ActiveLink";
export default class AboutUs extends Component {
  render() {
    return (
      <>
        <div className="overview-box">
          <div className="row justify-content-center w-100">
            <div className="col-12 col-md-4 col-sm-6 ">
              <img
                className="phone"
                src="/images/laptopmain.png"
                alt="Bumppy_dashboard"
                style={{
                  width: "100%",
                  height: "auto",
                  marginTop: "-1rem",
                }}
              />
            </div>

            <div className="take head1 px-3 ">
              {" "}
              Take Advantages of financial services with Bumppy Payments App{" "}
            </div>

            <p className="retail2 py-0" style={{ padding: "29px" }}>
              Join with Bumppy Payments Now and get the opportunity to grow your
              business online with very minimal charges
            </p>
          </div>
        </div>
        <Service />
        <br></br>
        <div
          className="service_laptop"
          style={{ backgroundColor: "#f2f2f2", padding: "29px" }}
        >
          <div className="row justify-content-center">
            <div className="row align-items-center col-md-10 col-12 grid-margin stretch-card tab-vertical">
              <Tab.Container id="left-tabs-example" defaultActiveKey="second">
                <div
                  className="col-12 col-md-3 p-3"
                  style={{ background: "#244F99", borderRadius: "1.5rem" }}
                >
                  <Nav
                    variant="tabs"
                    className="flex-column nav-tabs-vertical my-tabs"
                    style={{ border: "none" }}
                  >
                    {/* <Nav.Item>
                      <Nav.Link
                        className="text-light p-3 m-1"
                        eventKey="first"
                        style={{ borderRadius: ".7rem" }}
                      >
                        <i className="mdi mdi-home-outline text-primary pr-2"></i>
                        Money Transfer
                      </Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                      <Nav.Link
                        className="text-light p-3 m-1"
                        eventKey="second"
                        style={{ borderRadius: ".7rem" }}
                      >
                        <i className="mdi mdi-account-outline text-danger pr-2"></i>
                        Bharat Bill Payment Services
                      </Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link
                        className="text-light p-3 m-1"
                        eventKey="third"
                        style={{ borderRadius: ".7rem" }}
                      >
                        <i className="mdi mdi-email-open-outline text-success pr-2"></i>
                        Domestic Money Transfer
                      </Nav.Link>
                    </Nav.Item> */}
                    {/* <Nav.Item>
                      <Nav.Link
                        className="text-light p-3 m-1"
                        eventKey="forth"
                        style={{ borderRadius: ".7rem" }}
                      >
                        <i className="mdi mdi-account-outline text-danger pr-2"></i>
                        Aadhaar Enabled Payment Services
                      </Nav.Link>
                    </Nav.Item> */}
                    {/* <Nav.Item>
                      <Nav.Link
                        className="text-light p-3 m-1"
                        eventKey="fifth"
                        style={{ borderRadius: ".7rem" }}
                      >
                        <i className="mdi mdi-account-outline text-danger pr-2"></i>
                        Flight Booking
                      </Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                      <Nav.Link
                        className="text-light p-3 m-1"
                        eventKey="sixth"
                        style={{ borderRadius: ".7rem" }}
                      >
                        <i className="mdi mdi-account-outline text-danger pr-2"></i>
                        Virtual Collections/QR Code
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        className="text-light p-3 m-1"
                        eventKey="seventh"
                        style={{ borderRadius: ".7rem" }}
                      >
                        <i className="mdi mdi-account-outline text-danger pr-2"></i>
                        Identity Verification
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <div className="col-12 col-md-9">
                  <Tab.Content className="tab-content-vertical">
                    <Tab.Pane eventKey="first">
                      <div className="row mx-2 align-items-center">
                        <div className="overview-image col-12 col-sm-6 d-flex justify-content-center">
                          <img
                            className="w-75 h-auto  "
                            // style={{maxHeight:'50vh'}}
                            src="/images/Money_transfer.png"
                            alt="Money Transfer"
                          />
                        </div>

                        <div className="overview-content col-12 col-sm-6 content">
                          <div className="">
                            <div className="head">Money Transfer </div>

                            <p className="retail1">
                              Money Transfer service is an easy and simple way
                              to send money in any customer bank Account .
                              Conveniently send money to Bank Account and track
                              transactions from your web or Bumppy Payments
                              Application. There No significant fees.
                            </p>
                            <Link href="/money">
                              <button
                                className="income col-4 m-2 p-2 flex-fill"
                                style={{ maxWidth: "20rem", border: "none" }}
                              >
                                <a target="_blank" style={{ color: "white" }}>
                                  Read
                                </a>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="row mx-2 align-items-center">
                        <div className="overview-image col-12 col-sm-6  d-flex justify-content-center">
                          <img
                            className="w-75 h-auto"
                            src="/images/Bharat_bill.png"
                            alt="Bharat Bill"
                          />
                        </div>

                        <div className="overview-content col-12 col-sm-6 content">
                          <div className="">
                            <div className="head">
                              Bharat Bill Payment System(BBPS){" "}
                            </div>

                            <p className="retail1">
                              Bumppy Bill Payment Services For Retailers Are
                              Profitable And Easy to use. Just keeping track of
                              all the bills that need to be paid and then going
                              to pay them is, at best, a major time-consuming
                              task for the average person.
                            </p>
                            <Link href="/bbps">
                              <button
                                className="income col-4 m-2 p-2 flex-fill"
                                style={{ maxWidth: "20rem", border: "none" }}
                              >
                                <a target="_blank" style={{ color: "white" }}>
                                  Read
                                </a>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="forth">
                      <div className="row mx-2 align-items-center">
                        <div className="overview-image col-12 col-sm-6 d-flex justify-content-center">
                          <img
                            className="w-75 h-auto"
                            src="/images/Aeps.png"
                            alt="Aeps"
                          />
                        </div>

                        <div className="overview-content col-12 col-sm-6 content">
                          <div className="">
                            <div className="head">
                              Aadhaar Enabled Payment System(AEPS){" "}
                            </div>

                            <p className="retail1">
                              In AEPS service you can offer to your customers
                              cash withdrawal, balance enquiry , aadhaar pay and
                              mini statement service . This service will help to
                              earn commission on every cash withdrawal
                              transaction by customers.
                            </p>
                            <Link href="/aeps">
                              <button
                                className="income col-4 m-2 p-2 flex-fill"
                                style={{ maxWidth: "20rem", border: "none" }}
                              >
                                <a target="_blank" style={{ color: "white" }}>
                                  Read
                                </a>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane> */}
                    {/* <Tab.Pane eventKey="third">
                      <div className="row mx-2 align-items-center">
                        <div className="overview-image col-12 col-sm-6  d-flex justify-content-center">
                          <img
                            className="w-75 h-auto "
                            src="/images/Domestic_money.png"
                            alt="Domestic money"
                          />
                        </div>

                        <div className="overview-content col-12 col-sm-6 content">
                          <div className="">
                            <div className="head">
                              Domestic Money Transfer(DMT){" "}
                            </div>

                            <p className="retail1">
                              With DMT service from Bumppy Payments Send money
                              to your loved ones without worrying about working
                              hours. Use IMPS, a facility offered as part of DMT
                              : the fastest way to send money anytime,
                              anywhere.It has never been easier to get money
                              instantly where you need it.
                            </p>
                            <Link href="/dmt">
                              <button
                                className="income col-4 m-2 p-2 flex-fill"
                                style={{ maxWidth: "20rem", border: "none" }}
                              >
                                <a target="_blank" style={{ color: "white" }}>
                                  Read
                                </a>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane> */}

                    {/* <Tab.Pane eventKey="fifth">
                      <div className="row mx-2 align-items-center">
                        <div className="overview-image col-12 col-sm-6 d-flex justify-content-center">
                          <img
                            className="w-75 h-auto"
                            src="/images/Flight_Booking.png"
                            alt="Flght_Booking"
                          />
                        </div>

                        <div className="overview-content col-12 col-sm-6 content">
                          <div className="">
                            <div className="head">Travel Booking (Flight) </div>

                            <p className="retail1">
                              Booking flights will allow you to effortlessly
                              make significant commissions and increase your
                              monthly income. By offering your clients services
                              like Flight booking, Hotel booking and IRCTC you
                              will get attractive commissions.
                            </p>
                            <Link href="/flight">
                              <button
                                className="income col-4 m-2 p-2 flex-fill"
                                style={{ maxWidth: "20rem", border: "none" }}
                              >
                                <a target="_blank" style={{ color: "white" }}>
                                  Read
                                </a>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane> */}
                    <Tab.Pane eventKey="sixth">
                      <div className="row mx-2 align-items-center">
                        <div className="overview-image col-12 col-sm-6 d-flex justify-content-center">
                          <img
                            className="w-75 h-auto"
                            src="/images/Qr_code.png"
                            alt="QR"
                          />
                        </div>

                        <div className="overview-content col-12 col-sm-6 content">
                          <div className="">
                            <div className="head">Virtual Account/QR Code </div>

                            <p className="retail1">
                              You may obtain payer information and maintain
                              track of Payment transfers to numerous electronic
                              and paper accounts in a consistent way with the
                              help of our Virtual Account Collection services.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="seventh">
                      <div className="row mx-2 align-items-center">
                        <div className="overview-image col-12 col-sm-6 d-flex justify-content-center">
                          <img
                            className="w-75  h-auto"
                            src="/images/Identification_id.png"
                            alt="Identification_verification"
                          />
                        </div>

                        <div className="overview-content col-12 col-sm-6 content">
                          <div className="">
                            <div className="head">Identity Verification </div>

                            <p className="retail1">
                              Bumppy Payments service improved the online
                              identity verification process. User can Prevent
                              online identity fraud and identity theft, and
                              simplify KYC/AML compliance while providing a easy
                              onboarding experience.
                            </p>
                            {/* <button className="income  m-2 p-2 flex-fill">
                            {" "}
                            <a
                              className="income  m-2 p-2 flex-fill"
                              style={{ color: "white !important" }}
                              href="/id"
                            >
                              Read More
                            </a>
                          </button> */}
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </div>
          </div>
        </div>
        <div className="overview-content">
          <div className="content left-content">
            <div className="smart p-0 p-md-3">
              {" "}
              Smart Solutions for Everyone{" "}
            </div>
            <div className="section-title">
              <div className="bar " style={{ marginTop: "-3em" }}></div>
            </div>
            <p className="smart1">
              Whether you are a retailer, distributor, individual or self help
              group, we have smart solutions for everyone.
            </p>
          </div>
        </div>
        <br></br>
        {/* Left Image Style */}
        <div className="row mx-3 align-items-center justify-content-center">
          <div className="col-12 col-md-6 px-4 d-flex align-items-center">
            <div className="col-12 col-lg-8 col-md-10 mx-auto">
              <img
                src="/images/retailer.png"
                alt="Retailer-Image"
                style={{
                  width: "100%",
                  height: "auto",
                  padding: "12px",
                }}
              />
            </div>
          </div>
          <div className=" row align-items-center col-12 col-md-6 px-0">
            <div className="content m-0 px-2">
              <div className="head" style={{ marginTop: "1rem" }}>
                Retailer{" "}
              </div>
              {/* <div className="bar"></div> */}
              <br></br>
              <div className="retail">
                Join with Bumppy and earn more than 25000 per month{" "}
              </div>

              <p className="retail1">
                Retailers have a chance to select different products and provide
                the best service to customers. No need of any investment or any
                working capital for start journey with Bumppy.
              </p>

              <div
                className="row w-100 align-items-center"
                style={{ border: "3px solid #fff" }}
              >
                <Link  target="_blank"  href="https://dashboard.bumppy.com/register">
                  <button
                   target="_blank"
                    className="income col-4 m-2 p-2 flex-fill"
                    style={{ maxWidth: "20rem", border: "none" }}
                  >
                    <a target="_blank"
                    style={{ color: "white" }}>Join Bumppy</a>
                  </button>
                </Link>

                <Link href="/income">
                  <button
                    className="calci col-4 m-2 p-2 flex-fill"
                    style={{ maxWidth: "20rem" }}
                  >
                    <a>Income Calculator</a>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* distributor */}
        <div className="" style={{ backgroundColor: "#f2f2f2" }}>
          <div
            className="row mx-3 align-items-center justify-content-center"
            style={{ padding: "12px" }}
          >
            {/* <div className="services-area ptb-70 bg-f7fafd"> */}
            <div className="container-fluid p-0">
              <div className="overview-box">
                <div className="overview-content">
                  <div className="content m-0 ">
                    <div className="head d-flex justify-content-start">
                      Distributor{" "}
                    </div>
                    {/* <div className="bar"></div> */}
                    <br></br>

                    <div className="retail" style={{ textAlign: "start" }}>
                      Start your journey as distributor with Bumppy and make
                      more than 50000 in a month .{" "}
                    </div>

                    <p className="retail1" style={{ textAlign: "start" }}>
                      You can earn more money through your distribution service
                      using the Bumppy platform . No need to make physical
                      effort.
                    </p>
                    <div className="row justify-content-center">
                      <Link   href="https://dashboard.bumppy.com/register">
                        <button
                          className="income col-4 m-2 p-2 flex-fill"
                          style={{ maxWidth: "20rem", border: "none" }}
                        >
                          <a target="_blank" style={{ color: "white" }}>
                            Join Bumppy
                          </a>
                        </button>
                      </Link>

                      <Link href="/income">
                        <button
                          className="calci col-4 m-2 p-2 flex-fill btn-sm btn-md"
                          style={{ maxWidth: "20rem" }}
                        >
                          <a>Income Calculator</a>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 px-4 mx-md-auto">
                  <div className="col-12 col-lg-8 col-md-10 mx-auto">
                    <img
                      className=""
                      src="/images/Distributor.png"
                      alt="Distributor"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* self  */}

        <div className="row mx-3 align-items-center justify-content-center">
          <div className="col-12 col-md-6 px-4 d-flex align-items-center">
            <div className="col-12 col-lg-8 col-md-10 mx-auto">
              <img
                className="pt-4"
                src="/images/masterdistributer.png"
                alt="Small scale owner"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className=" row align-items-center col-12 col-md-6 px-0">
            <div className="content m-0 px-2">
              <div className="head" style={{ marginTop: "1rem" }}>
                Individual/Small scale Owner{" "}
              </div>
              {/* <div className="bar"></div> */}
              <br></br>
              <div className="retail">
                Join a growing tribe groups who earn more than 15,000 per month
                with us{" "}
              </div>

              <p className="retail1">
                Grab the opportunity to run your own business, from the comforts
                of your home or shop and earn additional income.
              </p>

              <div
                className="row w-100 align-items-center"
                style={{ border: "3px solid #fff" }}
              >
                <Link target="_blank"  href="https://dashboard.bumppy.com/register">
                  <button
                    className="income col-4 m-2 p-2 flex-fill"
                    style={{ maxWidth: "20rem", border: "none" }}
                  >
                    <a  style={{ color: "white" }}>
                      Join Bumppy
                    </a>
                  </button>
                </Link>

                <Link href="/income">
                  <button
                    className="calci col-4 m-2 p-2 flex-fill"
                    style={{ maxWidth: "20rem" }}
                  >
                    <a>Income Calculator</a>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <div style={{ backgroundColor: "#f2f2f2", padding: "29px" }}>
          <div className="smart">An Honourable Mobile Application </div>

          <br></br>

          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-sm-8">
              <div className="row">
                <div className="col-6 d-flex justify-content-end">
                  <img
                    className="phone1"
                    src="/images/honourablephone.png"
                    alt="Bumppy Phone"
                    style={{}}
                  />
                </div>
                <div className="col-6 d-flex justify-content-start">
                  <div className="d-flex flex-column justify-content-center">
                    <h2>Get The App</h2>
                    <h5> Scan the QR code to download the app</h5>
                    <img
                      className="phone1"
                      src="/images/qr_scanning.png"
                      alt="qr_scan"
                      style={{
                        top: "0",
                        left: "0",

                        width: "40%",
                        height: "auto",
                      }}
                    />
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.app.bumppypayments"
                    >
                      <img
                        className="qr1 play_btn"
                        src="/images/google_play.png"
                        alt="google play"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div></div>
              <div
                className="d-flex justify-content-end"
                style={{
                  position: "absolute",
                  right: "0px",
                  bottom: "0px",
                  width: "100%",
                }}
              ></div>
            </div>
          </div>
        </div>

        <br></br>
      </>
    );
  }
}
