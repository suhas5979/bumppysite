import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import NavBar from "./Navbar/Navbar";
import Footer from "./Footer/footer";
import BlogInside from "./BlogInside";
import Link from "next/link";
import Head from "next/head";
import { Nav } from "react-bootstrap";
import useTranslation from "../utils/useTranslation";
import wp from "../public/images1/Whatsapp.svg";
import date1 from "../public/images1/icon.svg";
import view from "../public/images1/EYE.svg";
import fb from "../public/images1/FB.svg";
import x from "../public/images1/X-Twitter.svg";
import yt from "../public/images1/Yt.svg";

const PostComponent = ({ post, relatedPosts, slug }) => {
  const router = useRouter();
  const translate = useTranslation();
  const [transitioning, setTransitioning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState(relatedPosts);
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
      return 12;
    } else if (screenWidth < 992) {
      return 3;
    } else {
      return 12;
    }
  };

  const endIndex = currentIndex + visibleCards;
  const repeatedCards = [...cards, ...cards];
  const displayedCards = repeatedCards.slice(currentIndex, endIndex);

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>{post.post_title}</title>
        <meta name="description" content={post.content}></meta>
        <meta property="og:title" content={post.post_title} />
        <meta property="og:description" content={post.content} />
        <meta property="og:image" content={post.thumbnail} />
        <meta property="og:url" content={typeof window !== 'undefined' && window.location.href} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.post_title} />
        <meta name="twitter:description" content={post.content} />
        <meta name="twitter:image" content={post.thumbnail} />
      </Head>
      <NavBar />
      <div className="d-flex mt-5 mb-5 justify-content-between" style={{ overflow: "hidden", height: "auto", marginRight: '10rem', marginLeft: '10rem' }} id='blogMobileView'>
        <div className=" col-md-9 col-12 m-0" id='blogListMobileView' style={{ paddingRight: '2rem' }}>
          <p className="text-gray font2 d-flex">
            <Link href={`/`} passHref>
              <Nav.Link className="text-gray">{translate(`Home`)}</Nav.Link>
            </Link>
            {">"} <span>Trending</span> {">"} <span>{post.post_title}</span>
          </p>
          <div className="font1">
            <span className="bg1 p-2 font2">Lifestyle</span>
            <span className="bg1 p-2 mx-2 font2">Trending</span>
          </div>
          <p className="single-post-title2 py-3">
            <span>{post.post_title}</span>
          </p>
          <div className=" d-flex font2">
            <div className="flex-grow-1 ">
              By{" "}
              <span className="bold-2 cursor-pointer ">
                {" "}
                <span>{post.post_author}</span>
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
              {post.post_date}
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
              View : {post.view}
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
            src={post.thumbnail}
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
          <div className='d-flex flex-column justify-content-start align-items-start' style={{}} dangerouslySetInnerHTML={{ __html: post.content }} />
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

export default PostComponent;
