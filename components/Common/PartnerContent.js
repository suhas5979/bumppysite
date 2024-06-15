import React, { Component } from "react";
import Link from "next/link";

class PartnerContent extends Component {
  render() {
    return (
      <div className="partner-area p-3">
        <div className="container" style={{marginTop:'-1em'}}>
          <div className="section-title">
            <h2>Our trusted partner</h2>
            <div className="bar"></div>
            <p>Celebrate lifetime Payment Experience with our partners.</p>
          </div>

          <div className="partner-inner align-items-center">
            <div className="row justify-content-center ">
              <div
                className="single-partner-item"
                style={{background:'#f4f7fc',display:'flex',alignItems:'center'}}
              >
                <a >
                 
                  <img
                   
                    src="/images/partners/yesbnk.png"
                    alt="Partner"
                  />
                </a>
              </div>

              <div className="single-partner-item">
                <a >
                  <img
                    
                    src="/images/partners/indusindbank.png"
                    alt="Partner"
                  />
                
                </a>
              </div>

              <div className="single-partner-item">
                <a >
                  <img
                   
                    src="/images/partners/fingpay.png"
                    alt="Partner"
                  />
                 
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PartnerContent;
