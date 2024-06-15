import React, { Component, useEffect, useState, useRef } from "react";
import Image from "next/image";

import useTranslation from "../utils/useTranslation";

//other images
import skill from '../public/images/image1/m1.png'
import career from '../public/images/image1/m2.png'
import tech from '../public/images/image1/m1.png'

//follow Us Icons
import facebook from '../public/images/image1/face_follow.svg'
import linkedin from '../public/images/image1/link_follow.svg'
import instagram from '../public/images/image1/insta_follw.svg'

const ScrollBasedImage = ({ imgUrl }) => {
  
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 }); // You can adjust the threshold as needed

    observer.observe(imageRef.current);

    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ flex: 2, alignItems: 'flex-end', transition: 'height 2s ease-in-out',  height: '200%', bottom: 0}} ref={imageRef} className={isVisible ? 'expanded-img flex-0 d-flex justify-content-center image-container' : 'flex-0 d-flex justify-content-center image-container'}>
      {isVisible && (
        <Image
          className="m-5 pb-0"
          height={450}
          width={400}
          src={imgUrl}
          alt=""
        />
      )}
    </div>
  );
};
const Slider = () => {
  const translate = useTranslation();
  const [expanded, setExpanded]= useState(false)
  const [imageLoaded, setImageLoaded] = useState(false);


  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };

  const sliderArray = [
    {
      id: 'skill',
      date: "01/04",
      heading: "Continuous Learning Culture",
      ImgUrl: skill,
      description:
        "Acquiring and honing skills is the cornerstone of personal and professional development. At our company, we recognize the importance of fostering a culture of continuous learning and skill enhancement. Whether you're a seasoned professional or just starting your career, we provide opportunities for you to expand your skill set, develop new talents, and stay ahead in today's competitive landscape.",
    },
    {
      id: 'career',
      date: "02/04",
      heading: "Rewarding Career Paths",
      ImgUrl: career,
      description:
        "Embark on a rewarding career journey with us and unlock new opportunities for growth and advancement. As a dynamic and forward-thinking company, we offer a wide range of career paths tailored to suit your interests, skills, and aspirations. Whether you're passionate about technology, marketing, finance, or operations, we have a place for you to thrive and excel.",
    },
    {
      id: 'tech',
      date: "03/04",
      heading: "Innovative Technology Solutions",
      ImgUrl: tech,
      description:
        "Dive into the exciting world of technology and innovation with us. As a leader in the tech industry, we are committed to pushing the boundaries of what's possible and driving positive change through cutting-edge solutions. From artificial intelligence and machine learning to blockchain and cybersecurity, we harness the latest technologies to create impactful solutions that transform industries.",
    },
    {
      id: 'follow',
      date: "04/04",
      heading: "Stay Connected with Us",
      Icon1: facebook,
      Icon2: linkedin,
      Icon3: instagram,
      description:
        "Empowering India to transact through Digital Banking. Our better Investment Decisions make Customers Happy. Explore our diverse range of products and services tailored to meet your unique needs. From cutting-edge technology to personalized solutions, we've got you covered.Stay informed with our latest updates and industry insights.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setImageLoaded(true);
        setExpanded(true)
      }
    });
    observer.observe(document.querySelector('.image-container'));

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  useEffect(()=>{
    
  },[])

  return (
    <div className="d-flex " style={{ overflow: 'scroll', overflowY: 'hidden', marginBottom: '-1.2rem', height: '60vh' }}>
      {sliderArray.map((array) =>
        <>
          <div className="d-flex sliderParent" key={array.id} style={{ paddingLeft: array.id=== 'career'?'20rem':'10rem',background: array.id === 'career' ? '#FFCC01' : array.id === 'follow' ? '#FFCC01' : '#F8F9FA' }}>
            <div className=" d-flex flex-column py-5  justify-content-center sliderContent" style={{ textAlign: "start", width: '50vw' }}>
              <p
                className="pb-4 m-0 "
                id='slider-data'
                style={{
                  color: "#000",
                  fontSize: "1.125rem",
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: "400",
                }}
              >
                {array.date}
              </p>
              <p
                className="pb-4 m-0"
                id='slider-head'
                style={{
                  color: "#252525",
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: "2.25rem",
                  fontWeight: "500",
                }}
              >
                {translate(`${array.heading}`)}
              </p>
              <p
                className="pb-4 m-0 "
                id='slider-data'
                style={{
                  color: "#000",
                  fontSize: "1.125rem",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "100",
                }}
              >
                {array.description}
              </p>
              <button
                className="p-0 m-0 mt-1 mt-md-3 read-more-button-slider text-start"
                style={{
                  background: "none",
                  fontSize: "1.125rem",
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                Read More
              </button>
            </div>
            {array.id == 'follow' ?
              <div
                className=" align-items-center justify-content-center d-flex"
                style={{width: '40vw'}}
              >
                <div style={{ marginRight: "2rem", display: 'flex', height: ' 100%' }}>
                  <Image
                    className="follow-icons"
                    height={70}
                    width={70}
                    style={{ transition: "transform 0.9s ease" }}
                    src={array.Icon1}
                    alt=""
                    onClick={() =>
                      handleLinkClick("https://www.facebook.com/BumppyOfficial/")
                    }

                  />
                </div>
                <div style={{ marginRight: "2rem", display: 'flex', height: ' 100%' }}>
                  <Image
                    className="follow-icons"
                    height={70}
                    width={70}
                    style={{ transition: "transform 0.9s ease" }}
                    src={array.Icon2}
                    alt=""
                    onClick={() =>
                      handleLinkClick(
                        "https://www.linkedin.com/company/bumppy/mycompany/"
                      )
                    }
                  />
                </div>
                <div style={{display: 'flex', height: ' 100%' }}>
                  <Image
                    className="follow-icons d-flex"
                    height={70}
                    width={70}
                    style={{ transition: "transform 0.9s ease" }}
                    src={array.Icon3}
                    alt=""
                    onClick={() =>
                      handleLinkClick("https://www.instagram.com/BumppyOfficial/")
                    }
                  />
                </div>
              </div>
              :
              array.id=='skill'?
              <div style={{}} className="d-flex">
              <div style={{ flex: 2, alignItems: 'flex-start', width: '40vw', marginLeft: '10rem'}} className="d-flex justify-content-center ">
                <Image
                  className=" pb-0"
                  height={500}
                  width={400}
                  src={array.ImgUrl}
                  alt=""
                />
              </div>
              <div style={{marginRight: '-12rem',paddingLeft: '5rem'}}> 
                <ScrollBasedImage imgUrl={array.ImgUrl} />
              </div>
              </div>
              :
              <div style={{ width: '40vw', alignItems: array.id === 'career' ? 'flex-end' : 'flex-start', paddingTop: array.id === 'career' && '45rem' }} className="d-flex justify-content-center ">
              <Image
                className="mb-0 pb-0"
                height={array.id === 'career' ? 600 : 500}
                width={array.id === 'career' ? 600 : 450}
                src={array.ImgUrl}
                alt=""
              />
            </div>
            }
          </div>
         
        </>
      )
      }


    </div>
  );
}


export default Slider;