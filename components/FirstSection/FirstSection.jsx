import { useState, useEffect } from 'react';
import Image from "next/image";
import useTranslation from "../../utils/useTranslation";

<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
  rel="stylesheet"
/>
import user from "../../public/images1/User.svg";
import download from "../../public/images1/download (1).svg";
import transaction from "../../public/images1/Transaction.svg";
import cites from "../../public/images1/Location.svg";
//Image for big slide bar
import b1 from "../../public/images1/b1.png";
import b2 from "../../public/images1/b2.png";
import b3 from "../../public/images1/b3.png";
import b4 from "../../public/images1/b4.png";
import b5 from "../../public/images1/b5.png";
import b6 from "../../public/images1/b6.png";
import b7 from "../../public/images1/b7.png";
import b8 from "../../public/images1/b8.png";
import b9 from "../../public/images1/b9.png";
import b10 from "../../public/images1/b10.png";


//Image for small slide bar
import payment2 from "../../public/images1/Payment_2.jpg";
import media2 from "../../public/images1/Media_2.jpg";
import food2 from "../../public/images1/Food_2.jpg";
import travel2 from "../../public/images1/Travel_2.jpg";
import edtech2 from "../../public/images1/Ed-Tech_2.jpg";
import ecom2 from "../../public/images1/E-Commerce_2.jpg";


const images = [

  b1, b2, b3, b4, b5, b6, b7, b8, b9, b10

];
const imagessmall = [

  payment2,
  media2,
  food2,
  travel2,
  edtech2,
  ecom2

];

