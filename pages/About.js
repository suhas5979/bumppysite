import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';

import useTranslation from "../utils/useTranslation";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";

import { FaChevronDown, FaChevronLeft, FaChevronRight, FaChevronUp } from 'react-icons/fa';

// sliderImages
import sliderImg1 from '../public/images/aboutSection/sliderImg1.png';
import sliderImg2 from '../public/images/aboutSection/sliderImg2.png';
import sliderImg3 from '../public/images/aboutSection/sliderImg3.png';


// Product icons

import media from "../public/images/ourProduct/MediaIcon.svg";
import travel from "../public/images/ourProduct/TravelIcon.svg";
import food from "../public/images/ourProduct/FoodIcon.svg";
import payments from "../public/images/ourProduct/PaymentIcon.svg";
import ecom from "../public/images/ourProduct/EComIcon.svg";
import edtech from "../public/images/ourProduct/EdTechIcon.svg";

// Explore Section images

import career from "../public/images1/career.png";
import publisher from "../public/images1/publisher.png";
import contactus from "../public/images1/contactus.png";

const AboutUs = () => {
    const translate = useTranslation();
    const sliderImgArray = [sliderImg1, sliderImg2, sliderImg3]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [currentProductCardIndex, setCurrentProductCardIndex] = useState(0);
    const [currentExploreCardIndex, setCurrentExploreCardIndex] = useState(0);

    const handleLinkClick = (link) => {
        window.open(link, "_blank");
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

    const handleNextProduct = () => {
        setCurrentProductCardIndex((prevIndex) => (prevIndex === productsArray.length - 1 ? 0 : prevIndex + 1)); // If current index is the last card, loop back to the first card
    };

    const handlePrevProduct = () => {
        setCurrentProductCardIndex((prevIndex) => (prevIndex === 0 ? productsArray.length - 1 : prevIndex - 1)); // If current index is the first card, loop back to the last card
    };

    const handleNextExplore = () => {
        setCurrentExploreCardIndex((prevIndex) => (prevIndex === exploreSectionArray.length - 1 ? 0 : prevIndex + 1)); // If current index is the last card, loop back to the first card
    };

    const handlePrevExplore = () => {
        setCurrentExploreCardIndex((prevIndex) => (prevIndex === 0 ? exploreSectionArray.length - 1 : prevIndex - 1)); // If current index is the first card, loop back to the last card
    };

    const toggleAnswer = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % sliderImgArray.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [sliderImgArray.length]);

    const numebricalAnalyticsArray = [
        {
            heading: '10 Million',
            text: 'UNIQUE USERS EVERY MONTH',
            bgColor: '#FEE5EE',
            textColor: '#F9015D'
        },
        {
            heading: '2 Billion',
            text: 'MONTHLY CONTENT VIEWS ACROSS ALL PLATFORMS',
            bgColor: '#F2FBFC',
            textColor: '#00ADC2'
        },
        {
            heading: '50 Million',
            text: 'MONTHLY VIDEO VIEWS',
            bgColor: '#FEF1E5',
            textColor: '#F77701'
        },
        {
            heading: '6 Million',
            text: 'PEOPLE COME TO READ SCOOPWOOP DIRECTLY',
            bgColor: '#EEFBF2',
            textColor: '#66DC83'
        },
        {
            heading: '70% Audience',
            text: 'BETWEEN 18-30 YEARS OLD',
            bgColor: '#EAEBF8',
            textColor: '#2641C2'
        },
        {
            heading: '60% Traffic',
            text: 'IS SOCIAL',
            bgColor: '#FFF8EC',
            textColor: '#FFB341'
        },
        {
            heading: '180 People',
            text: 'ACROSS DELHI AND MUMBAI',
            bgColor: '#FFEFF8',
            textColor: '#FF62BE'
        },
    ]

    const productsArray = [
        {
            icon: payments,
            url: '',
            heading: 'Bumppy Payment',
            text: 'With our lightning-fast electronic transaction system, conduct transactions in seconds. Harness our payment ecosystem to boost your cash flow and expand your business horizons.',
        },
        {
            icon: media,
            url: 'https://accounts.bumppy.com/',
            heading: 'Bumppy Media',
            text: 'Our expertly curated entertainment and lifestyle content keeps you ahead of the curve. From credible articles to captivating stories, we\'re dedicated to connecting with global entertainment and lifestyle enthusiasts.',
        },
        {
            icon: food,
            url: 'https://chaafo.com/',
            heading: 'Chaafo',
            text: 'Beyond food ordering, we offer a comprehensive platform including a website, mobile app, and merchant management app. Don\'t miss out - list your business with us and join the culinary revolution today.',
        },
        {
            icon: travel,
            url: 'https://flights.bumppy.com/',
            heading: 'Trawlo',
            text: 'We\'re all about making flight booking easy, affordable, and stress-free. With just a few clicks, soar to your destination with ease. Experience seamless booking with us- where travel dreams take flight.',
        },
        {
            icon: edtech,
            url: 'https://examsnotice.com/',
            heading: 'Exam Notice',
            text: 'Exam Notice is committed to providing innovative, web-based learning solutions it includes creating and selling online courses and hosting webinars. This comprehensive approach facilitates the dissemination of knowledge.',
        },
        {
            icon: ecom,
            url: 'https://shoppek.bumppy.com/',
            heading: 'Shoppek',
            text: 'We\'re here to offer your business a cutting-edge digital solution, complete with both a dynamic website and a user-friendly app. By partnering with us, you\'ll unlock a world of enhanced user engagement that propels your business to new heights.',
        },
    ]
    const exploreSectionArray = [
        {
            icon: career,
            heading: 'CAREERS',
            buttonText: 'VIEW OPENINGS',
            navigateTo: '/careers',
        },
        {
            icon: publisher,
            heading: 'PUBLISHER',
            buttonText: 'KNOW MORE',
            navigateTo: '',
        },
        {
            icon: contactus,
            heading: 'CONTACT US',
            buttonText: 'SUBMIT YOUR QUERY',
            navigateTo: '/contact-page',
        },
    ]

    const ourValueDropdownArray = [
        {
            img: '',
            heading: "Innovation",
            description: "We constantly seek fresh, inventive solutions for media and business challenges.",
        },
        {
            img: '',
            heading: "Collaboration",
            description: "We believe in working together with our clients and partners to achieve shared success.",
        },
        {
            img: '',
            heading: "Quality",
            description: "Our commitment to excellence ensures that every aspect of our service meets the highest standards.",
        },
        {
            img: '',
            heading: "Customer-Centric",
            description: "We prioritize the needs and satisfaction of our clients, striving to exceed their expectations.",
        },
        {
            img: '',
            heading: "Integrity",
            description: "We uphold honesty, transparency, and ethical principles in all our endeavors.",
        },
        {
            img: '',
            heading: "Transparency",
            description: "Maintaining transparency because your trust in us matters the most.",
        },
    ];

    const handleClick = (url) => {
        window.location.href = { url }; // Replace with the URL of the website you want to navigate to
    };

    return (
        <div classname='d-flex' id='CompanyParent'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>American Celeb News | Celebrity News | Gossip Magazines</title>
                <meta name="description" content="Bumppy provides online entertainment news,articles,videos and posters.
                Bumppy is the fully entertaining platform and given information related to Hollywood and Bollywood."></meta>

                {/* Open Graph meta tags */}
                <meta property="og:site_name" content="Bumppy"></meta>
                <meta property="og:type" content="activity"></meta>
                <meta property="og:title" content="American Celeb News | Celebrity News | Gossip Magazines"></meta>
                <meta property="og:description" content="Bumppy provides online entertainment news,articles,videos and
                 posters.Bumppy is the fully entertaining platform and given information related to Hollywood and Bollywood."></meta>
                <meta property="og:url" content="https://www.bumppy.com/aboutus/"></meta>

                {/* Twitter meta tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@YourTwitterHandle" /> {/* Replace with your Twitter handle */}
                <meta name="twitter:title" content="American Celeb News | Celebrity News | Gossip Magazines" />
                <meta name="twitter:description" content="Bumppy provides online entertainment news, articles, videos, and posters. 
                Bumppy is the fully entertaining platform and gives information related to Hollywood and Bollywood." />

            </Head>
            <NavBar />
            {/* section1 */}
            <section
                className="d-flex justify-content-center align-items-center"
                style={{ backgroundColor: '#ffcc01', height: isSmallScreen ? '' : '', paddingLeft: '10rem', paddingRight: '10rem', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}
                id='aboutSec1Parent'
            >
                <div className="d-flex " style={{ flex: 2 }} id='aboutHeadingSec1Parent'>
                    <span style={{ display: 'flex', fontSize: '2.625rem', fontWeight: 'bold', width: '30vw' }} id='aboutHeadingSec1' >{translate(`India's Start-up Media & Intelligence Platform`)}</span>
                </div>
                <div style={{ flex: 2 }}>
                    <div className="carousel" style={{ width: '100%' }}>
                        <ul style={{ width: `${sliderImgArray.length * 100}%`, transform: `translateX(-${currentImageIndex * (100 / sliderImgArray.length)}%)`, }}>
                            {sliderImgArray.map((image, index) => (
                                <li key={index} style={{ justifyContent: 'center', textAlign: 'center', padding: '1rem' }}><Image src={image} alt={`Image ${index + 1}`} height={600} width={800} /></li>
                            ))}
                        </ul>
                        <style jsx>
                            {`
                            .carousel {
                                width: 50%;
                                overflow: hidden;
                                margin: 0;
                                padding: 0;
                            }
                            .carousel ul {
                                list-style: none;
                                margin: 0;
                                padding: 0;
                                transition: transform 1s ease-in-out;
                            }
                            .carousel li {
                                float: left;
                                width: ${100 / sliderImgArray.length}%;
                            }
                            `}
                        </style>
                    </div>
                    <div className="d-flex justify-content-center">
                        {sliderImgArray.map((image, index) => (
                            <span key={index} className=' mx-2 my-2 d-flex' style={{ backgroundColor: index === currentImageIndex ? '#333' : '', border: '1.5px solid black', padding: '5px', borderRadius: 50, marginTop: isSmallScreen ? '2rem' : '' }}></span>
                        ))}
                    </div>
                </div>
            </section>
            {/* section2 */}
            <section style={{ height: '80%', padding: '3.5rem 10rem' }} id='aboutSec2Parent'>
                <div>
                    <h6 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500', fontSize: "2.625rem", textAlign: 'justify' }}
                        id='headingSec2'
                    >{translate(`ABOUT US`)}
                    </h6>
                    <p
                        style={{
                            lineHeight: '2.5rem', padding: '2rem 0rem 6rem 0rem', fontFamily: 'Poppins, sans-serif',
                            textAlign: 'justify', fontSize: '1.125rem', fontWeigth: '400'
                        }}
                        id='textSec2'
                    >{translate(`Welcome to Bumppy - Where Your Success is Our Passion! Since 2010, we've been on a mission to fuel your 
                    journey with productivity and as a pioneering digital enterprise, we illuminate your brand
                     on the global stage.`)} <br />
                        {translate(`But wait, there's more! Bumppy isn't just about business solutions - we're your portal to the pulse of pop
                     culture and lifestyle trends. Dive into our world and uncover what's hot and happening. Our motto, "Earn, Predict,
                      Prosper," epitomizes our dedication to your growth.`)} <br />
                        {translate(`Join forces with us, and together, let's craft something extraordinary.`)} <br />
                    </p>
                </div>
                <div>
                    <p style={{ fontWeight: '500', fontSize: "1.7rem", textAlign: 'justify' }}
                        id='subHeadingSec2'
                    >{translate(`Bumppy Media In Numbers`)}
                    </p>
                    {isSmallScreen ?
                        <div className="d-flex flex-column " >
                            {numebricalAnalyticsArray.map((array, index) =>
                                <div className="card py-2 px-4 my-2" key={index} style={{ backgroundColor: array.bgColor, borderRadius: 10, }}>
                                    <span className='pb-2' style={{ color: array.textColor, fontSize: '1.5rem' }} >{array.heading}</span>
                                    <span style={{}}>{array.text}</span>
                                </div>)}
                        </div>
                        :
                        <div className="d-flex flex-wrap justify-content-between" style={{ width: '100%' }} >
                            {numebricalAnalyticsArray.map((array, index) =>
                                <div className="card p-4 mb-4" key={index} style={{ backgroundColor: array.bgColor, width: '32%', height: '18vh', borderRadius: 10 }} id='cardsSec2'>
                                    <span className='pb-2' style={{ color: array.textColor, fontSize: '1.5rem' }} id='cardHeadingSec2'>{array.heading}</span>
                                    <span style={{}} id='cardTextSec2'>{array.text}</span>
                                </div>)
                            }
                        </div>
                    }
                </div>
            </section>

            {/* section3 */}
            <section style={{ height: '100%', padding: isSmallScreen ? null : '3.5rem 10rem' }} className="bg-light text-center" id='aboutOurProductSec3Parent'>
                <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500', fontSize: "2.625rem" }} className="py-3"
                    id='headingSec2'
                >{translate(`OUR PRODUCTS`)}
                </h1>
                {isSmallScreen ?
                    <div className="d-flex justify-content-center align-items-center" style={{}}>
                        <div style={{ padding: '0.5rem 0.7rem', backgroundColor: '#F1F1F1', borderRadius: '50%', position: 'relative', zIndex: 2, }}>
                            <FaChevronLeft onClick={handlePrevProduct} style={{ cursor: 'pointer' }} />
                        </div>
                        <div className="d-flex card px-2 my-4 py-3 align-items-center text-start justify-content-between" id='exploreAboutHover' style={{ borderRadius: 15, border: '0.1rem solid lightGrey', width: '200%' }}>
                            <Image src={productsArray[currentProductCardIndex].icon} height={60} width={60} color='black' className="p-2" />
                            <span className='d-flex pb-4 pt-2 text-center' style={{ fontSize: '1.75rem' }} >{productsArray[currentProductCardIndex].heading}</span>
                            <span style={{ padding: '0.5rem', color: '#727272', fontSize: '1.125rem', textAlign: 'center' }} >{productsArray[currentProductCardIndex].text}</span>
                            <div
                                type="button"
                                className=" d-flex px-3 py-2 mt-4 justify-content-center"
                                style={{
                                    backgroundColor: '#181E4B',
                                    fontSize: "0.9rem", color: 'white', textTransform: 'none',
                                    borderRadius: 10, transition: 'background-color 0.3s',
                                    fontFamily: 'Poppins, sans-serif',

                                }}
                                onMouseOver={(e) => {
                                    e.target.style.backgroundColor = 'rgba(255, 204, 1, 1)',
                                        e.target.style.color = '#181E4B'
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.backgroundColor = '#181E4B',
                                        e.target.style.color = 'white'
                                }}
                                id='cardTextSec2'
                                onClick={() => handleLinkClick(productsArray[currentProductCardIndex].url)}
                            >
                                {translate(`Click here`)}</div>
                        </div>
                        <div style={{ padding: '0.5rem 0.7rem', backgroundColor: '#F1F1F1', borderRadius: '50%', position: 'relative', zIndex: 2, }}>
                            <FaChevronRight onClick={handleNextProduct} style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                    :
                    <div className="d-flex flex-wrap justify-content-between">
                        {
                            productsArray.map((array, index) =>
                                <div className="flex-wrap d-flex flex-column card px-3 py-4 my-3 mx-0 align-items-center justify-content-between" key={index} style={{ width: '32%', borderRadius: 15, border: '0.1rem solid lightGrey' }}>
                                    <span classname="d-flex justify-content-cneter pb-4">
                                        <div className=" p-2 d-flex justify-content-center" style={{ borderRadius: 10 }}><Image loading="eager" className='bg-light' src={array.icon} height={50} width={50} color='black' /></div>
                                        <span className='' style={{ fontSize: '1.75rem' }} id='subHeadingSec2'>{array.heading}</span>
                                    </span>
                                    <p style={{ color: '#727272', fontSize: '1.125rem', alignContent: "flex-start", flex: 1 }} id='cardTextSec2' className="pt-2">{array.text}</p>
                                    <div
                                        type="button"
                                        className=" d-flex px-1 py-3 mt-2 justify-content-center"
                                        style={{
                                            backgroundColor: '#181E4B',
                                            fontSize: "1rem", color: 'white', textTransform: 'none',
                                            borderRadius: 10, transition: 'background-color 0.3s',
                                            fontFamily: 'Poppins, sans-serif',
                                            width: '9rem'
                                        }}
                                        onMouseOver={(e) => {
                                            e.target.style.backgroundColor = 'rgba(255, 204, 1, 1)',
                                                e.target.style.color = '#181E4B'
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.backgroundColor = '#181E4B',
                                                e.target.style.color = 'white'
                                        }}
                                        id='cardTextSec2'
                                        onClick={() => handleLinkClick(array.url)}

                                    >{translate(`Click here`)}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                }
            </section>

            <section >
                <div className="d-flex flex-column" style={{ backgroundColor: '#ffcc01', margin: '2.5rem 10rem 2.5rem 10rem', borderRadius: '1rem', }} id='aboutSec4Parent' >
                    <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500', fontSize: "2.625rem", width: '100%' }} className="d-flex py-5 justify-content-center"
                        id='headingSec2'
                    >{translate(`OUR VALUE`)}
                    </h1>
                    {isSmallScreen ?
                        <div className="d-flex flex-wrap justify-content-center pb-5 ">
                            {ourValueDropdownArray.map((array, index) => (
                                <div className="d-flex flex-column justify-content-between align-items-center mb-0"
                                    style={{ width: '90%', margin: '1rem', borderRadius: '0.5rem', transition: 'height 0.5s ease-in-out', backgroundColor: expandedIndex === index ? 'white' : 'none', }} >
                                    <div key={index} onClick={() => toggleAnswer(index)} className="d-flex justify-content-between align-items-center bg-white"
                                        style={{
                                            zIndex: '2', width: '100%', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem',
                                            borderBottomRightRadius: expandedIndex === index ? '0' : '0.5rem', borderBottomLeftRadius: expandedIndex === index ? '0' : '0.5rem'
                                        }}>
                                        <span className='p-3 m-0 d-flex gap-2 align-items-center' style={{ cursor: 'pointer', fontWeight: '200', color: '#1D191F' }}
                                            onClick={() => toggleAnswer(index)} id='aboutDropdownSpan' >
                                            <p className='p-3 mb-0 d-flex align-items-center' style={{ borderRadius: '50rem', background: '#FFF5CC' }}></p>
                                            <p style={{ fontSize: '1.45rem', }} id='aboutDropdownHeading'>{array.heading}</p>
                                        </span>
                                        <div style={{ padding: '0.5rem 0.7rem', margin: 0 }} >
                                            {expandedIndex == index ?
                                                <FaChevronUp onClick={() => toggleAnswer(index)} style={{ cursor: 'pointer', fontSize: '1.5rem', }} />
                                                :
                                                <FaChevronDown onClick={() => toggleAnswer(index)} style={{ cursor: 'pointer', fontSize: '1.5rem', }} />
                                            }
                                        </div>
                                    </div>
                                    <div id='aboutDropdownTextParent' className={expandedIndex == index ? 'expanded-p' : ''} style={{ fontSize: '1.125rem', fontFamily: 'Poppins, sans-serif', borderBottomLeftRadius: '0.5rem', borderBottomRightRadius: '0.5rem', color: '#333', transition: 'height 0.5s ease-in-out', height: 0, overflow: 'hidden', width: '100%', }} >
                                        <p id='aboutDropdownText' className="p-3 mx-3" >{array.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        :
                        <div className="d-flex flex-wrap justify-content-center pb-5 align-items-start">
                            {ourValueDropdownArray.map((array, index) => (
                                <div className="d-flex flex-column justify-content-between align-items-center mb-0 "
                                    style={{ width: '45%', margin: '1rem', borderRadius: '0.5rem', transition: 'height 0.5s ease-in-out', backgroundColor: expandedIndex === index ? 'white' : 'none', }} >
                                    <div key={index} onClick={() => toggleAnswer(index)} className="d-flex justify-content-between align-items-center bg-white"
                                        style={{
                                            zIndex: '2', width: '100%', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem',
                                            borderBottomRightRadius: expandedIndex === index ? '0' : '0.5rem', borderBottomLeftRadius: expandedIndex === index ? '0' : '0.5rem'
                                        }} >
                                        <span className='p-3 m-0 d-flex gap-2 align-items-center' style={{ cursor: 'pointer', fontWeight: '200', color: '#1D191F' }}
                                            onClick={() => toggleAnswer(index)} id='aboutDropdownSpan' >
                                            <p className='p-3 mb-0 d-flex align-items-center' style={{ borderRadius: '50rem', background: '#FFF5CC' }}></p>
                                            <p style={{ fontSize: '1.45rem', }} id='aboutDropdownHeading'>{array.heading}</p>
                                        </span>
                                        <div style={{ padding: '0.5rem 0.7rem', margin: 0 }} >
                                            {expandedIndex == index ?
                                                <FaChevronUp onClick={() => toggleAnswer(index)} style={{ cursor: 'pointer', fontSize: '1.5rem', }} />
                                                :
                                                <FaChevronDown onClick={() => toggleAnswer(index)} style={{ cursor: 'pointer', fontSize: '1.5rem', }} />
                                            }
                                        </div>
                                    </div>
                                    <div id='aboutDropdownTextParent' className={expandedIndex == index ? 'expanded-p flex-1' : 'flex-0'}
                                        style={{
                                            fontSize: '1.125rem', fontFamily: 'Poppins, sans-serif', borderBottomLeftRadius: '0.5rem',
                                            borderBottomRightRadius: '0.5rem', color: '#333', transition: 'height 0.5s ease-in-out', height: 0,
                                            overflow: 'hidden', width: '100%'
                                        }} >
                                        <p id='aboutDropdownText' className="p-3 mx-3" >{array.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </section>
            {/* section5 */}
            <section style={{ height: isSmallScreen ? '' : '90%', padding: isSmallScreen ? null : '3rem 10rem' }} className="text-center " id='aboutExploreParent' >
                <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500', fontSize: "2.625rem", }} className="py-2 mb-5"
                    id='headingSec2'
                >{translate(`EXPLORE`)}
                </h1>
                {isSmallScreen ?
                    <div className="d-flex justify-content-center pb-5 align-items-center " style={{}}>
                        <div style={{ padding: '0.5rem 0.7rem', backgroundColor: '#F1F1F1', borderRadius: '50%', position: 'relative', zIndex: 2 }}>
                            <FaChevronLeft onClick={handlePrevProduct} style={{ cursor: 'pointer' }} />
                        </div>
                        <div className="d-flex flex-column card px-1 p-2 m-1 align-items-center justify-content-center"
                            style={{
                                borderRadius: 15,
                                border: '1.5px solid lightGrey',
                                transition: 'box-shadow 0.3s',
                                boxShadow: 'none', // Initial state of the box-shadow
                            }}
                            id='exploreAboutHover'
                        >
                            <div className="bg-white">
                                <Image loading="eager" src={exploreSectionArray[currentExploreCardIndex]?.icon} className="p-2 bg-white " />
                            </div>
                            <span className='pb-2 pt-2' style={{ fontSize: '1.25rem' }}>{exploreSectionArray[currentExploreCardIndex].heading}</span>
                            <div
                                type="button"
                                className=" d-flex px-3 py-2 mt-2 justify-content-center"
                                style={{
                                    backgroundColor: '#181E4B',
                                    fontSize: "0.9rem", color: 'white', textTransform: 'none',
                                    borderRadius: 10, transition: 'background-color 0.3s',
                                    fontFamily: 'Poppins, sans-serif',
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.backgroundColor = 'rgba(255, 204, 1, 1)',
                                        e.target.style.color = '#181E4B'
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.backgroundColor = '#181E4B',
                                        e.target.style.color = 'white'
                                }}
                            >
                                {exploreSectionArray[currentExploreCardIndex].buttonText}</div>
                        </div>
                        <div style={{ padding: '0.5rem 0.7rem', backgroundColor: '#F1F1F1', borderRadius: '50%', position: 'relative', zIndex: 2 }}>
                            <FaChevronRight onClick={handleNextExplore} style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                    :
                    <div className="d-flex flex-wrap justify-content-between">
                        {
                            exploreSectionArray.map((array, index) =>
                                <div className="d-flex flex-column card p-2 align-items-center justify-content-between" key={index}
                                    style={{
                                        width: '32%',
                                        border: '2px solid lightGrey',
                                        borderRadius: 15,
                                        transition: 'box-shadow 0.3s',
                                        boxShadow: 'none', // Initial state of the box-shadow
                                    }}
                                    id='exploreAboutHover'
                                >
                                    <div className="bg-white">
                                        <Image loading="eager" src={array.icon} height={300} width={300} className="py-2 bg-white " />
                                    </div>
                                    <span className='pb-2 pt-2' style={{ fontSize: '1.75rem' }}>{translate(`${array.heading}`)}</span>
                                    <Link href={array.navigateTo} passHref>
                                        <div
                                            type="button"
                                            className=" d-flex px-4 py-3 mb-4 justify-content-center"
                                            style={{
                                                backgroundColor: '#181E4B',
                                                fontSize: "1rem", color: 'white', textTransform: 'none',
                                                borderRadius: 10, transition: 'background-color 0.3s',
                                                fontFamily: 'Poppins, sans-serif',
                                            }}
                                            onMouseOver={(e) => {
                                                e.target.style.backgroundColor = 'rgba(255, 204, 1, 1)',
                                                    e.target.style.color = '#181E4B'
                                            }}
                                            onMouseOut={(e) => {
                                                e.target.style.backgroundColor = '#181E4B',
                                                    e.target.style.color = 'white'
                                            }}
                                        >
                                            {translate(`${array.buttonText}`)}</div>
                                    </Link>
                                </div>)
                        }
                    </div>
                }
            </section>
            <Footer />
        </div>
    );
};

export default AboutUs;