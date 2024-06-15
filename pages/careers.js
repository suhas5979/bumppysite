import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from 'next/head';

import { Form, FormControl } from "react-bootstrap";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";
import useTranslation from "../utils/useTranslation";
import SliderCareer from "../components/slidercareer";
import CareerTechNews from "../components/CareerTechNews";

const imageUrls = [
  {
    url: "/images1/Vector.jpg",
    text: "Bumppy empowers you to shape your career path",
    text2: "Ramesh, Software Developer",
  },
  {
    url: "/images1/Vector.jpg",
    text: "Bumppy empowers you to shape your career path",
    text2: "Ramesh, Software Developer",
  },
  {
    url: "/images1/Vector.jpg",
    text: "Bumppy empowers you to shape your career path",
    text2: "Ramesh, Software Developer",
  },
  {
    url: "/images1/Vector.jpg",
    text: "Bumppy empowers you to shape your career path",
    text2: "Ramesh, Software Developer",
  },
  {
    url: "/images1/Vector.jpg",
    text: "Bumppy empowers you to shape your career path",
    text2: "Ramesh, Software Developer ",
  },
];

const Careers = () => {
  const router = useRouter();
  const translate = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleMouseEnter = (productName) => {
    setHoveredProduct(productName);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };
  const handleClick = (index) => {
    setSelectedImage(index);
  };

  const getImageStyle = (index) => {
    return {
      height: selectedImage === index ? "" : "30",
      width: selectedImage === index ? "50rem" : "3rem",
      transition: "width 0.5s ease-in-out",
      overflow: "hidden",
    };
  };

  // const getImageContainerStyle = () => {
  //   return {
  //     width: "100%",
  //     height: "100%",
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //   };
  // };

  const getDefaultHeight = (index) => {
    if (index % 2 == 0) return "30rem";

    return "25rem";
  };

  useEffect(() => {
    // Set all images to 10rem initially
    const initialTimeout = setTimeout(() => {
      setSelectedImage(0); // Set selected state to 2 after 5 seconds
    }, 100);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(initialTimeout);
  }, []); // Empty dependency array ensures it runs only on mount

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("your-section-id"); // Replace with the actual ID of your section
      if (section) {
        const sectionRect = section.getBoundingClientRect();
        const isSectionVisible =
          sectionRect.top <= window.innerHeight && sectionRect.bottom >= 0;

        if (isSectionVisible) {
          // Your logic when the section is visible
          setSelectedImage(2); // Set selected state to 2 when the section is visible
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]); // Re-run the effect when the pathname changes

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Upcoming Jobs at Bumppy</title>
        <meta name="description" content="If you are enriched with lots of talent then Bumppy is here 
        to display your talent with vast platform and opportunity. For being part of Bumppy just knock 
        us at careers@bumppy.com."></meta>
        <meta name="description" content="If you are enriched with lots of talent then Bumppy is here to 
        display your talent with vast platform and opportunity. For being part of Bumppy just knock us at careers@bumppy.com."></meta>

        {/* Open Graph meta tags for Twitter */}
        <meta property="og:site_name" content="Bumppy"></meta>
        <meta property="og:type" content="activity"></meta>
        <meta property="og:title" content="Upcoming Jobs at Bumppy"></meta>
        <meta property="og:description" content="If you are enriched with lots of talent then Bumppy is here to display your
         talent with vast platform and opportunity. For being part of Bumppy just knock us at careers@bumppy.com."></meta>
        <meta property="og:url" content="https://www.bumppy.com/careers/"></meta>
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:title" content="Upcoming Jobs at Bumppy"></meta>
        <meta name="twitter:description" content="If you are enriched with lots of talent then Bumppy is here to display 
         your talent with vast platform and opportunity. For being part of Bumppy just knock us at careers@bumppy.com."></meta>
        <meta name="google" content="nositelinkssearchbox"></meta>
      </Head>
      <NavBar />

      <div className="  left-right-padding-jobs bg-yellow ">
        <div className="scrollable-section ">
          <div className="row custom-align d-flex justify-centent-between ">
            <div className="col-12 col-lg-6 custom-align ">
              <p className="font7">
                {translate(`Our greatest achievements are still ahead of us.`)}
              </p>
              <p className="font8">
                {" "}
                {translate(`Follow your passions or explore fresh challenges in an
                environment where you can lead, explore new ideas, and shape the
                future of connectivity.`)}
              </p>
              <Link href="/jobs" passHref>
                <div className=" btn btn-jobs text-white">{translate(`See Jobs`)}</div>
              </Link>
            </div>
            <div className="col-12 col-lg-6  d-flex justify-content-end">
              <div>
                <img
                  className=""
                  //   style={{ height: "20rem" }}
                  src="/images1/First IMG.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="d-none d-lg-flex row custom-align d-flex justify-centent-between pt-2 ">
            <div className="col-12 col-lg-6 custom-align ">
              <p className="font7">
                {translate(`Our greatest achievements are still ahead of us.`)}
              </p>
              <p className="font8">
                {" "}
                {translate(`Follow your passions or explore fresh challenges in an
                environment where you can lead, explore new ideas, and shape the
                future of connectivity.`)}
              </p>
              <Link href="/jobs" passHref>
                <div className=" btn btn-jobs">{translate(`See Jobs`)}</div>
              </Link>
            </div>
            <div className="col-12 col-lg-6  d-flex justify-content-end">
              <div>
                <img className="" src="/images1/Second IMG.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className=" left-right-padding">
          <div className="pt-3">
            <Form inline className="d-flex search-form1-jobs py-4">
              <FormControl
                type="text"
                placeholder="Find jobs"
                className="p-4 custom-input-2-jobs-left  text-dark"
              />
              <FormControl
                type="text"
                placeholder="Location"
                className="p-4 custom-input-2-jobs search-input1-jobs text-dark"
              />
            </Form>
          </div>
        </div>
      </div>
      <div className="left-right-padding">
        <div className="py-5">
          <p className="font6 d-flex justify-content-center">
            {translate(`Encourage Connectivity for a Better Present.`)}{" "}
          </p>
          <p className="d-flex justify-content-center">
            {translate(`Pioneers, game-changers, and visionaries — you’ll discover them all
            at Bumppy.`)}
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-end ">
          {imageUrls.map((imageUrl, index) => (
            <div
              key={index}
              className="mx-1 mx-lg-3 cursor-pointer bg-dark"
              style={{
                ...getImageStyle(index), // Make sure this doesn't conflict with the styles below
                height:
                  selectedImage === index ? "30rem" : getDefaultHeight(index),

                backgroundImage: `url(${imageUrl.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => handleClick(index)}
            >
              <div className="grad-1" style={{ height: "100%" }}>
                {selectedImage === index && (
                  <div className={` transition-opacity `}>
                    <div className="p-5 " style={{ width: "20rem" }}>
                      <div className="font9 pt-5">{imageUrl.text}</div>
                      <div className="py-2 font10">{imageUrl.text2}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`py-5 left-right-padding ${hoveredProduct ? `bg-${hoveredProduct}` : ""
          }`}
      >
        <p className="font6 d-flex justify-content-center">{translate(`What We Build.`)}</p>
        <p className="d-flex justify-content-center">
          {translate(`All our technologies unite for a vision of a more connected world.`)}
        </p>
        <div className="row py-5 col-12">
          <div className="row">
            {/* Bumppy Media */}
            <div className="col-lg-2 col-0 "></div>
            <div
              className={`col-lg-4 col-12 p-4 d-flex justify-content-start bg-hoverable ${hoveredProduct === "media" ? "hovered" : ""
                }`}
              onMouseEnter={() => handleMouseEnter("media")}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className=""
                src="/images1/video-play.png"
                alt=""
                height={30}
                width={30}
              />
              <p className="text-start px-2 font11">{translate(`Bumppy Media`)}</p>
            </div>
            <div className="col-2"></div>

            {/* Bumppy Flights */}
            <div
              className={`col-lg-4 col-12  p-4 d-flex justify-content-start bg-hoverable ${hoveredProduct === "flights" ? "hovered" : ""
                }`}
              onMouseEnter={() => handleMouseEnter("flights")}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className=""
                src="/images1/travel.png"
                alt=""
                height={30}
                width={30}
              />
              <p className="text-start px-2 font11">{translate(`Bumppy Flights`)}</p>
            </div>
          </div>

          {/* Chaafo */}
          <div className="row">
            <div className="col-2"></div>
            <div
              className={`col-lg-4 col-12  p-4 d-flex justify-content-start bg-hoverable ${hoveredProduct === "chaafo" ? "hovered" : ""
                }`}
              onMouseEnter={() => handleMouseEnter("chaafo")}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className=""
                src="/images1/fOOD.png"
                alt=""
                height={30}
                width={30}
              />
              <p className="text-start px-2 font11">{translate(`Chaafo`)}</p>
            </div>
            <div className="col-2"></div>

            {/* Shoppek */}
            <div
              className={`col-lg-4 col-12 p-4 d-flex justify-content-start bg-hoverable ${hoveredProduct === "shoppek" ? "hovered" : ""
                }`}
              onMouseEnter={() => handleMouseEnter("shoppek")}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className=""
                src="/images1/E- commerce.png"
                alt=""
                height={30}
                width={30}
              />
              <p className="text-start px-2 font11">{translate(`Shoppek`)}</p>
            </div>
          </div>

          {/* Bumppy Payment */}
          <div className="row">
            <div className="col-2"></div>
            <div
              className={`col-lg-4 col-12  p-4 d-flex justify-content-start bg-hoverable ${hoveredProduct === "payment" ? "hovered" : ""
                }`}
              onMouseEnter={() => handleMouseEnter("payment")}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className=""
                src="/images1/Payment.png"
                alt=""
                height={30}
                width={30}
              />
              <p className="text-start px-2 font11">{translate(`Bumppy Payment`)}</p>
            </div>
            <div className="col-2"></div>

            {/* Exam Notice */}
            <div
              className={`col-lg-4 col-12  p-4 d-flex justify-content-start bg-hoverable ${hoveredProduct === "exam" ? "hovered" : ""
                }`}
              onMouseEnter={() => handleMouseEnter("exam")}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className=""
                src="/images1/Ed-Tech.png"
                alt=""
                height={30}
                width={30}
              />
              <p className="text-start px-2 font11">{translate(`Exam Notice`)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow1  left-right-padding-10">
        <div className="row  col-12 p-0 m-0 ">
          <div className="col-12 col-lg-4 p-0 m-0 d-flex align-items-center">
            <p className="font6 d-flex justify-content-center">
              {translate(`Building bridges for a connected tomorrow.`)}{" "}
            </p>
          </div>
          <div className="col-12 col-lg-8 p-0 m-0   d-flex align-items-end">
            <img className="" src="/images1/IMG (1).png" alt="" />
          </div>
        </div>
      </div>
      <SliderCareer />

      <CareerTechNews />

      <div className="left-right-padding bg-light-gray py-5">
        <div className="row pt-5">
          <div className="col-12 col-lg-7 d-flex ">
            <p className="p-lg-0 p-3 m-0 single-post-title2">
              {translate(`WORK THAT SHAPES THE FUTURE`)}
            </p>
          </div>

          <div className="col-12 col-lg-5 ">
            <Form inline className="d-flex search-form1-jobs ">
              <FormControl
                type="text"
                placeholder="Find Jobs.."
                className="p-4 custom-input-2-career search-input1-jobs text-dark"
              />
            </Form>
          </div>
        </div>

        <div className="row py-5">
          <div className="col-lg-3 col-12 py-2 ">
            <p className="font-size-1-2-main cursor-pointer">{translate(`Software engineering`)}</p>
          </div>
          <div className="col-lg-3 col-12 py-2 ">
            <p className="font-size-1-2-main cursor-pointer">{translate(`Digital Marketing`)}</p>
          </div>
          <div className="col-lg-3 col-12 py-2 ">
            <p className="font-size-1-2-main cursor-pointer">{translate(`Data & Analytics`)}</p>
          </div>
          <div className="col-lg-3 col-12 py-2 ">
            <p className="font-size-1-2-main cursor-pointer">{translate(`Sales & Marketing`)}</p>
          </div>
          <div className="col-lg-3 col-12 py-2 ">
            <p className="font-size-1-2-main cursor-pointer">{translate(`UI/UX`)}</p>
          </div>
          <div className="col-lg-3 col-12 py-2 ">
            <p className="font-size-1-2-main cursor-pointer">{translate(`Operation`)}</p>
          </div>
          <div className="col-lg-3 col-12 py-2 ">
            <p className="font-size-1-2-main cursor-pointer">{translate(`Technical Program`)}</p>
          </div>
        </div>
      </div>
      <div className="bg-dark-gray py-5 left-right-padding">
        <p
          className="p-0 py-4 m-0 "
          style={{
            color: "#000",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "100",
          }}
        >
          {translate(`Bumppy proudly embraces Equal Employment Opportunity and Affirmative
          Action principles, ensuring non-discrimination based on various
          legally protected characteristics. We welcome qualified applicants
          regardless of background and maintain transparency through accessible
          policies. Additionally, we participate in programs like E-Verify to
          comply with relevant laws.`)}
        </p>

        <p
          className="pb-4 "
          style={{
            color: "#000",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "100",
          }}
        >
          {translate(`Bumppy ensures accommodations for individuals with disabilities and
          disabled veterans during job applications. Contact us for assistance.`)}
        </p>
      </div>
      <div>
        <div className="work"></div>
      </div>
      <Footer />
    </>
  );
};
export default Careers;
