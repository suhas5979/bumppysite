import Image from "next/image";
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import useTranslation from "../../utils/useTranslation";

// tab icons
import PaymentIcon from '../../public/images/ourProduct/PaymentIcon.svg';
import MediaIcon from '../../public/images/ourProduct/MediaIcon.svg';
import EdTechIcon from '../../public/images/ourProduct/EdTechIcon.svg';
import EComIcon from '../../public/images/ourProduct/EComIcon.svg';
import FoodIcon from '../../public/images/ourProduct/FoodIcon.svg';
import TravelIcon from '../../public/images/ourProduct/TravelIcon.svg';

// payment collage images
import paymentImg1 from '../../public/images/ourProduct/collage/pRectangle.svg';
import paymentImg2 from '../../public/images/ourProduct/collage/P 1.jpg';
import paymentImg3 from '../../public/images/ourProduct/collage/P 2.jpg';
import paymentImg4 from '../../public/images/ourProduct/collage/p 3.jpg';

// media collage images
import mediaImg1 from '../../public/images/ourProduct/collage/mRectangle.svg';
import mediaImg2 from '../../public/images/ourProduct/collage/M 1.jpg';
import mediaImg3 from '../../public/images/ourProduct/collage/M2.jpg';
import mediaImg4 from '../../public/images/ourProduct/collage/M 3.jpg';

// food collage images
import foodImg1 from '../../public/images/ourProduct/collage/fRectangle.svg';
import foodImg2 from '../../public/images/ourProduct/collage/f 1.jpg';
import foodImg3 from '../../public/images/ourProduct/collage/f 2.jpg';
import foodImg4 from '../../public/images/ourProduct/collage/f 3.jpg';

// edTech collage images
import edTechImg1 from '../../public/images/ourProduct/collage/edRectangle.svg';
import edTechImg2 from '../../public/images/ourProduct/collage/Ed 1.jpg';
import edTechImg3 from '../../public/images/ourProduct/collage/Ed 2.jpg';
import edTechImg4 from '../../public/images/ourProduct/collage/Ed 3.jpg';

// travel collage images
import travelImg1 from '../../public/images/ourProduct/collage/tRectangle.svg';
import travelImg2 from '../../public/images/ourProduct/collage/T 1.jpg';
import travelImg3 from '../../public/images/ourProduct/collage/T 2.jpg';
import travelImg4 from '../../public/images/ourProduct/collage/T 3.jpg';

// eComm collage images
import eCommImg1 from '../../public/images/ourProduct/collage/ecRectangle.svg';
import eCommImg2 from '../../public/images/ourProduct/collage/EC 1.jpg';
import eCommImg3 from '../../public/images/ourProduct/collage/EC 2.jpg';
import eCommImg4 from '../../public/images/ourProduct/collage/EC 3.jpg';

