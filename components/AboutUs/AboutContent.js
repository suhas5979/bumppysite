import React, { Component } from "react";
import Link from "next/link";

class TeamMember extends Component {
  render() {
    return (
      <section className="team-area  "style={{background:'#f2f2f2'}}>
        <div className="container"style={{marginTop:'-2em'}}>
          <div className="section-title">
            <h2 className="pt-3">Meet our team</h2>
            <div className="bar"></div>
            <p>
              Who are the real people behind all the smoke and mirrors? Meet our
              excellent team, the real minds behind our excellent product.
            </p>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-team-member">
                <div className="member-image">
                  <img src="/images/team/team1.png" alt="Team Image" />
                </div>

                <div className="member-content">
                  <h3>Rajneesh Chhawari</h3>
                  <span>Founder & CEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TeamMember;