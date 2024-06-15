import React, { useState, useEffect } from "react";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";
import Image from "next/image";
import { useTranslation } from 'react-i18next';

import { FaStar, FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';


// payment collage images
import collageImg1 from '../public/images/companySection/rectangle.svg';
import collageImg2 from '../public/images/companySection/collageImg.svg';

// profile pics
import ramesh from '../public/images/companySection/Ramesh.svg';
import suresh from '../public/images/companySection/Suresh.svg';
import mukesh from '../public/images/companySection/Mukesh.svg';


const company = () => {
  const { t, i18n } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);



  const profilesData = [
    {
      name: "Ramesh",
      position: "Starbucks",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 4,
      profilePic: ramesh
    },
    {
      name: "Suresh",
      position: "Louis Vuitton",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
      profilePic: suresh
    },
    {
      name: "Mukesh",
      position: "McDonald's",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
      profilePic: mukesh
    }
  ];

  const faqs = [
    {
      question: "What kinds of information do we collect?",
      answer: "To provide the Bumppy Products, we must process information about you. The types of information we collect depend on how you use our Products. You can learn how to access and delete information we collect by visiting the Bumppy Settings."
    },
    {
      question: "How do we use this information?",
      answer: "You can track your order by visiting the 'Track Order' page and entering your order details."
    },
    {
      question: "How is this information shared?",
      answer: "To provide the Bumppy Products, we must process information about you. The types of information we collect depend on how you use our Products. You can learn how to access and delete information we collect by visiting the Bumppy Settings."
    },
    {
      question: "How can I manage or delete information about me?",
      answer: "You can track your order by visiting the 'Track Order' page and entering your order details."
    },
    {
      question: "How do we respond to legal requests or prevent harm?",
      answer: "To provide the Bumppy Products, we must process information about you. The types of information we collect depend on how you use our Products. You can learn how to access and delete information we collect by visiting the Bumppy Settings."
    },
    {
      question: "How will we notify you of changes to this policy?",
      answer: "You can track your order by visiting the 'Track Order' page and entering your order details."
    },

  ];

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    // Updating isSmallScreen state based on screen width
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 800);
    };

    handleResize(); // Checking the initial screen width
    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // removing event listener on component unmount
    };
  }, []);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === profilesData.length - 1 ? 0 : prevIndex + 1)); // If current index is the last card, loop back to the first card
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? profilesData.length - 1 : prevIndex - 1)); // If current index is the first card, loop back to the last card
  };

  return (
    <div classname='d-flex' id='CompanyParent'>
      <NavBar />
      {/* section1 */}
      <section
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ backgroundImage: `url('/images/companySection/companySectionBg.svg')`, backgroundSize: 'cover', height: '70vh', }}
      >
        <div className="d-flex gap-3 p-4">
          <h1 className='p-0 m-0 text-white' style={{ fontSize: '2.5rem', fontFamily: 'Poppins, sans-serif' }} id='headingSec1'>About</h1>
          <h1 className='p-0 m-0' style={{ color: "rgba(255, 204, 1, 1)", fontSize: '2.5rem', fontFamily: 'Poppins, sans-serif', }} id='headingSec1'>Company</h1>
        </div>
        <p className='text-white pt-4 text-center' style={{ fontSize: '1.5vw', width: '70vw', fontFamily: 'Poppins, sans-serif' }} id='textSec1'>
          {t(`Since 2010, BUMPPY MEDIA  pioneers digital content creation, specializing
          in engaging articles to elevate brands on social media platforms.`)}</p>
      </section>
      {/* section2 */}
      <section style={{ padding: '5rem 0 ', paddingLeft: '10rem', paddingRight: '10rem' }} id='parentSec2'>
        <h5 className="d-flex justify-content-center font-class pb-4"
          id='headingSec2'
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '300', fontSize: "2vw" }}
        >
          {t(`Mission & Vision`)}
        </h5>
        <div className="d-flex my-5" style={{ justifyContent: 'space-between', gap: '3.6rem' }} id="contentSec2">
          <p className='p-0 align-items-center d-flex flex-grow-1'
            id='textSec2'
            style={{
              width: 500,
              fontSize: "1.2vw",
              lineHeight: "2.5rem",
              fontFamily: 'Poppins, sans-serif',
              color: 'rgb(88, 86, 86)'
            }}
          >{t(`At Bumppy, our mission is to build a robust payment system, facilitating seamless
            transactions for all, especially empowering rural Indians with accessible banking
            services. As we aspire to be India's leading software company, our vision is
            intertwined with our clients' success, a testament to our own progress.`)}
          </p>
          <div className='flex-grow-0 d-flex' style={{ position: 'relative', alignItems: 'center', overflow: 'hidden', height: '30rem' }} id='sec2CollageParent'>
            <div style={{ position: 'absolute', zIndex: -1, display: 'flex' }}>
              <Image height={500} src={collageImg1} />
            </div>
            <div style={{ marginLeft: '3.5rem' }} >
              <Image height={400} style={{ position: 'absolute', width: 'auto' }} src={collageImg2} />
            </div>
          </div>
        </div>
      </section>
      {/* section3 */}
      <section style={{ padding: '5rem 0 ', paddingLeft: '10rem', paddingRight: '10rem' }} className='bg-light' id='parentSec2' >
        <h5 className="d-flex justify-content-center font-class"
          id='headingSec2'
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '300', fontSize: "2vw", paddingBottom: '3rem' }}

        >
          {t(`Customer testimonials`)}
        </h5>
        {isSmallScreen ?
          <div className="d-flex justify-content-center pb-5 align-items-center ">
            <div style={{ padding: '0.5rem 0.7rem', backgroundColor: '#F1F1F1', borderRadius: '50%', position: 'absolute', zIndex: 2, left: 15 }}>
              <FaChevronLeft onClick={handlePrevCard} style={{ cursor: 'pointer' }} />
            </div>
            <div className="card p-4" style={{ maxWidth: '30rem' }}>
              <div className="d-flex align-items-center gap-4">
                <Image src={profilesData[currentCardIndex].profilePic} className="card-img-top" alt="Profile" />
                <div className="d-flex flex-column align-items-start justify-content-start text-start">
                  <span className="d-flex card-title " style={{ fontWeight: '500', fontSize: '1.1rem' }}>{profilesData[currentCardIndex].name}</span>
                  <span className="d-flex card-subtitle " style={{ fontSize: '1.1rem' }}>{profilesData[currentCardIndex].position}</span>
                </div>
              </div>
              <div className="card-body p-0 m-0 py-4">
                <p className="card-text p-0 m-0 py-4"
                  style={{
                    fontSize: "3vw",
                    fontFamily: 'Poppins, sans-serif',
                    color: '#1C1E53',

                  }}>{profilesData[currentCardIndex].text}</p>
                <div style={{ fontSize: '2rem' }}>
                  {Array.from({ length: profilesData[currentCardIndex].rating }, (_, i) => (
                    <FaStar key={i} color="gold" />
                  ))}
                  {Array.from({ length: 5 - profilesData[currentCardIndex].rating }, (_, i) => (
                    <FaStar key={i} color="lightGray" />
                  ))}
                </div>
              </div>
            </div>
            <div style={{ padding: '0.5rem 0.7rem', backgroundColor: '#F1F1F1', borderRadius: '50%', position: 'absolute', zIndex: 2, right: 15 }}>
              <FaChevronRight onClick={handleNextCard} style={{ cursor: 'pointer' }} />
            </div>
          </div>
          :
          <div className="d-flex justify-content-center gap-5">
            {profilesData.map((profile, index) => (
              <div className="card p-5" key={index}>
                <div className="d-flex align-items-center gap-4">
                  <Image src={profile.profilePic} className="card-img-top" alt="Profile" />
                  <div className="d-flex flex-column align-items-start justify-content-start text-start">
                    <span className="d-flex card-title " style={{ fontWeight: '500', fontSize: '1.1rem' }}>{profile.name}</span>
                    <span className="d-flex card-subtitle " style={{ fontSize: '1.1rem' }}>{profile.position}</span>
                  </div>
                </div>
                <div className="card-body p-0 m-0 py-4">
                  <p className="card-text p-0 m-0 py-4"
                    style={{
                      fontSize: "1vw",
                      fontFamily: 'Poppins, sans-serif',
                      color: '#1C1E53',
                      maxWidth: '20rem'
                    }}>{profile.text}</p>
                  <div style={{ fontSize: '2rem' }}>
                    {Array.from({ length: profile.rating }, (_, i) => (
                      <FaStar key={i} color="gold" />
                    ))}
                    {Array.from({ length: 5 - profile.rating }, (_, i) => (
                      <FaStar key={i} color="lightGray" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      </section>
      <section style={{ padding: '5rem 0 ', paddingLeft: '10rem', paddingRight: '10rem' }} id='parentSec4'>
        <h5 className="d-flex justify-content-center font-class"
          id='headingSec2'
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '300', fontSize: "2vw", paddingBottom: '5rem' }}

        >
          {t(`Frequently Asked Questions`)}
        </h5>
        <div className="py-lg-5">
          {faqs.map((faq, index) => (
            <div key={index} onClick={() => toggleAnswer(index)}>
              <div className="d-flex justify-content-between align-items-center mb-0">
                <p className='p-0 mt-4 mb-0' style={{ cursor: 'pointer', fontWeight: '200', fontSize: '1.3rem', color: '#1D191F' }}
                  onClick={() => toggleAnswer(index)} id='faq'>{faq.question}</p>
                <div style={{ padding: '0.5rem 0.7rem', backgroundColor: '#F1F1F1', borderRadius: '50%', margin: 0 }} id='faqIcon-n' >
                  <FaChevronDown onClick={() => toggleAnswer(index)} style={{ cursor: 'pointer', backgroundColor: '#F1F1F1' }} />
                </div>
              </div>
              {expandedIndex === index && (
                <p style={{ marginTop: '0.5rem', color: '#333' }} id='textSec4'>{faq.answer}</p>
              )}
              <hr style={{ color: 'grey' }} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default company;