const OurProducts = () => {
    const translate = useTranslation();
    const [activeTab, setActiveTab] = useState(2);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [slideShowPaused, setSlideShowPaused] = useState(false);

    const collageData = [
        {
            idx: 0,
            navigateTo:'https://payments.bumppy.com/',
            collageImg1: paymentImg1,
            collageImg2: paymentImg2,
            collageImg3: paymentImg3,
            collageImg4: paymentImg4,
            subheading: 'Payments',
            heading: 'Pay a Snap with Bumppy: Easy, Peasy, Fun!',
            text: 'Explore the fusion of joy and education at Fun, Learn, Connect – where tech transforms learning into a delightful and connected experience.'
        },
        {
            idx: 1,
            navigateTo:'https://chaafo.com/',
            collageImg1: foodImg1,
            collageImg2: foodImg2,
            collageImg3: foodImg3,
            collageImg4: foodImg4,
            subheading: 'Chaafo',
            heading: 'Elevate Your Tastebuds with Chaafo',
            text: 'Experience ease with Bumppy Payments, your go-to solution for simple, swift, and secure transactions.'
        },
        {
            idx: 2,
            navigateTo:'https://flights.bumppy.com/',
            collageImg1: travelImg1,
            collageImg2: travelImg2,
            collageImg3: travelImg3,
            collageImg4: travelImg4,
            subheading: 'Trawlo',
            heading: 'Flights: Where dreams take wings',
            text: 'Immerse yourself in unparalleled journeys, where every destination becomes a memorable story.'
        },
        {
            idx: 3,
            navigateTo:'https://accounts.bumppy.com/',
            collageImg1: mediaImg1,
            collageImg2: mediaImg2,
            collageImg3: mediaImg3,
            collageImg4: mediaImg4,
            subheading: 'Bumppy Media',
            heading: 'Your Happy Hub of Exploration',
            text: 'Explore the fusion of joy and education at Fun, Learn, Connect – where tech transforms learning into a delightful and connected experience.'
        },
        {
            idx: 4,
            navigateTo:'https://examsnotice.com/',
            collageImg1: edTechImg1,
            collageImg2: edTechImg2,
            collageImg3: edTechImg3,
            collageImg4: edTechImg4,
            subheading: 'Exam Notice',
            heading: 'Your Assistant for Academic Milestones.            ',
            text: 'Your reliable source for timely updates and essential information ensures youre ready for success.'
        },
        {
            idx: 5,
            navigateTo:'https://shoppek.bumppy.com/',
            collageImg1: eCommImg1,
            collageImg2: eCommImg2,
            collageImg3: eCommImg3,
            collageImg4: eCommImg4,
            subheading: 'Shoppek',
            heading: 'Shop Smart, Shop Bumppy! ',
            text: 'Bumppy is your go-to e-commerce platform, where style meets simplicity. Dive into a world of convenience, where shopping is not just a task but an experience. '
        },
    ]
    const tabData = [
        {
            name: 'Media',
            image: MediaIcon,
        },
        {
            name: 'Trawlo',
            image: TravelIcon,
        },
        {
            name: 'Chaafo',
            image: FoodIcon,
        },
        {
            name: 'Payments',
            image: PaymentIcon,
        },
        {
            name: 'Shoppek',
            image: EComIcon,
        },
        {
            name: 'Ed-Tech',
            image: EdTechIcon,
        }
    ];

    const indexesToInclude = [
        (activeTab - 1 + tabData.length) % tabData.length, // Previous index
        activeTab, // Current active index
        (activeTab + 1) % tabData.length, // Next index
    ];

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

    useEffect(() => {
        const interval = setInterval(() => {
            if (!slideShowPaused) {
                setActiveTab((activeTab + 1) % tabData.length);
            }

        }, 5000);
        return () => clearInterval(interval);
    }, [activeTab, slideShowPaused, tabData.length]);

    const handleTabClick = (index) => {
        setActiveTab(index);
        setSlideShowPaused(true);
    };

    const handleLinkClick = (link) => {
        window.open(link, "_blank");
      };

    return (
        <div id='parent-ni' style={{ overflowX: 'hidden', flexDirection: 'column', justifyContent: 'flex-end', overflowX: 'hidden', paddingBottom: '1%', paddingTop: "4rem", paddingRight: '10rem', paddingLeft: '10rem', }}  >
            <h3 className="d-flex justify-content-center font-class pb-3 "
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500', fontSize: "3vw" }}
                id='heading'
            >
                {translate(`Our Product`)}
            </h3>
            <div className="d-flex justify-content-center" style={{ flexDirection: 'column', }} id="tab-parent-n">
                {isSmallScreen ?
                    <div
                        className=" tab d-flex justify-content-between "
                        style={{ overflowX: 'hidden', gap: '4%' }}>
                        {indexesToInclude.map((index) => (
                            <div
                                key={index}
                                className={`tabMobile ${activeTab === index ? 'activeMobile' : 'tab2Mobile'} d-flex ' `}
                                style={{
                                    cursor: 'pointer',
                                    marginTop: 7,
                                    marginBottom: 7,
                                    minWidth: "5vw",
                                    alignItems: 'center',
                                    backgroundColor: activeTab === index ? 'rgba(255, 204, 1, 1)' : 'rgba(255, 255, 255, 1)',
                                    fontFamily: 'Poppins, sans-serif',
                                    borderRadius: 30,
                                    transition: 'background-color 0s',
                                    boxShadow: activeTab === index ? '0px 0px 6px 6px rgba(0, 0, 0, 0.1)' : 'none',
                                    fontWeight: activeTab === index && 'bold'
                                }}
                                onClick={() => handleTabClick(index)}
                            >
                                <Image loading="eager"
                                    src={tabData[index].image}
                                    alt={tabData[index].name}
                                    width={activeTab === index ? 30 : 25}
                                    height={activeTab === index ? 30 : 25}
                                />
                                <span style={{ minWidth: '50px', fontSize: '3vw', textAlign: 'center' }}> {translate(`${tabData[index].name}`)}</span>
                            </div>
                        ))}
                    </div>
                    :
                    <div className="d-flex justify-content-center my-2"
                        style={{ overflowX: 'hidden', gap: '1%' }}
                    >
                        {tabData.map((tab, index) => (
                            <div
                                key={index}
                                className={`tab ${activeTab === index ? 'active' : 'tab2'} d-flex align-items-center' `}
                                style={{
                                    cursor: 'pointer',
                                    margin: 9,
                                    alignItems: 'center',
                                    fontFamily: 'Poppins, sans-serif',
                                    transition: 'background-color 0.6s',
                                    borderRadius: 30,
                                    boxShadow: activeTab === index ? '0px 0px 2px 2px rgba(0, 0, 0, 0.1)' : 'none',
                                    fontWeight: activeTab === index && 'bold'
                                }}
                                onClick={() => handleTabClick(index)}
                                onMouseOut={() => setSlideShowPaused(false)}
                            >
                                <Image loading="eager"
                                    src={tab.image}
                                    alt={tab.name}
                                    width={activeTab === index ? 40 : 30}
                                    height={activeTab === index ? 40 : 30}
                                />
                                <span style={{ fontSize: '1.2vw' }} id='tabText'> {translate(`${tab.name}`)}</span>
                            </div>
                        ))}
                    </div>
                }
                <div className="d-flex " id='filteredData_parent' style={{}}>
                    {collageData.map((data, i) => (
                        i == activeTab &&
                        <div
                            key={i}
                            id='filteredData'
                            className="d-flex justify-content-start  align-items-center"
                            style={{
                                display: activeTab === data.idx ? 'block' : 'none',
                                 paddingTop: '3rem', paddingBottom: '3rem'
                            }}
                        >
                            <div
                                className="d-flex col-sm-6 "
                                style={{  }}
                                id='collageImg'>
                                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }} id='unknown-n'>
                                    <div id='collageImg1Parent' style={{ position: 'absolute', display: 'flex', marginTop: '0.5rem' }}>
                                        <Image loading="eager" className='d-flex' height={450} src={data.collageImg1} id='collageImg1' />
                                    </div>
                                    <div className="d-flex" style={{ flexDirection: 'row', marginLeft: '3rem' }} id='otherImgParent'>
                                        <div className="align-items-end justify-content-end d-flex" style={{ flexDirection: 'column', gap: '0.5rem', backgroundColor: 'transparent', marginRight: '0.5rem', }}>
                                            <Image loading="eager" className='d-flex' height={300} width={380} src={data.collageImg2}  id='collageImg2' style={{ }} />
                                            <Image loading="eager" className='d-flex' height={500} width={700} src={data.collageImg3} id='collageImg3'/>
                                        </div>
                                    </div>
                                    <Image loading="eager" className='d-flex' height={700} style={{}} src={data.collageImg4} />
                                </div>
                            </div>
                            <div className="col col-sm-6 d-flex flex-column align-items-start justify-content-center pt-4" id='collageDataParent-n' >
                                <div style={{ padding: '0% 10% 0% 15%', justifyContent: 'center' }} id='collageData-n'>
                                    <h5 className='pb-3'
                                        id="filteredDataSubheading"
                                        style={{ fontSize: "2.1vw", maxWidth: '100%', fontWeight: '400', fontFamily: 'Poppins, sans-serif' }}>{translate(`${data.subheading}`)}
                                    </h5>
                                    <p className='pb-1'
                                        id="filteredDataHeading"
                                        style={{
                                            fontSize: "1.4vw", fontFamily: 'Poppins',
                                            fontFamily: 'Poppins, sans-serif',
                                        }}>
                                        {translate(`${data.heading}`)}
                                    </p>
                                    <p className='p-0 '
                                        id="filteredDataText"
                                        style={{
                                            maxWidth: '100%',
                                            fontFamily: 'Poppins, sans-serif',
                                            fontSize: "1.1vw",
                                            maxHeight: '9vh',
                                            overflow: 'hidden',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            color: 'rgb(88, 86, 86)'
                                        }}
                                    >{translate(`${data.text}`)}</p>
                                    <div
                                        type="button"
                                        id='morebutton'
                                        className=" btn px-4.3 py-3 mt-3"
                                        style={{
                                            backgroundColor: '#181E4B',
                                            fontSize: "1.1vw", color: 'white', textTransform: 'none',
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
                                        onClick={() => handleLinkClick(data.navigateTo)}
                                    >
                                        {translate(`Click here`)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurProducts;