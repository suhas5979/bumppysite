import React, { Component } from "react";

class Followus extends Component {
  render() {
    return (
      <>
        <div
          className=" "
          style={{ background: "#ffcc01", overflow: "hidden" }}
        >
          <div className="px-md-5 p-3 mt-md-4 mt-2">
            <h3 style={{ color: "#000" }}> Follow Us</h3>
          </div>

          <div className="row px-md-3 px-3 mb-md-3 mb-2">
            <div className="col px-md-5 p-3">
              <p style={{ color: "#000", fontSize: "1rem", fontWeight: "400" }}>
                Empowering India to transact through Digital Banking.Our better
                Investment Decisions make Customers Happy.
              </p>
            </div>
            <div className="col d-flex  justify-content-center">
              <div style={{ marginRight: "2rem" }}>
                <img
                  style={{ height: "2rem" }}
                  src="/images/image1/insta.png"
                  alt=""
                />
              </div>
              <div style={{ marginRight: "2rem" }}>
                <img
                  style={{ height: "2rem" }}
                  src="/images/image1/face.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  style={{ height: "2rem" }}
                  src="/images/image1/link.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Followus;