const FirstSection = () => {
  const translate = useTranslation();
  const [currentIndexBig, setCurrentIndexBig] = useState(0);
  const [currentIndexSmall, setCurrentIndexSmall] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const [userCount, setUserCount] = useState(0);
  const [downloadCount, setDownloadCount] = useState(0);
  const [transactionCount, setTransactionCount] = useState(0);
  const [citiesCount, setCitiesCount] = useState(0);


  const [apiData, setApiData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/api/testallpost');
  //       const data = await response.json();
  //       setApiData(data.result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const endValues = {
    user: 2.5,
    download: 2.5,
    transaction: 5000,
    cities: 20,
  };

  useEffect(() => {
    const userInterval = setInterval(() => {
      setUserCount((prevCount) => (prevCount < endValues.user ? prevCount + 0.1 : prevCount));
    }, 50);

    return () => clearInterval(userInterval);
  }, [endValues.user]);

  useEffect(() => {
    const downloadInterval = setInterval(() => {
      setDownloadCount((prevCount) => (prevCount < endValues.download ? prevCount + 0.1 : prevCount));
    }, 50);

    return () => clearInterval(downloadInterval);
  }, [endValues.download]);

  useEffect(() => {
    const transactionInterval = setInterval(() => {
      setTransactionCount((prevCount) =>
        prevCount < endValues.transaction ? prevCount + 500 : prevCount
      );
    }, 100);

    return () => clearInterval(transactionInterval);
  }, [endValues.transaction]);

  useEffect(() => {
    const citiesInterval = setInterval(() => {
      setCitiesCount((prevCount) => (prevCount < endValues.cities ? prevCount + 1 : prevCount));
    }, 50);

    return () => clearInterval(citiesInterval);
  }, [endValues.cities]);

  const handleNextBig = () => {
    setCurrentIndexBig((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleNextSmall = () => {
    setCurrentIndexSmall((prevIndex) => (prevIndex + 1) % imagessmall.length);
  };

  const handleNextText = () => {
    setCurrentText((prevIndex) => (prevIndex + 1) % textArray.length);
  };

  useEffect(() => {
    const intervalBig = setInterval(handleNextBig, 2500);

    return () => {
      clearInterval(intervalBig);
    };
  }, [currentIndexBig]);

  useEffect(() => {
    const intervalSmall = setInterval(handleNextSmall, 3000);

    return () => {
      clearInterval(intervalSmall);
    };
  }, [currentIndexSmall]);

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textArray = ["Payments", "Media", "Food", "Travel", "Ed-Tech", "E-Commerce"];
  useEffect(() => {

    const intervalSmall = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000);

    return () => {
      clearInterval(intervalSmall);
    };
  }, []);

  const [currentTextIndexUser, setCurrentTextIndexUser] = useState(0);
  const [currentTextIndexDownloads, setCurrentTextIndexDownloads] = useState(0);
  const [currentTextIndexTransaction, setCurrentTextIndexTransaction] = useState(0);
  const [currentTextIndexCity, setCurrentTextIndexCity] = useState(0);

  const textArrayUser = [
    { number: "2500+", name: "User" },
    { number: "9000+", name: "User" },
    { number: "500+", name: "User" },
    { number: "1000+", name: "User" },
    { number: "100+", name: "User" },
    { number: "1100+", name: "User" }
  ]
  const textArrayDownloads = [
    { number: "2500+", name: "Downloads" },
    { number: "3000+", name: "Downloads" },
    { number: "1000+", name: "Downloads" },
    { number: "1500+", name: "Downloads" },
    { number: "900+", name: "Downloads" },
    { number: "800+", name: "Downloads" }
  ]
  const textArrayTransaction = [
    { number: "5000+", name: "Transaction/Day" },
    { number: "3000+", name: "Views/Day" },
    { number: "100+", name: "Orders/Day" },
    { number: "50+", name: "Booking/Day" },
    { number: "100+", name: "Transaction/Day" },
    { number: "70+", name: "Orders/Day" }
  ]
  const textArrayCity = [
    { number: "20+", name: "City" },
    { number: "50+", name: "City" },
    { number: "5+", name: "City" },
    { number: "20+", name: "City" },
    { number: "12+", name: "City" },
    { number: "40+", name: "City" }
  ]
  useEffect(() => {

    const intervalSmall = setInterval(() => {
      setCurrentTextIndexUser((prevIndex) => (prevIndex + 1) % textArrayUser.length);
      setCurrentTextIndexDownloads((prevIndex) => (prevIndex + 1) % textArrayDownloads.length);
      setCurrentTextIndexTransaction((prevIndex) => (prevIndex + 1) % textArrayTransaction.length);
      setCurrentTextIndexCity((prevIndex) => (prevIndex + 1) % textArrayCity.length);
    }, 3000);

    return () => {
      clearInterval(intervalSmall);
    };
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Change the image every 3 seconds (adjust as needed)
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagessmall.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imagessmall]);
  return (
    <>
      <div className=" container-fluid m-0  bg-light height-first-section">
        <div className="row" >
          {/* Both Slider Image Desktop */}
          <div className="container-firstsection d-none d-lg-flex " >
            {/* Left Big Part  */}
            <div className="  slider-big" >
              <div className=''>
                <div className='picbig' id='pic18' />
                <div className='picbig' id='pic17' />
                <div className='picbig' id='pic16' />
                <div className='picbig' id='pic15' />
                <div className='picbig' id='pic14' />
                <div className='picbig' id='pic13' />
                <div className='picbig' id='pic12' />
                <div className='picbig' id='pic10' />
              </div>
              <div className="text-overlay text-start" >
                <div className='p-0 m-0'>{translate(`Products we`)}</div>
                <div className='p-0 m-0'>
                  <span >{translate(`have`)} {" "}</span>
                  <div className='text-rotation-r' style={{ color: "rgba(255, 204, 1, 1)", position: "absolute", display: "inline-block" }}>
                    {textArray.map((text, index) => (
                      <span
                        key={index}
                        className={` ${currentTextIndex === index ? 'active' : ''}`}
                        style={{
                          paddingLeft: "0.5rem",
                          whiteSpace: "nowrap",
                          opacity: currentTextIndex === index ? 1 : 0,
                          transform: `rotateX(${currentTextIndex === index ? 0 : 90}deg)`,
                          transformOrigin: "bottom",
                          transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
                          position: "absolute",
                        }}
                      >
                        {translate(`${text}`)}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='p-0 m-0'>{translate(`For`)}</div>
                <div className='p-0 m-0'>{translate(`everyone.`)}</div>
              </div>
            </div>
            {/* Right small Part  */}
            <div className=" slider-small" >
              <div className="rotated-side-small image-container-small " >
                <ImageSlider images={imagessmall} />
              </div>
            </div>
          </div>
          {/*∎∎∎∎∎∎∎∎∎ ∎ ∎ ∎ ∎∎ ∎∎ ∎∎ ∎∎ ∎ ∎∎∎∎∎ ∎ ∎∎ ∎∎∎∎ */}
          {/* Both Slider Image Mobile */}
          <div className="container-firstsection  d-lg-none "  >
            {/* Left Big Part  */}
            <div className="  slider-big  dark-filter" >
              <ImageSlider images={imagessmall} className="" />
              <div className="text-overlay text-start " style={{
                paddingLeft: "2rem", position: "relative",
                height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}>
                <div >
                  <div className='p-0 m-0'>{translate(`Products we`)}</div>
                  <div className='p-0 m-0'>
                    <span >{translate(`have`)}{" "}</span>
                    <div className='text-rotation-r ' style={{ color: "rgba(255, 204, 1, 1)", position: "absolute", }}>
                      {textArray.map((text, index) => (
                        <span
                          key={index}
                          className={`text-item ${currentTextIndex === index ? 'active' : ''}`}
                          style={{
                            paddingLeft: "0.5rem",
                            display: "inline-block", whiteSpace: "nowrap",
                            opacity: currentTextIndex === index ? 1 : 0,
                            transform: `rotateX(${currentTextIndex === index ? 0 : 90}deg)`,
                            transformOrigin: "bottom",
                            transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
                            position: "absolute",
                          }}
                        >
                          {translate(`${text}`)}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className='p-0 m-0'>{translate(`For`)}</div>
                  <div className='p-0 m-0'>{translate(`everyone.`)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Downloads Desktop */}
        <div className='bg-light align-items-center d-none d-lg-flex custom-padding height-first-section-lower' >
          <div className="row col-12 bg-light  "  >
            <div className="col-6 col-lg-3">
              <div className="row start-flex">
                <div className="col-0 col-lg-3"></div>
                <div className="col-5 col-lg-3 d-flex  align-items-center">
                  <Image
                    loading="eager"
                    src={user}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="col-5 col-lg-6 line-height">
                  <div className="upper-text">
                    {/* {userCount.toFixed(1)}{"K"} */}
                    {textArrayUser.map((text, index) => (
                      <span
                        key={index}
                        className={`text-item ${currentTextIndexUser === index ? 'active' : ''}`}
                        style={{
                          paddingLeft: "0.5rem",
                          display: "inline-block",
                          whiteSpace: "nowrap",
                          opacity: currentTextIndexUser === index ? 1 : 0,
                          transform: `perspective(800px) rotateY(${currentTextIndexTransaction === index ? 0 : 90}deg) rotateX(${currentTextIndexUser === index ? 0 : 90}deg)`,
                          transformOrigin: "bottom",
                          transition: "opacity 2s ease-in-out, transform 1s ease-in-out",
                          position: "absolute",
                        }}
                      >
                        {text.number}
                        <div className="lower-text pt-1"> {text.name}</div>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 pb-lg-0 pb-4">
              <div className="row start-flex">
                <div className="col-0 col-lg-1"></div>
                <div className="col-5 col-lg-3 d-flex  align-items-center">
                  <Image
                    loading="eager"
                    src={download}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="col-6 col-lg-6 line-height">
                  <div className="upper-text">
                    {textArrayDownloads.map((text, index) => (
                      <span
                        key={index}
                        className={`text-item ${currentTextIndexDownloads === index ? 'active' : ''}`}
                        style={{
                          paddingLeft: "0.5rem",
                          display: "inline-block",
                          whiteSpace: "nowrap",
                          opacity: currentTextIndexDownloads === index ? 1 : 0,
                          transform: `perspective(800px) rotateY(${currentTextIndexTransaction === index ? 0 : 90}deg) rotateX(${currentTextIndexUser === index ? 0 : 90}deg)`,
                          transformOrigin: "bottom",
                          transition: "opacity 2s ease-in-out, transform 1s ease-in-out",
                          position: "absolute",
                        }}
                      >
                        {text.number}
                        <div className="lower-text pt-1"> {text.name}</div>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="row d-flex start-flex" >
                <div className="col-0 col-lg-1"></div>
                <div className="col-5 col-lg-3 d-flex  align-items-center">
                  <Image
                    loading="eager"
                    src={transaction}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="col-5 col-lg-6 line-height">
                  <div className="upper-text">
                    {textArrayTransaction.map((text, index) => (
                      <span
                        key={index}
                        className={`text-item ${currentTextIndexTransaction === index ? 'active' : ''}`}
                        style={{
                          paddingLeft: "0.5rem",
                          display: "inline-block",
                          whiteSpace: "nowrap",
                          opacity: currentTextIndexTransaction === index ? 1 : 0,
                          transform: `perspective(800px) rotateY(${currentTextIndexTransaction === index ? 0 : 90}deg) rotateX(${currentTextIndexUser === index ? 0 : 90}deg)`,
                          transformOrigin: "bottom",
                          transition: "opacity 2s ease-in-out, transform 1s ease-in-out",
                          position: "absolute",
                        }}
                      >
                        {text.number}
                        <div className="lower-text pt-1" style={{ whiteSpace: "nowrap" }}>   {text.name}</div>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="row end-flex">
                <div className="col-0 col-lg-3"></div>
                <div className="col-5 col-lg-3 d-flex  align-items-center">
                  <Image
                    loading="eager"
                    src={cites}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="col-6 col-lg-6 line-height px-1">
                  <div className="upper-text">
                    {textArrayCity.map((text, index) => (
                      <span
                        key={index}
                        className={`text-item ${currentTextIndexCity === index ? 'active' : ''}`}
                        style={{
                          paddingLeft: "0.5rem",
                          display: "inline-block",
                          whiteSpace: "nowrap",
                          opacity: currentTextIndexCity === index ? 1 : 0,
                          transform: `perspective(800px) rotateY(${currentTextIndexTransaction === index ? 0 : 90}deg) rotateX(${currentTextIndexUser === index ? 0 : 90}deg)`,
                          transformOrigin: "bottom",
                          transition: "opacity 2s ease-in-out, transform 1s ease-in-out",
                          position: "absolute",
                        }}
                      >
                        {text.number}
                        <div className="lower-text pt-1"> {text.name}</div>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Downloads Mobile Changed */}

        <div className='bg-light  d-lg-none  '>
          <div className="d-flex py-3 pe-4 justify-content-between align-items-center  bg-light "  >
            <div className="d-flex">
              <Image
                loading="eager"
                src={user}
                width={25}
                height={20}
              />
              <span className=" line-height-mobile" >
                <div className="upper-text" style={{ fontSize: "0.8rem" }}>
                  {textArrayUser.map((text, index) => (
                    <span
                      key={index}
                      className={` ${currentTextIndexUser === index ? 'active' : ''}`}
                      style={{
                        opacity: currentTextIndexUser === index ? 1 : 0,
                        transform: `perspective(800px) rotateY(${currentTextIndexTransaction === index ? 0 : 90}deg) rotateX(${currentTextIndexUser === index ? 0 : 90}deg)`,
                        transformOrigin: "bottom",
                        transition: "opacity 2s ease-in-out, transform 1s ease-in-out",
                        position: "absolute",
                      }}
                    >
                      {text.number}
                      <div className="lower-text pt-1" style={{ fontSize: "8px" }}> {translate(`${text.name}`)}</div>
                    </span>
                  ))}
                </div>
              </span>
            </div>
            <div className="d-flex">
              <Image
                loading="eager"
                src={download}
                width={25}
                height={20}
              />
              <div className="line-height-mobile">
                <div className="upper-text" style={{ fontSize: "0.8rem" }}>

                  {textArrayDownloads.map((text, index) => (
                    <span
                      key={index}
                      className={` ${currentTextIndexDownloads === index ? 'active' : ''}`}
                      style={{

                        opacity: currentTextIndexDownloads === index ? 1 : 0,
                        transform: `perspective(800px) rotateY(${currentTextIndexTransaction === index ? 0 : 90}deg) rotateX(${currentTextIndexUser === index ? 0 : 90}deg)`,
                        transformOrigin: "bottom",
                        transition: "opacity 2s ease-in-out, transform 1s ease-in-out",
                        position: "absolute",
                      }}
                    >
                      {text.number}
                      <div className="lower-text pt-1" style={{ fontSize: "8px" }}> {translate(`${text.name}`)}</div>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="d-flex" >
              <Image
                loading="eager"
                src={transaction}
                width={25}
                height={20}
              />
              <div className="line-height-mobile"  >
                <div className="upper-text" style={{ fontSize: "0.8rem" }} >
                  {textArrayTransaction.map((text, index) => (
                    <span
                      key={index}
                      className={` ${currentTextIndexTransaction === index ? 'active' : ''}`}
                      style={{
                        opacity: currentTextIndexTransaction === index ? 1 : 0,
                        transform: `perspective(800px) rotateY(${currentTextIndexTransaction === index ? 0 : 90}deg) rotateX(${currentTextIndexUser === index ? 0 : 90}deg)`,
                        transformOrigin: "bottom",
                        transition: "opacity 2s ease-in-out, transform 1s ease-in-out",
                        position: "absolute",
                      }}
                    >
                      {text.number}
                      <div className="lower-text pt-1" style={{ whiteSpace: "nowrap", fontSize: "8px" }}>  {translate(`${text.name}`)}</div>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="d-flex">
              <Image
                loading="eager"
                src={cites}
                width={25}
                height={20}
              />
              <div className="line-height-mobile">
                <div className="upper-text" style={{ fontSize: "0.8rem" }}>
                  {textArrayCity.map((text, index) => (
                    <div
                      key={index}
                      className={` ${currentTextIndexCity === index ? 'active' : ''}`}
                      style={{
                        opacity: currentTextIndexCity === index ? 1 : 0,
                        transform: `perspective(800px) rotateY(${currentTextIndexTransaction === index ? 0 : 90}deg) rotateX(${currentTextIndexUser === index ? 0 : 90}deg)`,
                        transformOrigin: "bottom",
                        transition: "opacity 2s ease-in-out, transform 1s ease-in-out",
                        position: "absolute",
                      }}
                    >
                      {text.number}
                      <div className="lower-text pt-1" style={{ fontSize: "8px" }}> {translate(`${text.name}`)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default FirstSection;

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div >
      {images.map((image, index) => (
        <Image
          loading="eager"
          key={index}
          className={`   image-item ${currentIndex === index ? 'active' : ''}`}
          src={image}
          alt={`Image ${index}`}
          layout="fill"
          objectFit="cover"

          style={{
            opacity: currentIndex === index ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            position: 'absolute',
          }}
        />
      ))}
    </div>
  );
};
