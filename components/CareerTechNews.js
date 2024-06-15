import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import useTranslation from "../utils/useTranslation";


const CareerTechNews = () => {

  const translate = useTranslation();
  const [singlePost, setSinglePost] = useState("");
  const router = useRouter();
  const { postid, title } = router.query;

  const [postDetails, setPostDetails] = useState({ postid: "", title: "" });
  const handleCardClick = (card) => {
    const dataToPass = {
      postid: card.postid,
      title: card.text,
      image: card.image,
      date: card.date,
      author: card.author,
      views: card.views,
    };
    sessionStorage.setItem("nextPageData", JSON.stringify(dataToPass));
    router.push("/SinglePost", undefined, { force: true }).then(() => {
      window.location.href = "/SinglePost";
    });
  };
  const generateSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };
  useEffect(() => {
    console.log("Checking session storage for post details...");
    const data = sessionStorage.getItem("nextPageData");
    console.log("Fetched from session storage:", data);
    if (data) {
      console.log("Setting post details state...");
      setPostDetails(JSON.parse(data));
      // Optionally, clear the item if it's no longer needed
      sessionStorage.removeItem("postDetails");
    }
  }, []);

  const stripHtmlAndWordPressTags = (html) => {
    if (typeof html !== "string") {
      return "";
    }

    const doc = new DOMParser().parseFromString(html, "text/html");
    const plainText = doc.body.textContent || "";

    return plainText.trim();
  };

  const strippedData = stripHtmlAndWordPressTags(singlePost.content);
  console.log(singlePost);

  const [transitioning, setTransitioning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [cards, setCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState(8);

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
      return 4;
    } else if (screenWidth < 992) {
      return 3;
    } else {
      return 4;
    }
  };

  const endIndex = currentIndex + visibleCards;
  const repeatedCards = [...cards, ...cards];
  const displayedCards = repeatedCards.slice(currentIndex, endIndex);

  
  const fetchDataRelatedPost = async () => {
    const formData = new URLSearchParams();
    formData.append("cat", "Technology");


    try {
      const response = await fetch("https://bumppy.com/api/testcategory.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json(); // Parse JSON response

      if (data && Array.isArray(data)) {
        // Assuming the API returns an array directly
        setCards(
          data.map((apiCard) => ({
            text: apiCard.post_title,
            image: apiCard.feature_url,
            postid: apiCard.id,
            additionalText:
              "The dynamic relationship between business and technology has become increasingly intertwined, propelling innovation, shaping industries.",
            date: apiCard.post_date,
            more: apiCard.post_permalink, // Assuming `more` is intended to be the link to the post
            author: apiCard.display_name,
          }))
        );
      } else {
        console.error("Invalid or unexpected data format:", data);
      }
    } catch (error) {
      console.error("Error fetching related post data:", error);
    }
  };

  useEffect(() => {
    fetchDataRelatedPost();
  }, [postDetails.postid]);

  const title1 = { dangerouslySetInnerHTML: { __html: postDetails.title } };

  return (
    <>
     


      {/* Related Post d-none d-lg-flex */}

      <div className="   left-right-padding  ">
        <div className="row  d-flex justify-content-between ">
          <div className="col-6 py-3 d-flex justify-content-start ">
            <p
              className="pt-1 single-post-title2"
              style={{
                // fontSize: "1.2rem",
                // fontWeight: "500",
                fontFamily: "Roboto, sans-serif",
              }}
            >
        {translate(` FEATURED TECH NEWS`)}
            </p>
          </div>
          <div className="col-6  py-3 d-flex justify-content-end">
            <span
              className="cursor-pointer  mx-md-3 mx-2"
              style={{
                borderRadius: "6px",
                backgroundColor: "rgba(165, 165, 165, 0.5)",
                height: "2rem",
                width: "2rem",
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={prevSlide}
            >
              <span
                className="p-0 px-2 "
                style={{ fontSize: "1.3rem", color: "#787878" }}
              >
                {" "}
                {"<"}
              </span>
            </span>
            <span
              className=" cursor-pointer  mx-md-"
              style={{
                borderRadius: "6px",
                backgroundColor: "rgba(165, 165, 165, 0.8)",
                height: "2rem",
                width: "2rem",
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={nextSlide}
            >
              <span
                className="p-0 px-2"
                style={{ fontSize: "1.3rem", color: "#252525" }}
              >
                {" "}
                {">"}
              </span>
            </span>
          </div>

          <div className="careerTechNewsContainer py-4">
            {displayedCards.map((card, index) => (
              <div
                key={index}
                className=""
                style={{
                  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                  height: "100%",

                  transition: "opacity 0.5s ease-in-out",
                  position: "relative",
                }}
              >
                <img
                  src={card.image}
                  style={{
                    maxWidth: "100%",
                    marginBottom: "10px",
                    height: "22vh",
                    objectFit: "cover",
                  }}
                />

                <div
                  className="card-content align-items-end"
                  style={{
                    padding: "0 10px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <div
                    className="m-2 card-text1 cursor-pointer font2 text-dark"
                    style={{
                      textAlign: "start",

                      fontFamily: "Roboto, sans-serif",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      WebkitLineClamp: 2, // Limit the text to two lines
                      textOverflow: "ellipsis",
                    }}
                    onClick={() => handleCardClick(card)}
                  >
                    {/* {  card.text} */}
                    <div dangerouslySetInnerHTML={{ __html: card.text }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerTechNews;
