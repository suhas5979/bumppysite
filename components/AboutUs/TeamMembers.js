import React from "react";

const members = [
  { image: "/images/team/Suhas.png", name: "Scott Tiger" },
  { image: "/images/team/Adhana (1).jpg", name: "Daenerys Targaryen" },
  
  { image: "/images/team/varshant.png", name: "Lucifer Morningstar" },
  
  { image: "/images/team/Shivani (2).png", name: "Natasha Romanoff" },
  { image: "/images/team/abhijeet.png", name: "Technocrat" },
  { image: "/images/team/hemant.png", name: "Naruto" },
  { image: "/images/team/Deepak.png", name: "Demigod" },
  { image: "/images/team/sumit.jpg", name: "MSD" },
  { image: "/images/team/varshika.png", name: "Wanda" },
  { image: "/images/team/ramjan (1).png", name: "Elvis Costello" },
 { image: "/images/team/nishant (1).png", name: "Tony Stark" },
  { image: "/images/team/Naveen.jpg", name: "Aryan kathi" },
];

const TeamMembers = () => {
  return (
    <div>
      <section id="team" className="team section-bg">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            {/* <h2 className='mt-5'>Our  Team</h2> */}
          </div>

          <div className="row">
            {members.map((employee) => (
              <TeamCard image={employee.image} name={employee.name} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const TeamCard = ({ image, name, designation }) => {
  return (
    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
      <div className="member" data-aos="fade-up" data-aos-delay="100">
        <div className="member-img">
          <img src={image} className="img-fluid" alt="" />
          {/* <div className="social">
            <a href="">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="">
              <i className="fab fa-instagram-square"></i>
            </a>
            <a href="">
              <i className="fab fa-linkedin-square"></i>
            </a>
          </div> */}
        </div>
        <div className="member-info">
          <h4>{name}</h4>
          {designation && <span>Chief Executive Officer</span>}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
