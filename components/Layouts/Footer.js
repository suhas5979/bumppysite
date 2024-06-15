// import React, { Component } from 'react';
// import Link from 'next/link';

// class Footer extends Component {
//     render() {
//         let currentYear = new Date().getFullYear();
//         return (
//             <footer className="footer-area">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-3 col-sm-6 col-md-6">
//                             <div className="single-footer-widget">
//                                 <div className="logo">
//                                     <Link href="/">
//                                         <a><img src="/images/logo.png" alt="logo" /></a>
//                                     </Link>
//                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
//                                 </div>

//                                 <ul className="social-links">
//                                     <li>
//                                         <a href="https://www.facebook.com/" target="_blank">
//                                             <i className="fab fa-facebook-f"></i>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="https://twitter.com/" target="_blank">
//                                             <i className="fab fa-twitter"></i>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="https://www.instagram.com/" target="_blank">
//                                             <i className="fab fa-instagram"></i>
//                                         </a>
//                                     </li>
//                                     <li>
//                                         <a href="https://www.linkedin.com/" target="_blank">
//                                             <i className="fab fa-linkedin-in"></i>
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>

//                         <div className="col-lg-3 col-sm-6 col-md-6">
//                             <div className="single-footer-widget pl-5">
//                                 <h3>Company</h3>

//                                 <ul className="list">
//                                     <li>
//                                         <Link href="/about-us">
//                                             <a>About Us</a>
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="#">
//                                             <a>Services</a>
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/features-one">
//                                             <a>Features</a>
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/pricing">
//                                             <a>Our Pricing</a>
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/blog-one">
//                                             <a>Latest News</a>
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>

//                         <div className="col-lg-3 col-sm-6 col-md-6">
//                             <div className="single-footer-widget">
//                                 <h3>Support</h3>

//                                 <ul className="list">
//                                     <li>
//                                         <Link href="/faq">
//                                             <a>FAQ's</a>
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/privacy-policy">
//                                             <a>Privacy Policy</a>
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/terms-condition">
//                                             <a>Terms & Condition</a>
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="#">
//                                             <a>Community</a>
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/contact">
//                                             <a>Contact Us</a>
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>

//                         <div className="col-lg-3 col-sm-6 col-md-6">
//                             <div className="single-footer-widget">
//                                 <h3>Address</h3>

//                                 <ul className="footer-contact-info">
//                                     <li>
//                                         <span className="mr-1">Location:</span>
//                                         27 Division St, New York, <br /> NY 10002, USA
//                                     </li>
//                                     <li>
//                                         <span className="mr-1">Email:</span>
//                                         info@haiper.com
//                                     </li>
//                                     <li>
//                                         <span className="mr-1">Phone:</span>
//                                         + (321) 984 754
//                                     </li>
//                                     <li>
//                                         <span className="mr-1">Fax:</span>
//                                         +1-212-9876543
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="copyright-area">
//                         <p>© {currentYear} Haiper - All rights Reserved <a href="http://envytheme.com/" target="_blank">EnvyTheme.com</a></p>
//                     </div>
//                 </div>
//             </footer>
//         );
//     }
// }

// export default Footer;

