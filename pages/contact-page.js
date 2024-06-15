import React, { useState, useEffect } from "react";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";
import Image from "next/image";
import useTranslation from "../utils/useTranslation";
import Head from 'next/head';

// sliderImages
import sliderImg1 from '../public/images/aboutSection/sliderImg1.png';
import sliderImg2 from '../public/images/aboutSection/sliderImg2.png';
import sliderImg3 from '../public/images/aboutSection/sliderImg3.png';

// payment collage images
import collageImg1 from '../public/images/aboutSection/purpleRectangle.svg';
import collageImg2 from '../public/images/aboutSection/imgSec2.svg';

import collageImg3 from '../public/images/aboutSection/greenRectangle.svg';
import collageImg4 from '../public/images/aboutSection/imgSec3.svg';


import { FaStar, FaChevronDown, FaChevronLeft, FaChevronRight, FaChevronUp } from 'react-icons/fa';

import contact_1 from "../public/images1/contactSec1.png";

import address from "../public/images1/address.svg";
import call from "../public/images1/call.svg";
import mail from "../public/images1/mail.svg";
import mapImage from "../public/images1/map.png";

const ContactUs = () => {
    const translate = useTranslation();
    // const sliderImgArray = [sliderImg1, sliderImg2, sliderImg3]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [currentProductCardIndex, setCurrentProductCardIndex] = useState(0);
    const [currentExploreCardIndex, setCurrentExploreCardIndex] = useState(0);

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

    const productsArray = [
        {
            heading: 'Want To Work With Bumppy',
            text: 'Hey! You want to work with us, then just mail us along with your expertise area, experience if any and also mention your place also.',
        },
        {
            heading: 'Want To Write For Bumppy',
            text: 'Hey! You want to write content for Bumppy, then our inbox is waiting for your message, drop a mail or even you can click here.',
        },
        {
            heading: 'Explore Advertisement On Bumppy',
            text: 'For explore more and more advertisement on bumppy and become partner with us just drop a mail or even you can click here.',
        },
        {
            heading: 'Clear Out Editorial Enquiries',
            text: 'Having some editorial enquires and wants to get in touch with us, then just write down a mail',
        },
        {
            heading: 'For Further Queries',
            text: 'Anything else or some other queries are running in your mind, then never forget to write us at Hello@Bumppy.com',
        },
    ]
    const contactArray = [
        {
            icon: address,
            heading: 'Address',
            text: 'Address Ithum Tower, Tower-B, 218, Second Floor Sector 62 Noida-201309',
        },
        {
            icon: call,
            heading: 'Phone number',
            text: '+91 8120-420234 ',
            text2: '+91 8120-420235',
        },
        {
            icon: mail,
            heading: 'Email',
            text: 'Hello@Bumppy.com',
        },

    ]

    return (
        <div classname='d-flex' id='CompanyParent'>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Bumppy Contact | Entertainment News</title>
                <meta name="description" content="Want To Work With Bumppy Hey! You want to 
              work with us, then just mail us at hello@bumppy.com along with your expertise 
              area, experience if any and also mention your place also. Want To Write For 
              Bumppy Hey! You want to write content for Bumppy, then our inbox is waiting 
              for your message, drop a"></meta>


                <meta property="og:site_name" content="Bumppy"></meta>
                <meta property="og:type" content="activity"></meta>
                <meta property="og:title" content="Bumppy Contact | Entertainment News"></meta>
                <meta property="og:description" content="Want To Work With Bumppy Hey! You want to work with us,
               then just mail us at hello@bumppy.com along with your expertise area, experience if any and also mention 
               your place also. Want To Write For Bumppy Hey! You want to write content for Bumppy, then our inbox is waiting 
               for your message, drop a"></meta>
                <meta property="og:url" content="https://www.bumppy.com/contact-page/"></meta>


                <meta name="twitter:card" content="summary"></meta>
                <meta name="twitter:title" content="Bumppy Contact | Entertainment News"></meta>
                <meta name="twitter:description" content="Want To Work With Bumppy Hey! You want to work with us,
 then just mail us at hello@bumppy.com along with your expertise area, experience if any and also mention 
 your place also. Want To Write For Bumppy Hey! You want to write content for Bumppy, then our inbox is waiting
  for your message, drop a"></meta>
                <meta name="google" content="nositelinkssearchbox"></meta>


            </Head>
            <NavBar />
            {/* section1 */}
            <section
                className=" d-flex"
                style={{ backgroundColor: 'gold', paddingLeft: '10rem', }}
                id='aboutSec1Parent'
            >
                <span className='text-start d-flex align-items-center' style={{ display: 'flex', fontSize: '2.625rem', width: '45vw', fontWeight: 'bold', position: 'relative' }} id='aboutHeadingSec1' >
                    {translate(` Discover Exciting Opportunities: Join The Bumppy Team And Be A Part Of Something Truly Great!`)}
                </span>
                <div className="align-items-end justify-content-end d-flex" style={{ position: 'relative', bottom: 0, right: 0, marginTop: '5rem', width: '100%' }} id='aboutSec1Img'>
                    <Image src={contact_1} height={800} width={1200} />
                </div>
            </section>
            {/* section2 */}
            <section style={{ padding: '3.5rem 10rem' }} className="bg-light" id='aboutSec2Parent'>
                <div>
                    <h6 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500', fontSize: "2.625rem", textAlign: 'justify' }}
                        id='headingSec2'
                    >{translate(`Contact Us`)}
                    </h6>
                    <p
                        style={{
                            lineHeight: '2.5rem', padding: '2rem 0rem 2rem 0rem', fontFamily: 'Poppins, sans-serif',
                            textAlign: 'justify', fontSize: '1.175rem', fontWeigth: '400'
                        }}
                        id='textSec2'
                    >{translate(`Bumppy: Igniting creativity, forging connections since 2010! Join our dynamic platform where
 blogging meets social networking, uniting diverse minds, fostering friendships, and sparking
 inspiration! Dive into a world where every post is a piece of art, every comment a conversation,
 and every connection a chance to explore the endless possibilities of expression.`)}<br />
                    </p>
                </div>

            </section>

            {/* section3 */}
            <section style={{ height: '100%', padding: '2rem 9rem 2rem 9rem', marginTop: '2rem', marginBottom: '2rem' }} className=" text-center justify-content-center d-flex align-items-center" id='contactUsSec3' >
                {isSmallScreen ?
                    <div className="d-flex justify-content-center align-items-center" style={{ margin: '-2rem -9rem' }}>
                        <div style={{ padding: '0.5rem 0.7rem', backgroundColor: '#F1F1F1', borderRadius: '50%', position: 'relative', zIndex: 2, }}>
                            <FaChevronLeft onClick={handlePrevProduct} style={{ cursor: 'pointer' }} />
                        </div>
                        <div className="d-flex card px-4 my-4 py-5 align-items-center text-start justify-content-between" id='exploreAboutHover' style={{ borderRadius: 15, border: '0.1rem solid lightGrey', width: '100%' }}>
                            <span className='d-flex pb-4 pt-2 text-center' style={{ fontSize: '1.75rem' }} >{productsArray[currentProductCardIndex].heading}</span>
                            <span style={{ color: '#727272', fontSize: '1.125rem', textAlign: 'center' }} >{productsArray[currentProductCardIndex].text}</span>
                        </div>
                        <div style={{ padding: '0.5rem 0.7rem', backgroundColor: '#F1F1F1', borderRadius: '50%', position: 'relative', zIndex: 2, }}>
                            <FaChevronRight onClick={handleNextProduct} style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                    :
                    <div className="d-flex" style={{ overflow: 'hidden' }}>
                        <div className="d-flex webkit flex-column " style={{ flex: 1, marginRight: '2rem', padding: '1rem', overflowY: 'scroll', height: '750px' }} >
                            {
                                productsArray.map((array, index) =>
                                    <div className="d-flex flex-column card px-5 py-4 my-3 mx-0 align-items-start text-start justify-content-start" id='exploreAboutHover' key={index} style={{ borderRadius: 15, border: '0.1rem solid lightGrey' }}>
                                        <span className='d-flex pb-4 pt-2 text-start' style={{ fontSize: '1.75rem' }} id='subHeadingSec2'>{array.heading}</span>
                                        <p style={{ color: '#727272', fontSize: '1.125rem', textAlign: 'start' }} id='cardTextSec2'>{array.text}</p>
                                    </div>)
                            }
                        </div>
                        <div style={{ borderLeft: '1px solid grey', flex: 1, height: '750px' }} className=" text-start">
                            <h5 className="text-start px-4 " style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '300', fontSize: '2vw' }} id='headingSec2'>
                                {translate(`Get in Touch`)}
                            </h5>
                            <div className="bg-white" style={{ paddingLeft: '2rem' }} >
                                <div className=" justify-content-center d-flex flex-column">
                                    <div className="mt-3 flex-grow-1">
                                        <input type="text" className="form-control d-flex" id="firstName" placeholder='First Name' style={{ border: '0.09rem solid lightGrey', borderRadius: 10 }} />
                                    </div>
                                    <div className="mt-3 flex-grow-1">
                                        <input type="text" className="form-control d-flex" id="lastName" placeholder='Last Name' style={{ border: '0.09rem solid lightGrey', borderRadius: 10 }} />
                                    </div>
                                    <div className="mt-3 flex-grow-1">
                                        <input type="email" className="form-control d-flex" id="email" placeholder='Email' style={{ border: '0.09rem solid lightGrey', borderRadius: 10 }} />
                                    </div>
                                    <div className="mt-3 flex-grow-1">
                                        <input type="number" className="form-control d-flex" id="phoneNumber" placeholder='Phone Number' style={{ border: '0.09rem solid lightGrey', borderRadius: 10, fontFamily: 'Poppins, sans-serif' }} />
                                    </div>
                                    <div className="mt-3 ">
                                        <select className="form-select form-control " id="dropdown" value='Choose a topic' style={{ border: '0.09rem solid lightGrey', borderRadius: 10, fontFamily: 'Poppins, sans-serif' }} >
                                            <option value="option1">{translate(`Option 1`)}</option>
                                            <option value="option2">{translate(`Option 2`)}</option>
                                            <option value="option3">{translate(`Option 3`)}</option>
                                        </select>
                                    </div>
                                    <div className="mt-3 ">
                                        <textarea className="form-control " style={{ height: '15vh', border: '0.09rem solid lightGrey', borderRadius: 10, fontFamily: 'Poppins, sans-serif' }} id="message" rows="9" placeholder="Message" ></textarea>
                                    </div>
                                    <div className=" mt-3 form-check align-items-center justify-content-between d-flex gap-2">
                                        <div>
                                            <input className="form-check-input " type="checkbox" id="checkbox" style={{ border: '1.5px solid grey', padding: '0.5rem', borderRadius: 5, marginRight: '0.5rem' }} />
                                            <label className="form-check-label text-black" htmlFor="checkbox" style={{ fontFamily: 'Poppins, sans-serif' }}>I accept the terms</label>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button className="text-white m-0 "
                                                style={{ paddingRight: '2.3rem', paddingLeft: '2.3rem', paddingTop: '0.7rem', paddingBottom: '0.7rem', backgroundColor: '#181E4B', borderRadius: 10, fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', fontWeight: '500' }}
                                            >{translate(`Submit`)}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </section>
            {isSmallScreen &&
                <section id="contactUs" style={{ backgroundColor: '#F5F5F5', padding: '5rem 20rem' }}>
                    <h5 className="text-center pb-4 " style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '300', fontSize: '2vw' }} id='headingSec2'>
                        {translate(`Get in Touch`)}
                    </h5>
                    <div className="bg-white p-4" style={{ boxShadow: "0 2px 4px 0 rgba(0,0,0,0.1)", borderRadius: '1rem' }}>
                        <div className=" justify-content-center d-flex flex-column">
                            <div className="mt-3 flex-grow-1">
                                <input type="text" className="form-control d-flex" placeholder='First Name' id="firstName" style={{ border: '0.09rem solid lightGrey', borderRadius: '1.9vw' }} />
                            </div>
                            <div className="mt-3 flex-grow-1">
                                <input type="text" className="form-control d-flex" placeholder='Last Name' id="lastName" style={{ border: '0.09rem solid lightGrey', borderRadius: '1.9vw' }} />
                            </div>
                            <div className="mt-3 flex-grow-1">
                                <input type="email" className="form-control d-flex" placeholder='Email' id="email" style={{ border: '0.09rem solid lightGrey', borderRadius: '1.9vw' }} />
                            </div>
                            <div className="mt-3 flex-grow-1">
                                <input type="number" className="form-control d-flex" placeholder='Phone Number' id="phoneNumber" style={{ border: '0.09rem solid lightGrey', borderRadius: '1.9vw', fontFamily: 'Poppins, sans-serif' }} />
                            </div>
                            <div className="mt-3 ">
                                <select className="form-select form-control " id="dropdown" placeholder='choose a topic' style={{ border: '0.09rem solid lightGrey', borderRadius: '1.9vw', fontFamily: 'Poppins, sans-serif' }} >
                                    <option value="option1">{translate(`Option 1`)}</option>
                                    <option value="option2">{translate(`Option 2`)}</option>
                                    <option value="option3">{translate(`Option 3`)}</option>
                                </select>
                            </div>
                            <div className="mt-3 ">
                                <textarea className="form-control " style={{ height: '15vh', border: '0.09rem solid lightGrey', borderRadius: '1.9vw', fontFamily: 'Poppins, sans-serif' }} id="message" rows="9" placeholder="Message" ></textarea>
                            </div>
                            <div className=" mt-3 form-check align-items-center justify-content-between d-flex gap-2">
                                <div className="align-items-center d-flex">
                                    <input className="form-check-input " type="checkbox" id="checkbox" style={{ border: '1.5px solid grey', padding: '0.5rem', borderRadius: 5, marginRight: '0.5rem' }} />
                                    <label className="form-check-label text-black" htmlFor="checkbox" style={{ fontFamily: 'Poppins, sans-serif' }}>{translate(`I accept the terms`)}</label>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button className="text-white m-0 "
                                        style={{ paddingRight: '1.5rem', paddingLeft: '1.5rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', backgroundColor: '#181E4B', borderRadius: 10, fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem', fontWeight: '500' }}
                                    >{translate(`Submit`)}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
            <section style={{ paddingLeft: '10rem', paddingRight: '10rem', paddingTop: '2rem', paddingBottom: '2rem', background: 'gold', display: 'flex' }} id='parentSec2'>
                <div className="d-flex flex-grow-1 my-0 align-items-center" style={{}} id="contentSec2">
                    <div className=' align-items-start justify-content-center d-flex flex-grow-1'
                        id='aboutHeadingSec1'
                        style={{
                            width: '60%',
                            paddingRight: '5rem',
                            fontSize: '2.625rem',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 'bold'
                        }}
                    >
                        {translate(`Bumppy: Your Trusted Partner for Outstanding 24/7 Service, Consistently Exceeding Expectations!`)}
                    </div>
                    <div className='d-flex flex-grow-1' >
                        <Image height={400} src={collageImg1} />
                        <Image height={500} src={collageImg2} />
                    </div>
                </div>
            </section>
            {isSmallScreen ?
                <section style={{}} id='addressSec5'>
                    <div className="d-flex webkit flex-column justify-content-between align-items-center my-2" id='addressSec5Child' style={{ flex: 1, overflowY: 'scroll' }}>
                        {
                            contactArray.map((array, index) =>
                                <div className="d-flex flex-column card px-2 my-2 py-2 align-items-center text-center justify-content-center" id='exploreAboutHover' key={index} style={{ borderRadius: 15, border: '0.1rem solid lightGrey', width: '90vw', height: '30vh' }}>
                                    <Image src={array.icon} height={60} width={60} style={{ borderRadius: 10 }} color='black' className="p-2 bg-light" />
                                    <span className='d-flex pb-4 pt-2' style={{ fontSize: '1.75rem' }} >{array.heading}</span>
                                    <span style={{ color: '#727272', fontSize: '1.125rem' }} >{array.text}</span>
                                    <span style={{ color: '#727272', fontSize: '1.125rem' }} >{array.text2 || null}</span>
                                </div>)
                        }
                    </div>
                </section>
                :
                <section style={{ paddingLeft: '9rem', paddingRight: '9rem' }} id='addressSec5'>
                    <div className="d-flex webkit justify-content-start my-5 py-4" style={{ flex: 1, overflowY: 'scroll', gap: 30, paddingRight: '1rem', paddingLeft: '1rem' }} id='addressSec5Child'>
                        {
                            contactArray.map((array, index) =>
                                <div className="d-flex card px-4 m-2 py-4 align-items-center text-start justify-content-between" id='exploreAboutHover' key={index} style={{ borderRadius: 15, border: '0.1rem solid lightGrey', width: '100%' }}>
                                    <Image src={array.icon} height={60} width={60} style={{ borderRadius: 10 }} color='black' className="p-2 bg-light" />
                                    <span className='d-flex pb-4 pt-2 text-center' style={{ fontSize: '1.75rem' }} id='subHeadingSec2'>{array.heading}</span>
                                    <span style={{ color: '#727272', fontSize: '1.125rem', textAlign: 'center' }} >{array.text}</span>
                                    <span style={{ color: '#727272', fontSize: '1.125rem' }} >{array.text2 || null}</span>
                                </div>)
                        }
                    </div>
                </section>
            }
            <section >
                <div style={{ padding: isSmallScreen ? '' : '1rem 10rem' }} >
                    <span className='text-center justify-content-center d-flex align-items-center '
                        style={{ fontSize: isSmallScreen ? '1.7rem' : '2.625rem', color: 'black', fontWeight: '500', paddingBottom: isSmallScreen ? 'none' : 'none' }}>
                        {translate(`Bumppy merchant network`)}
                    </span>
                </div>
                <div className="d-flex" style={{ width: '100%' }}>
                    <Image src={mapImage} width={2000} height={isSmallScreen ? 1200 : 900} />
                </div>
            </section>


            <Footer />
        </div>
    );
};

export default ContactUs;