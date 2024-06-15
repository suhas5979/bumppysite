import React, { Component } from "react";
import Link from "../../utils/ActiveLink";
import Cookies from 'js-cookie';

class Navbar extends Component {
  state = {
    collapsed: true,
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutsideNavbar);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutsideNavbar);
  }

  toggleNavbar = () => {
    this.setState((prevState) => ({
      collapsed: !prevState.collapsed,
    }));
  };

  handleClickOutsideNavbar = (event) => {
    const navbarElement = document.getElementById("navbar");
    const navPhoneElement = document.getElementById("navPhone");
    if (
      !navbarElement.contains(event.target) &&
      !navPhoneElement.contains(event.target)
    ) {
      this.setState({ collapsed: true });
    }
  };

  handleButtonClick = () => {
    Cookies.set('Home', 'button_clicked');
  };

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <>
      <div className="nav_lap">
      <div id="navbar" className="navbar-area">
        <div className="luvion-nav">
          <div className="px-5">
            <nav className="navbar navbar-expand-md navbar-light px-5">
              <Link href="/">
                <a className="navbar-brand">
                  <img
                    style={{ height: "3rem", marginTop: "6px" }}
                    src="/images/new_design/bumppy_payments_logo_white.png"
                    alt="logo"
                  />
                  <img
                    style={{
                      height: "3rem",
                      marginTop: ".3rem",      
                      marginBottom: ".3rem",
                    }}
                    src="/images/logo.png"
                    alt="logo"
                  />
                </a>
              </Link>


              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/" >
                      <a  className="nav-link"> Home</a>
                    </Link>
                  </li>
                 
                  <li className="nav-item">
                    <Link href="/">
                      <a
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        Products <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/" activeClassName="active">
                          <a
                            style={{ color: "#000856" }}
                            className="nav-link"
                            onClick={() => {}}
                          >
                            Bumppy Services
                          </a>
                        </Link>
                        <ul className="dropdown-menu navbar-nav-collapse">
                          {/* <li className="nav-item">                           
                            <Link href="/dmt" activeClassName="active">
                              <a
                                style={{ color: "#000856" }}
                                className="nav-link"
                              >
                                DMT
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/aeps" activeClassName="active">
                              <a
                                style={{ color: "#000856" }}
                                className="nav-link"
                              >
                                AEPS
                              </a>
                            </Link>
                          </li> */}
                          {/* <li className="nav-item">
                            <Link href="/upi" activeClassName="active">
                              <a
                                style={{ color: "#000856" }}
                                className="nav-link"
                              >
                                UPI Payment
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/Gateway" activeClassName="active">
                              <a
                                style={{ color: "#000856" }}
                                className="nav-link"
                              >
                                Payment Gateways
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/payout" activeClassName="active">
                              <a
                                style={{ color: "#000856" }}
                                className="nav-link"
                              >
                                Payout API
                              </a>
                            </Link>
                          </li> */}
                          {/* <li className="nav-item">
                            <Link href="/aadhar" activeClassName="active">
                              <a
                                style={{ color: "#000856" }}
                                className="nav-link"
                              >
                                Aadhaar Pay
                              </a>
                            </Link>
                          </li> */}
                          {/* <li className="nav-item">
                            <Link href="/cms" activeClassName="active">
                              <a
                                style={{ color: "#000856" }}
                                className="nav-link"
                              >
                                Cash Management System
                              </a>
                            </Link>
                          </li> */}
                          <li className="nav-item">
                            <Link href="/bbps" activeClassName="active">
                              <a
                                style={{ color: "#000856" }}
                                className="nav-link"
                              >
                                Bill Payment
                              </a>
                            </Link>
                          </li>
                          {/* <li className="nav-item">
                            <Link href="/recharge" activeClassName="active">
                              <a
                                style={{ color: "#000856" }}
                                className="nav-link"
                              >
                                Recharge
                              </a>
                            </Link>
                          </li> */}
                        </ul>
                      </li>
                      {/* <li className="nav-item">
                        <Link href="/" activeClassName="active">
                          <a
                            style={{ color: "#000856" }}
                            className="nav-link"
                          >
                            Travel
                          </a>
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/flight" activeClassName="active">
                              <a
                                style={{ color: "#000856" }}
                                className="nav-link"
                              >
                                Bumppy Flight
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/bus" activeClassName="active">
                              <a
                                style={{ color: "#000856" }}
                                className="nav-link"
                              >
                                Bus Booking
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/irctc" activeClassName="active">
                              <a
                                style={{ color: "#000856" }}
                                className="nav-link"
                              >
                                IRCTC Ticket Booking
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li> */}
                      <li className="nav-item">
                        <Link href="/" activeClassName="active">
                          <a
                            style={{ color: "#000856" }}
                            className="nav-link"
                          >
                            Business Tools
                          </a>
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/income" activeClassName="active">
                              <a
                                style={{ color: "#000856" }}
                                className="nav-link"
                              >
                                Income Calculator
                              </a>
                            </Link>
                          </li>
                          {/* <li className="nav-item">
                                                <Link href="/index2" activeClassName="active">
                                                    <a className="nav-link">Bumppy Business App</a>
                                                </Link>
                                            </li> */}
                          <li className="nav-item">
                            <Link
                              href="/dashboard"
                              activeClassName="active"
                            >
                              <a
                                style={{ color: "#000856" }}
                                className="nav-link"
                              >
                                Analytics Dashboard
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/retailer" activeClassName="active">
                      <a className="nav-link">Retailers</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about-us" activeClassName="active">
                      <a className="nav-link">Company</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/pricing" activeClassName="active">
                      <a className="nav-link">Pricing</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="https://dashboard.bumppy.com/"
                      activeClassName="active"
                    >
                      <a target="_blank" className="nav-link">
                        Login
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="https://dashboard.bumppy.com/register" activeClassName="active">
                      <a
                        target="_blank"
                        className="nav-link"
                        style={{
                          backgroundColor: "#FF8B13",
                          color: "white",
                          textAlign: "center",
                          borderRadius: ".8rem",
                          padding: "4px 1rem",
                          width: "7em",
                        }}
                      >
                        Sign Up
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div className="nav_phone" id="navPhone">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand" href="/">
          
          <img
            style={{ height: "3rem", marginTop: "6px" }}
            src="/images/logo.png"
            alt="logo"
          />
          <img
            style={{
              height: "3rem",
              marginTop: ".3rem",
              marginBottom: ".3rem",
            }}
            src="/images/logo.png"
            alt="logo"
          />
          </a>
        </Link>
        <button
          onClick={this.toggleNavbar}
          className={classTwo}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dr2"
          aria-controls="dr2"
          aria-expanded={!collapsed}
          aria-label="Toggle navigation"
        >
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar middle-bar"></span>
          <span className="icon-bar bottom-bar"></span>
        </button>
      </div>

      <div className={classOne}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/">
              <a
                onClick={this.handleButtonClick}
                className="nav-link"
              >
                Home
              </a>
            </Link>
          </li>
          <li
          //  className="nav-item"
           >
          <a
                         className="nav-link dropdown-toggle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#dr2"
                aria-controls="dr2"
                aria-expanded="false"
                aria-label="Toggle navigation"
                    >
                      Products
                    </a>
              
                    <div className="dr1" id="dr2">
                    
                    <ul 
                    // className="dropdown-menu"
                    >
                      <li 
                      // className="nav-item dropend"
                      >
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Bumppy Services
                        </a>
                        <ul className="dropdown-menu">
                          {/* <li>
                            <a className="dropdown-item" href="/dmt">
                              DMT
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/aeps">
                              AEPS
                            </a>
                          </li> */}
                          {/* <li>
                            <a className="dropdown-item" href="/upi">
                              UPI Payments
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/Gateway">
                              Payment Gateways
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/payout">
                              Payout API
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/aadhar">
                              Aadhaar Pay
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/cms">
                              Cash Management System
                            </a>
                          </li> */}
                          <li>
                            <a className="dropdown-item" href="/bbps">
                              Bill Payment
                            </a>
                          </li>
                          {/* <li>
                            <a className="dropdown-item" href="/recharge">
                              Recharge
                            </a>
                          </li> */}
                        </ul>
                        <li 
                        // className="nav-item dropend"
                        >
                          {/* <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Travel
                          </a> */}
                          {/* <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="/flight">
                                Bumppy Flight
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/bus">
                                Bus Booking
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/irctc">
                                IRCTC Ticket Booking
                              </a>
                            </li>
                          </ul> */}
                          <li 
                          // className="nav-item dropend"
                          >
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Business Tools
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-item" href="/income">
                                  Income Calculator
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="/dashboard">
                                  Analytics Dashboard
                                </a>
                              </li>
                            </ul>
                          </li>
                        </li>
                      </li>
                    </ul>
                    
                    </div>
                    
                  </li>
   <li className="nav-item">
     <a className="nav-link" href="/retailer">
       Retailers
     </a>
   </li>
   <li className="nav-item">
     <a className="nav-link" href="/about-us">
       Company
     </a>
   </li>
   <li className="nav-item">
     <a className="nav-link"  href="/pricing">
      Pricing
     </a>
   </li>

   <li className="nav-item">
     <a
       className="nav-link"
       target="_blank"
       href="https://dashboard.bumppy.com/"
     >
       Login
     </a>
   </li>
   <li className="nav-item">
     <a
       className=" nav-link"
       href="https://dashboard.bumppy.com/register"
       style={{
         backgroundColor: "#FF8B13",
         color: "white",
         textAlign: "center",
         borderRadius: ".8rem",
         marginLeft: "-0.5rem",
         padding: "2px 0.5rem",
         width: "7em",
       }}
     >
     Sign Up
     </a>
   </li>
 </ul>
</div>

</nav>
</div>
      </>
    );
  }
}

export default Navbar;