import React, { Component } from "react";
import Link from "next/link";
import AccountCreateArea from "../Common/AccountCreateArea";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <>
        <div style={{ backgroundColor: "#f2f2f2" }}>
          <div className="services-area ptb-70 p-0">
            <div className="container-fluid p-0">
              <div className="overview-box">
                <div className="overview-content">
                  <div className="content left-content" style={{marginTop:'1em'}}>
                    <div
                      className="head13"
                   >
                      {" "}
                      Download Bumppy Payments App now{" "}
                    </div>
                    
        
                    <br></br>
                    <p className="retail1" >
                      Use Bumppy Payments & grow your business
                    </p>
                  <div className="row">
                  <div className="form-group ">
                      <select  className="number" style={{ width: '4rem', height: "2.5rem"  }}>
                        <option value="">+91</option>
                        <option value="AX">+1</option>
                      </select>&nbsp;
                      <input
                        style={{ height: "2.5rem",border:'none' }}
                        className="number"
                        type="phone"
                        placeholder="Enter Phone No."
                        name="phone"
                      />
                    </div>
                  </div>
                   
                    &nbsp;

                    {/* <Link href="https://play.google.com/store/apps/details?id=com.app.bumppypayments">
                   
                    <a  target="_blank">
                    <img
                        style={{ height: "2.6rem",margin:'12px',marginLeft: '-0.2rem' }}
                        src="/images/sub.png"
                        className="play_btn"
                       
                     />
                    </a>
                                </Link> */}
                  
                    &nbsp;
                    <Link
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.app.bumppypayments"
                   
                    >
                    <a  target="_blank">
                    <img
                        style={{ height: "2.6rem",margin:'12px',marginLeft: '-0.2rem'}}
                        src="/images/google_play.png"
                        alt="google play"
                        className="play_btn"
                       
                     />
                    </a>
                     
                    </Link>
                  </div>
                </div>
                <div className="overview-image">
                  <div className="image">
                    <img
                      src="../images/Bumppy_footer.png"
                      alt="Bumppy fotter"
                      style={{
                        height: "auto",
                        width: "auto",
                      }}
                    />
                    <div className="circle-img">
                      {/* <img src="/images/circle.png" alt="image" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AccountCreateArea />
        <footer className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="single-footer-widget">
                  <div className="logo">
                    <Link href="/">
                      <a>
                        <img className="footimg" src="/images/logo_2.png" alt="logo" />
                      </a>
                    </Link>
                    <p>
                      Empowering India to transact through Digital Banking.Our
                      better Investment Decisions make Customers Happy.
                    </p>
                  </div>
                  <ul className="social-links ">
                    <li>
                      <a
                        href="https://www.facebook.com/Bumppy Paymentsments?mibextid=ZbWKwL"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/BumppyOfficial?t=mwRTh4QryiIIdFvIayKyew&s=08"
                        target="_blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/Bumppy_Payments/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/Bumppy/"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="single-footer-widget pl-5">
                  <h3>Company</h3>

                  <ul className="list">
                    <li>
                      <Link href="/about-us">
                        <a>About Us</a>
                      </Link>
                    </li>
                    {/* <li>
                                        <Link href="#">
                                            <a>Services</a>
                                        </Link>
                                    </li> */}
                    
                    <li>
                      <Link href="/pricing">
                        <a>Our Pricing</a>
                      </Link>
                    </li>
                    {/* <li>
                                        <Link href="/blog-one">
                                            <a>Latest News</a>
                                        </Link>
                                    </li> */}
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="single-footer-widget">
                  <h3>Support</h3>

                  <ul className="list">
                    <li>
                      <Link href="/faq">
                        <a>FAQ's</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-condition">
                        <a>Terms & Condition</a>
                      </Link>
                    </li>
                    {/* <li>
                                        <Link href="#">
                                            <a>Community</a>
                                        </Link>
                                    </li> */}
                    <li>
                      <Link href="/contact">
                        <a>Contact Us</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-md-6">
                <div className="single-footer-widget">
                  <h3>Address</h3>

                  <ul className="footer-contact-info">
                    <li>
                      <a
                        href="https://goo.gl/maps/Nrwe5TeZpsut9ivP9"
                        target="_blank"
                      >
                        {" "}
                        BUMPPY MEDIA PVT LTD <br />
                        B-218 Ithum Tower
                        <br /> Second Floor <br />
                        Sector-62, Noida, 201301
                      </a>
                    </li>
                    <li>
                      <a href="mailto:support@bumppy.com">
                        {" "}
                        Mail:support@bumppy.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+91 81-300-96176">
                        {" "}
                        Phone: +91 81-300-96176
                      </a>
                    </li>
                    <li>
                      <a href="tel:+91 81-300-96176">Fax : +91 81-300-96176</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="copyright-area">
              <p>© {currentYear} Bumppy - All rights Reserved</p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
