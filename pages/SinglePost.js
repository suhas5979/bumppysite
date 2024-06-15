import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";
import BlogInside from "../components/BlogInside";
import Link from "next/link";
import Head from 'next/head';
import cheerio from "cheerio";

import { Nav } from "react-bootstrap";
import useTranslation from "../utils/useTranslation";

import wp from "../public/images1/Whatsapp.svg";
import date1 from "../public/images1/icon.svg";
import view from "../public/images1/EYE.svg";
import fb from "../public/images1/FB.svg";
import x from "../public/images1/X-Twitter.svg";
import yt from "../public/images1/Yt.svg";

const SinglePost = ({ locale, Title, postid }) => {

  const router = useRouter();

  const { slug } = router.query;


  const [title, setTitle] = useState('');
  const translate = useTranslation();

  const [singlePost, setSinglePost] = useState("");
  const [postDetails, setPostDetails] = useState(null);

  const [transitioning, setTransitioning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [cards, setCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState(8);
  const [otherDetails, setOtherDetails] = useState({});

  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState(null);
  const [date, setDate] = useState(null);
  const [views, setViews] = useState(null);


  useEffect(() => {
    console.log("Checking session storage for post details... Suhas");
    console.log(slug, 'slug');
    const data = sessionStorage.getItem("nextPageData");
    console.log("Fetched from session storage:", data);
    if (data) {
      console.log("Setting post details state...");
      setPostDetails(JSON.parse(data));
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

  const endIndex = currentIndex + visibleCards;
  const repeatedCards = [...cards, ...cards];
  const displayedCards = repeatedCards.slice(currentIndex, endIndex);

  const fetchDataRelatedPost = async (postid) => {
    const formData = new URLSearchParams();
    formData.append("language", "en");
    formData.append("single_post_id", postid);

    try {
      const response = await fetch("https://bumppy.com/api/relatedpost.php", {
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
            additionalText: "The dynamic relationship between business and technology has become increasingly intertwined, propelling innovation, shaping industries.",
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
  console.log(cards)
  const getDetailsThroughId = (PostId) => {
    // console.log({cards,PostId})
    let newPostId = "13192"
    console.log(cards)
  
    const singlecard = cards.filter(card => {
      console.log(card);
      return card.postid == newPostId
    })
    console.log(singlecard)
    console.log(cards)
  }

  // PostId && cards.postid
  //   const singlePost= cards.find(card=>card.postid=== PostId);
  //   setOtherDetails(singlePost);
  //  console.log(cards)

  const fetchDataSinglePost = async (slug) => {

    console.log(slug, 'slug');
    const formData = new URLSearchParams();
    formData.append("single_post_id", slug);

    try {
      const response = await fetch(
        "https://demo.bumppy.com/api2/getPostContentBySlug.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.content && data.content.content) { // Check for nested content
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.content.content, "text/html"); // Parse the nested content
        const parsedContent = doc.documentElement.outerHTML;

        // console.log(data.content, 'find title - line206');

        setTitle(data.content.post_title);
        setAuthor(data.content.post_author);
        setViews(data.content.view);
        setDate(data.content.post_date);

        setImage(data.content.thumbnail);

        setSinglePost({
          content: parsedContent,
        })
      } else {
        console.error("Invalid data format:", data);
      }
    } catch (error) {
      console.error("Error fetching article data:", error);
    }
  };


  const fetchDataSinglePost2 = async (postid) => {
    const formData = new URLSearchParams();
    formData.append("single_post_id", postid);

    try {
      const response = await fetch(
        "https://bumppy.com/api/testsinglepost.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        const load = cheerio.load;
        const $ = load(data[0].post_content);
        const parsedContent = $.html();

        setSinglePost({
          content: parsedContent,
        });
      } else {
        console.error("Invalid data format:", data);
      }
    } catch (error) {
      console.error("Error fetching article data:", error);
    }
  };

  useEffect(() => {
    if (slug) {
      console.log("Fetching single post data... Suhas");
      fetchDataSinglePost(slug);
      // fetchDataRelatedPost();
      // getDetailsThroughId(postid)
    }
  }, [slug]);

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

  const calculateVisibleCards = (screenWidth) => {
    if (screenWidth < 375) {
      return 1;
    } else if (screenWidth < 768) {
      return 12;
    } else if (screenWidth < 992) {
      return 3;
    } else {
      return 12;
    }
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

  return (
    <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>{title}</title>
      <meta name="description" content={singlePost.content}></meta>
      {/* og meta tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={singlePost.content} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={typeof window !== 'undefined' && window.location.href} />
      <meta property="og:type" content="article" />
      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={singlePost.content} />
      <meta name="twitter:image" content={image} />
    </Head>
    <NavBar />
    <div className="d-flex mt-5 mb-5 justify-content-between" style={{ overflow: "hidden", height: "auto", marginRight: '10rem', marginLeft: '10rem' }} id='blogMobileView'>
      <div className=" col-md-9 col-12 m-0" id='blogListMobileView' style={{ paddingRight: '2rem' }}>
        <p className="text-gray font2 d-flex">
          <Link href={`/${locale}/`} passHref>
            <Nav.Link
              className="text-gray"
            >
              {translate(`Home`)}
            </Nav.Link>
          </Link>
          {">"} <span>Trending</span> {">"} <span>{title}</span>
        </p>
        <div className="font1">
          <span className="bg1 p-2 font2">Lifestyle</span>
          <span className="bg1 p-2 mx-2 font2">Trending</span>
        </div>
        <p className="single-post-title2 py-3">
          <span>{title}</span>
          {/* <span dangerouslySetInnerHTML={{ __html: singlePost.image }} /> */}
        </p>
        <div className=" d-flex font2">
          <div className="flex-grow-1 ">
            By{" "}
            <span className="bold-2 cursor-pointer ">
              {" "}
              <span>{author}</span>
            </span>
          </div>
          <div className=" gap-1">
            <Image
              src={date1}
              style={{
                marginBottom: "10px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            {date}
          </div>
          <div className=" px-2 gap-1">
            <Image
              src={view}
              style={{
                marginBottom: "10px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            View : {views}
          </div>
        </div>
        <div className="gap-1  py-3">
          <Image
            src={fb}
            style={{
              marginBottom: "10px",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <Image
            src={x}
            style={{
              marginBottom: "10px",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <Image
            src={wp}
            style={{
              marginBottom: "10px",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <Image
            src={yt}
            style={{
              marginBottom: "10px",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <img
          src={image}
          layout='fill'
          style={{
            marginBottom: "10px",
            width: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <div>
          {" "}

        </div>
        <div className='d-flex flex-column justify-content-start align-items-start' style={{}} dangerouslySetInnerHTML={{ __html: singlePost.content }} />
      </div>
      <div className="col-md-3 col-10 p-md-0 mt-2  " id='topAuthListMobileView'>
        <BlogInside slug={slug} />
      </div>
    </div>

    {/* Related Post  */}


    <div className="   left-right-padding bg-light ">
      <div className="row  d-flex justify-content-between ">
        <div className="col-6 py-3 d-flex justify-content-start ">
          <p
            className="pt-1"
            style={{
              fontSize: "1.2rem",
              fontWeight: "500",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Related Post
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

        <div className="relatedPostContainer pb-3">
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
                  height: "22vh",
                  objectFit: "cover",
                }}
              />
              <div
                className="card-content align-items-center text-center"
                style={{
                  padding: "0 10px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-center",
                  position: "absolute",
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.5)',
                  left: 0,
                  right: 0
                }}
              >
                <div
                  className="m-2 card-text1 cursor-pointer font2 text-white"
                  style={{
                    textAlign: "start",
                    fontFamily: "Roboto, sans-serif",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    WebkitLineClamp: 2,
                    textOverflow: "ellipsis",
                  }}
                // onClick={() => handleCardClick(card)}
                >
                  <Link href={`/${card.slug}`} >
                    <div style={{cursor:'pointer'}} dangerouslySetInnerHTML={{ __html: card.text }} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
};

export default SinglePost;
