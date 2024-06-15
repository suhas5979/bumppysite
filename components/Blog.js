import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Technologyslider from "./Technologyslider";
import Entertainmentslider from "./entertainmentslider";
import PaymentSlider from "./paymentslider";
import BlogInside from "./BlogInside";

const ListItem = ({ imageSrc, title, author, postid, screenWidth }) => {

  const router = useRouter();
  const titleFontSize = screenWidth < 768 ? ".9rem" : ".9rem";
  const authorFontSize = screenWidth < 768 ? ".9rem" : ".9rem";
  const truncatedTitle = title.length > 20 ? title.slice(0, 23) + "..." : title;

  const handleCardClick = (card) => {
    const dataToPass = {
      postid: postid,
      title: title,
    };
    sessionStorage.setItem('nextPageData', JSON.stringify(dataToPass));
    router.push(`/SinglePost/${generateSlug(title)}`);
  };
  const generateSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className="row pt-md-3 pt-2">
      <div className="col-md-3 col  p-0 d-flex align-items-center">
        <img src={imageSrc} style={{ height: "5rem", width: '10rem', borderRadius: "10px" }} alt="" />
      </div>
      <div className="col-md-8 col-9 m-0 pe-1">
        <p
          className="m-0 p-md-0 p-1 cursor-pointer"
          style={{
            fontSize: titleFontSize,
            fontFamily: "Roboto, sans-serif",
            fontWeight: "500",
            whiteSpace: "nowrap",
          }}
          onClick={() => handleCardClick()}
        >
          {truncatedTitle}
        </p>
        <p
          className="m-0 pt-md-1 px-md-0 p-1"
          style={{
            fontSize: authorFontSize,
            color: "#6d6d6d",
            fontFamily: "Roboto, sans-serif",
            fontWeight: "400",
          }}
        >
          {author}
        </p>
      </div>
    </div>
  );
};
const Blog = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [screenWidth, setScreenWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const ads = [
    "/images/image1/add1.jpg",
    "/images/image1/add1.jpg",
  ];
  const tags = [
    "Business",
    "Corporate",
    "Finance",
    "Invest",
    "Planning",
    "Sport",
    "News",
  ];
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        const width = window.innerWidth;
        let cards = 3;

        if (width < 992) {
          cards = 2;
        }
        if (width < 768) {
          cards = 1;
        }
        if (width < 375) {
          cards = 1;
        }
        setScreenWidth(width);
        setVisibleCards(cards);
      }
    };
    const handleScroll = () => {
      const targetElement = document.getElementById("end-of-first-column");
      if (targetElement) {
        const bounding = targetElement.getBoundingClientRect();
        const sticky = bounding.top <= 0;
        setIsSticky(sticky);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };
  return (
    <>
      <div className="d-flex mt-5 mb-5 justify-content-between" style={{ overflow: "hidden", height: "auto", marginRight: '10rem' , marginLeft: '10rem'}} id='blogMobileView'>
        <div className=" col-md-9 col-12 m-0"  id='blogListMobileView'>
          <PaymentSlider />
          <Entertainmentslider />
          <Technologyslider />
        </div>
        <div className="col-md-3 col-12 p-md-0 mt-md-4 mt-2  " id='topAuthListMobileView'>
          <BlogInside />
        </div>
      </div>
    </>
  );
}


export default Blog;