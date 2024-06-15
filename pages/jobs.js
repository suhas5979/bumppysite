import React from "react";
// import JobsTop from "/images1/jobsTop.png"
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";
import { Form, FormControl } from "react-bootstrap";
const jobsArray = [
  {
    title: "React Developer",
    time: "Full Time",
    position: "Intern",
    skills: "React JS, Javascript, Bootstrap, Redux, CSS",
    location: "Noida",
  },
  {
    title: "Full Stack Developer",
    time: "Part Time",
    position: "Junior Developer",
    skills: "Node.js, Express, React JS, MongoDB, CSS",
    location: "Noida",
  },
  {
    title: "UI/UX Designer",
    time: "Contract",
    position: "Designer",
    skills: "Figma, Sketch, Adobe XD, Photoshop, Illustrator",
    location: "Noida",
  },
  {
    title: "Backend Developer",
    time: "Full Time",
    position: "Senior Developer",
    skills: "Node.js, Express, MongoDB, SQL, Docker",
    location: "Noida",
  },
  {
    title: "Data Scientist",
    time: "Full Time",
    position: "Lead",
    skills: "Python, R, SQL, TensorFlow, PyTorch",
    location: "Noida",
  },
];

const Jobs = () => {
  return (
    <>
      <NavBar />
      <div className="bg-yellow-css height-css-100 pb-0 left-right-paddingOnly">
        <div className=" row col-12 p-0  m-0 d-flex  ">
          <div className="col-lg-7 col-12 m-0 p-0 d-flex align-items-center  ">
            <p className="largest-font-size p-lg-0 p-4 ">
              Discover Job Opportunities Aligned with Your Skills and Passions
            </p>
          </div>
          <div className=" col-lg-5 col-12  p-0 m-0 d-flex align-items-end">
            <img
              src="/images1/jobsTop.png "
              alt="jobs"
              // height={500}
              // width={500}
            />
          </div>
        </div>
      </div>

      <div className=" left-right-paddingOnly">
        <Form
          inline
          className="row m-0 px-0 py-lg-4 py-0 d-flex search-form1-jobs-section "
        >
          <div className="col-lg-8 col-12 m-0 p-0 d-flex justify-content-between">
            <FormControl
              type="text"
              placeholder="Location"
              className="p-3  custom-input-2-jobs-section-left  text-dark"
            />
            <FormControl
              type="text"
              placeholder="Department"
              className="p-3  mx-3 custom-input-2-jobs-section-left  text-dark"
            />
            <FormControl
              type="text"
              placeholder="Job Type"
              className="p-3  custom-input-2-jobs-section-left  text-dark"
            />
          </div>
          <div className="col-lg-4 col-12 m-0 p-0">
            <div className="ms-lg-3 ms-0 py-lg-0 py-3">
              <FormControl
                type="text"
                placeholder="Find Jobs"
                className="p-3  custom-input-2-jobs-section search-input1-jobs-section text-dark"
              />
            </div>
          </div>
        </Form>
      </div>

      {jobsArray.map((card, index) => {
        return (
          <div key={card.title} className=" left-right-paddingOnly">
            <div className=" p-3 list-box-jobs">
              <div className="d-flex justify-content-between  align-items-center">
                <div className="font-size-1-2-second py-2">{card.title}</div>
                <div className="font-size-0-9-second py-2">{card.time}</div>
              </div>
              <hr className="my-2 p-0" />
              <div className="font-size-0-9-second-bold py-2">
                {card.position}
              </div>
              <div className=" py-2">
                {" "}
                <span className="font-size-0-9-second-bold">
                  Skill Set :
                </span>{" "}
                <span className="font-size-0-9-second">{card.skills}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center  py-2">
                <div className="  btn-jobs-second text-white px-4 py-2 cursor-pointer">
                  Apply
                </div>
                <div>
                  <img src="/images1/Location_jobs.svg " />
                  <span className="ps-1"> {card.location}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="left-right-padding">
        <p className="largest-font-size text-center ">
          {" "}
          Can't find your dream job?
        </p>
        <p
          className="pb-4 text-center"
          style={{
            color: "#000",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "100",
          }}
        >
          We're always seeking exceptional talent. Send your resume to
          hr@bumppy.com
        </p>
      </div>
      <div className=" bg-yellow-css d-flex left-right-padding">
        <div className="row col-12 p-0 m-0  ">
          <div className="col-lg-5 p-0 m-0 col-12 d-flex justify-content-center align-items-center">
            <p className="largest-font-size p-2 p-lg-0 ">
              Empower through innovative creations we bring to life.
            </p>

            {/* <div className="textContainer">
      <span className="text">Hover over me</span>
      <div className="background"></div>
    </div> */}
          </div>
          <div className="col-lg-1 col-12"></div>
          <div className=" col-lg-4  col-12 p-lg-5 p-2 ">
            {/* Bumppy Media */}
           <div className="textContainer p-0 m-2">
            <div
              className={`text  cursor-pointer col-lg-12 col-12 p-0  d-flex justify-content-start  align-items-center }`}
            >
              <div className=" circular-img-wrapper">
                <img
                  src="/images1/Media (1).svg"
                  alt="Play Video"
                  className="circular-img"
                />
              </div>
              <p className="text-start px-2 font-size-1-2-second ">
                Bumppy Media
              </p>
            </div>
            <div className="background p-0  "></div>
            </div>
            {/* Bumppy Flights */}
            <div className="textContainer p-0 m-2">
            <div
              className={`text  cursor-pointer col-lg-12 col-12   d-flex justify-content-start align-items-center               }`}
            >
              <div className="circular-img-wrapper">
                <img
                  src="/images1/Travel (1).svg"
                  alt="Play Video"
                  className="circular-img"
                />
              </div>
              <p className="text-start px-2 font-size-1-2-second">
                Bumppy Flights
              </p>
            </div>
            <div className="background p-0  "></div>
            </div>
            {/* Chaafo */}
            <div className="textContainer p-0 m-2">
            <div
              className={`text  cursor-pointer col-lg-12 col-12   d-flex justify-content-start align-items-center               }`}
            >
              <div className="circular-img-wrapper">
                <img
                  src="/images1/Food (1).svg"
                  alt="Play Video"
                  className="circular-img"
                />
              </div>
              <p className="text-start px-2 font-size-1-2-second">Chaafo</p>
            </div>
            <div className="background p-0  "></div>
            </div>
            {/* Shoppek */}
            <div className="textContainer p-0 m-2">
            <div
              className={`text  cursor-pointer col-lg-12 col-12  d-flex justify-content-start align-items-center               }`}
            >
              <div className="circular-img-wrapper">
                <img
                  src="/images1/E-Comm (1).svg"
                  alt="Play Video"
                  className="circular-img"
                />
              </div>
              <p className="text-start px-2 font-size-1-2-second">Shoppek</p>
            </div>
            <div className="background p-0  "></div>
            </div>
            {/* Bumppy Payment */}
            <div className="textContainer p-0 m-2">
            <div
              className={`text  cursor-pointer col-lg-12 col-12   d-flex justify-content-start align-items-center               }`}
            >
              <div className="circular-img-wrapper">
                <img
                  src="/images1/Payment (1).svg"
                  alt="Play Video"
                  className="circular-img"
                />
              </div>
              <p className="text-start px-2 font-size-1-2-second">
                Bumppy Payment
              </p>
            </div>
            <div className="background p-0  "></div>
            </div>
            {/* Exam Notice */}
            <div className="textContainer p-0 m-2">
            <div
              className={`text  cursor-pointer col-lg-12 col-12   d-flex justify-content-start align-items-center               }`}
            >
              <div className="circular-img-wrapper">
                <img
                  src="/images1/Ed-Tech (1).svg"
                  alt="Play Video"
                  className="circular-img"
                />
              </div>
              <p className="text-start px-2 font-size-1-2-second">
                Exam Notice
              </p>
            </div>
            <div className="background p-0  "></div>
          </div>
        </div>
      </div>
      </div>
      <div className="  left-right-padding">
        <div className="py-5">
          <p
            className="p-0 py-4 m-0 "
            style={{
              color: "#000",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "100",
            }}
          >
            Bumppy proudly embraces Equal Employment Opportunity and Affirmative
            Action principles, ensuring non-discrimination based on various
            legally protected characteristics. We welcome qualified applicants
            regardless of background and maintain transparency through
            accessible policies. Additionally, we participate in programs like
            E-Verify to comply with relevant laws.
          </p>

          <p
            className="pb-4 "
            style={{
              color: "#000",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "100",
            }}
          >
            Bumppy ensures accommodations for individuals with disabilities and
            disabled veterans during job applications. Contact us for
            assistance.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Jobs;
