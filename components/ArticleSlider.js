import React, { useState, useEffect } from "react";
import axios from 'axios';
import Link from "next/link";

import { useRouter } from "next/router";
import useTranslation from "../utils/useTranslation";
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
  rel="stylesheet"
/>

import LikeIcon from '../public/images1/Like.js'
function ArticleSlider() {
  const router = useRouter();
  const translate = useTranslation();

  const [transitioning, setTransitioning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const [visibleCards, setVisibleCards] = useState(4);

  const [cards, setCards] = useState([
    // {
    //   text: " 7 Myths Of Online Credit Card Usage",
    //   image: "/images/image1/s1.png",
    //   additionalText:
    //     "In this guide, we'll explore how to find the perfect furnished apartment for business travelers in Los Angeles, ensuring your stay is comfortable. ",
    //   date: "2feb 2024",
    //   more: "Read More",
    //   slug: ''
    // },
    // {
    //   text: "    Software Development Team Structure",
    //   image: "/images/image1/s2.png",
    //   additionalText:
    //     " Team composition is essential to success, so it’s important to take the time to assemble the perfect dedicated software development team.",
    //   date: "2feb 2024",
    //   more: "Read More",
    //   slug: ''
    // },
    // {
    //   text: "  The Interplay of Business and Technology",
    //   image: "/images/image1/s3.png",
    //   additionalText:
    //     "The dynamic relationship between business and technology has become increasingly intertwined, propelling innovation, shaping and industries.",
    //   date: "2feb 2024",
    //   more: "Read More",
    //   slug: ''
    // },
    // {
    //   text: "   13 Full Commercial Signature Of A Typical Business Man…",
    //   image: "/images/image1/s4.png",
    //   additionalText:
    //     "Unlock the secrets of triumph and prosperity with our curated selection of 13 signature traits embodying the quintessential business leader.",
    //   date: "2feb 2024",
    //   more: "Read More",
    //   slug: ''
    // },
    // {
    //   text: "    Expert Tips for Making an Office 365 Migration Strategy",
    //   image: "/images/image1/s1.png",
    //   additionalText:
    //     "Migration projects are often overwhelming to a business that has decided to move from one platform to another.Reduce costs for growth.",
    //   date: "2feb 2024",
    //   more: "Read More",
    //   slug: ''
    // },
    // {
    //   text: "   Innovative Ways to Incorporate Portable Whiteboards ",
    //   image: "/images/image1/s2.png",
    //   additionalText:
    //     "Office fit-out design has become increasingly important in the workplace. One tool that can be helpful in office design is a portable whiteboards.",
    //   date: "2feb 2024",
    //   more: "Read More",
    //   slug: ''
    // },
  ]);

  const nextSlide = () => {
    const lastIndex = cards.length - 1;
    setCurrentIndex((prevIndex) =>
      prevIndex === lastIndex ? 0 : prevIndex + 1
    );
    setTransitioning(true);
    setTimeout(() => {
      setTransitioning(false);
    }, 100);
  };

  const prevSlide = () => {
    const lastIndex = cards.length - 1;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? lastIndex : prevIndex - 1
    );
    setTransitioning(true);
    setTimeout(() => {
      setTransitioning(false);
    }, 100);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      const screenWidth = window.innerWidth;
      const visibleCards = calculateVisibleCards(screenWidth);
      setVisibleCards(visibleCards);
    };

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const calculateVisibleCards = (screenWidth) => {
    if (screenWidth < 375) {
      return 1;
    } else if (screenWidth < 768) {
      return 1;
    } else if (screenWidth < 1085) {
      return 2;
    } else if (screenWidth < 1292) {
      return 3;
    } else {
      return 4;
    }
  };

  const endIndex = currentIndex + visibleCards;
  const repeatedCards = [...cards, ...cards];
  const displayedCards = repeatedCards.slice(currentIndex, endIndex);


  const preloadImages = (images) => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  };

  const fetchDataArticle = () => {
    // Prepare form data
    const formData = new URLSearchParams();
    formData.append('page', '1');
    formData.append("language", "en");
    fetch("https://demo.bumppy.com/api2/testallpost.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(), // Convert form data to a string suitable for application/x-www-form-urlencoded
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const cardsData = data.map((apiCard) => ({
          text: apiCard.post_title,
          image: apiCard.feature_url,
          postid: apiCard.id,
          additionalText: "The dynamic relationship between business and technology has become increasingly intertwined, propelling innovation, shaping industries.",
          date: apiCard.post_date,
          more: apiCard.permalink,
          author: apiCard.display_name,
          views: apiCard.post_views_count,
          slug: apiCard.slug // Ensure this property exists or adjust accordingly
        }));

        // Update your state with this new `cardsData`
        preloadImages(cardsData.map((card) => card.image)); // Preload images
        setCards(cardsData);

        // Adjust this line based on how your state is managed (e.g., if using useState hook)
      })
      .catch((error) => {
        console.error("Error fetching article data:", error);
      });
  };

  // useEffect(() => {

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://demo.bumppy.com/api2/getPostContentBySlug.php');
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const result = await response.json();
  //     } catch (error) {
  //       console.log(error.message);
  //     } 
  //   };

  //   fetchData();
  // }, []);

  const fetchDataDot = () => {
    fetch("https://apitranxt.bumppypay.com/api/admin/users/get_all_faq_list.aspx")
      .then((response) => response.json())
      .then((data) => {
        setFaqData(data.data);

        for (let i = 0; i < data.data.length; i++) {
          const str = JSON.stringify(data.data[i]);
          Cookies.set(`faqData_${i}`, str, { expires: 7 }); // Set cookie to expire in 7 days
        }
      })
      .catch((error) => {
        console.error("Error fetching FAQ data:", error);
      });
  };

  const fetchDataPHP = () => {
    fetch("https://bumppy.in/api_integration/agent_concern/v1/getCreditCardDetails.php", {
      userid: "BR1004",
      creditcard: "5979",
      aadhaar: ""
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("API response:", data);
        setFaqData(data.data);

        for (let i = 0; i < data.data.length; i++) {
          const str = JSON.stringify(data.data[i]);
          // console.log("data", str);
          Cookies.set(`faqData_${i}`, str, { expires: 7 }); // Set cookie to expire in 7 days
        }
      })
      .catch((error) => {
        console.error("Error fetching FAQ data:", error);
      })
  };

  useEffect(() => {
    fetchDataArticle();
    fetchDataPHP();
    fetchDataDot();
    // fetchDataEntertainment();
  }, []);

  return (
    <>
      <div className=" p-md-3  p-3" style={{ background: "#ffcc01" }}>
        <div className="px-md-5 py-md-5 p-2 mx-md-3">

          <div className="row d-flex justify-content-between px-md-5 px-2 mx-md-3 pt-2 pb-md-2 pb-1">
            <div className="col-6 d-flex justify-content-start px-md-4 px-2">
              <p
                className=""
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "500",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                {translate(`Top Trending's`)}
              </p>
            </div>
            <div className="col-6  px-md-3 px-2 d-flex justify-content-end">
              <span
                className="cursor-pointer  mx-2"
                style={{
                  borderRadius: "6px",
                  backgroundColor: "rgba(206,190,99,1)",
                  height: "2rem",
                  width: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onClick={prevSlide}
              >
                <span
                  className="p-0  "
                  style={{ fontSize: "1.3rem", color: "#787878" }}
                >
                  {" "}
                  {"<"}
                </span>
              </span>
              <span
                className=" cursor-pointer  "
                style={{
                  borderRadius: "6px",
                  backgroundColor: "rgba(205,190,99,1)",
                  height: "2rem",
                  width: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onClick={nextSlide}
              >
                <span
                  className="p-0 "
                  style={{ fontSize: "1.3rem", color: "#252525" }}
                >
                  {" "}
                  {">"}
                </span>
              </span>
            </div>
          </div>
          <div
            className=" mx-md-5 px-md-4"
            style={{ display: "flex", justifyContent: "center" }}
          >

            {displayedCards.map((card, index) => (
              <div
                key={card.post_title}
                style={{
                  backgroundColor: "#fff",
                  margin: "10px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                  height: "100%",
                  // flex: "1 1 00px",
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                <>

                  <img
                    key={card.image} // Assuming that the image URL is unique
                    src={card.image}
                    alt={`Card Image - ${index}`}
                    style={{
                      maxWidth: "100%",
                      marginBottom: "10px",
                      height: "22vh",
                      objectFit: "cover",
                    }}
                    loading="eager" // Load the image immediately
                  />
                  <div
                    className="m-0"
                    style={{
                      padding: "0 10px",
                      height: "11rem",
                      overflow: "hidden",
                    }}
                  >
                    <div className="d-flex align-items-center mb-4">
                      <div className="d-flex " style={{ flex: 1, }}>
                        <div className="align-items-center">
                          <img
                            src={card.image}
                            style={{ background: '#ffcc01', borderRadius: '50%', height: '35px', width: '35px' }} />
                        </div>
                        <p
                          className="p-0 mx-2 d-flex align-items-center"
                          style={{
                            textAlign: "start",
                            color: "#BDBDBD",
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: ".9rem",
                          }}
                        >
                          {translate(`${card.author}`)}
                        </p>
                      </div>
                      <div
                      >
                        <LikeIcon
                          style={{ fill: liked && 'red', stroke: liked && 'red' }}
                        />
                      </div>
                    </div>
                    <h6
                      className="mx-2 ellipsize-1 cursor-pointer my-2"
                      style={{
                        textAlign: "start",
                        color: "#3E3232",
                        fontFamily: 'Poppins, sans-serif',
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 2, // Display up to 2 lines
                        textOverflow: "ellipsis",
                      }}
                    // onClick={() => handleCardClick(card)}
                    >
                      <Link href={`/${card.slug}`} >
                        {card.text}
                      </Link>
                    </h6>
                    <p
                      className=""
                      style={{
                        textAlign: "start",
                        color: "#6d6d6d",
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: "0.9rem",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 3, // Limit to 3 lines
                        textOverflow: "ellipsis",
                      }}
                    >
                      {translate(`${card.additionalText}`)}
                    </p>
                  </div>
                  <div
                    className=" mx-2 my-4  d-flex justify-content-between"
                    style={{ textAlign: "start", color: "#6d6d6d" }}
                  >
                    <button
                      className=" m-0 p-2 d-flex"
                      style={{
                        background: "none",
                        fontSize: ".8rem",
                        color: "#6B6B6B",
                        fontFamily: 'Poppins, sans-serif',
                        background: '#F2F2F2'
                      }}
                    >
                      {translate(`category`)}
                      {/* Read More */}
                    </button>
                    <p
                      className=" d-flex align-items-center"
                      style={{
                        textAlign: "start",
                        color: "#6B6B6B",
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: ".8rem",
                        fontWeight: "400",
                      }}
                    >
                      {/* {card.date?.slice(0, 1)} {card.date?.slice(1)} */}
                      {translate(` ${card.date}`)}
                    </p>
                  </div>
                </>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleSlider;