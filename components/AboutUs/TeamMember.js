import React, { Component } from 'react';
import Link from 'next/link';

class TeamMember extends Component {
    render() {
        return (
         
            <section className="team-area pt-70 pb-50 bg-f7fafd">
                <div className="container">
                    <div className="section-title">
                        <h2>Meet our team</h2>
                        <div className="bar"></div>
                        <p>Who are the real people behind all the smoke and mirrors?
                            Meet our excellent team, the real minds behind our excellent product.
                        </p>
                    </div>

                    <div className="row d-flex justify-content-center" >
                        <div className="col-lg-4 col-md-6">
                            <div className="single-team-member">
                                <div className="member-image">
                                    <img src="/images/team/team1.png" alt="Team Image" />

                                    {/* <ul className="social">
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                    </ul> */}
                                </div>

                                <div className="member-content">
                                    <h3>Rajneesh Chhawari</h3>
                                    <span>Founder & CEO</span>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-md-6">
                            <div className="single-team-member">
                                <div className="member-image">
                                    <img src="/images/team/team2.jpg" alt="Team Image" />

                                    <ul className="social">
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="member-content">
                                    <h3>Raheem Sterling</h3>
                                    <span>Head Manager</span>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-md-6">
                            <div className="single-team-member">
                                <div className="member-image">
                                    <img src="/images/team/team3.jpg" alt="Team Image" />

                                    <ul className="social">
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="member-content">
                                    <h3>Kyle Walker</h3>
                                    <span>Marketing Specialist</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default TeamMember;