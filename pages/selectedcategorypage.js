import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Head from 'next/head';

import useTranslation from "../utils/useTranslation";
import useLocale from "../utils/useLocale";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";
import BlogInside from "../components/BlogInside";
import Pagination from "../components/Pagination";
import { Nav } from "react-bootstrap";

const ListItem = ({
  imageSrc,
  title,
  author,
  postid,
  additionalText,
  category,
  date,
}) => {

  const title1 = { dangerouslySetInnerHTML: { __html: title } };
  return (
    <div
      className="row m-3 m-lg-0 my-lg-3 bg-white shadow"
      style={{ borderRadius: "5px" }}
    >
      <div className="col-md-5 col-12 p-0">
        <img
          src={imageSrc}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            padding: 0,
          }}
          alt=""
        />
      </div>
      <div className="col-md-7 col-12 m-0 py-1">
        <p
          className="m-0  p-1"
          style={{
            fontSize: ".9rem",
            color: "#6d6d6d",
            fontFamily: "Roboto, sans-serif",
            fontWeight: "400",
          }}
        >
          {author}
        </p>
        <p
          className="m-0 p-1 cursor-pointer"
          style={{
            fontSize: "1rem",
            fontFamily: "Roboto, sans-serif",
            fontWeight: "500",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        // onClick={handleCardClick}
        >
          <Link href={`/SinglePost?title=${title}&postid=${postid}&image=${imageSrc}&date=${date}&author=${author}`} passHref>


            <span {...title1} />

          </Link>
        </p>
        <p
          className="m-0 p-1 font2"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 3,
            textOverflow: "ellipsis",
          }}
        >
          {additionalText}
        </p>
        <div className="d-flex ">
          <p className="my-2 font5 flex-grow-1">
            <span className="bg1 p-2" style={{ borderRadius: "10px" }}>
              {" "}
              {category}
            </span>
          </p>
          <p className="font5 m-2">{date}</p>
        </div>
      </div>
    </div>
  );
};

const ListItemTop = ({
  imageSrc,
  title,
  author,
  postid,
  date,
  additionalText,
}) => {
  const router = useRouter();

  // Adjusted handleCardClick to use props directly
  const handleCardClick = () => {
    const dataToPass = {
      postid,
      title,
      image: imageSrc,
      author,
      date,
      // views: card.views,
    };
    sessionStorage.setItem("nextPageData", JSON.stringify(dataToPass));
    router.push(`/SinglePost`);
  };

  const generateSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };
  const title1 = { dangerouslySetInnerHTML: { __html: title } };

  return (
    <div
      className=""
      style={{
        borderRadius: "0px",
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      <div
        className="cursor-pointer"
        style={{ backgroundColor: "rgba(0,0,0,0.3)", width: "100%" }}
      >
        <p
          className="text-white "
          style={{
            fontSize: "0.9rem",
            fontFamily: "Roboto, sans-serif",
            fontWeight: "400",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 2, // Display up to 2 lines
            textOverflow: "ellipsis",
            margin: "0.3rem",
          }}
        // onClick={handleCardClick} 
        >
          <Link href={`/SinglePost?title=${title}&postid=${postid}&image=${imageSrc}&date=${date}&author=${author}`} passHref>
            <span {...title1} />
          </Link>
        </p>
      </div>
    </div>
  );
};

const Categorypage = () => {
  const router = useRouter();
  const [locale]= useLocale();
  const { category } = router.query;

  const translate = useTranslation();

  const [cards1, setCards1] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cards, setCards] = useState([]);

  const cardsPerPage = 5; // You can adjust the number of cards per page

  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Add logic to fetch and display data for the selected page if needed
  };

  const firstCard = cards.length > 0 ? cards[0] : null;
  const secondCard1 = cards.length > 0 ? cards[1] : null;

  const secondCard2 = cards.length > 0 ? cards[2] : null;

  const secondCard3 = cards.length > 0 ? cards[3] : null;

  const secondCard4 = cards.length > 0 ? cards[4] : null;

  const [postDetails, setPostDetails] = useState("");

  useEffect(() => {
    console.log("Checking session storage for post details...");
    const data = sessionStorage.getItem("nextPage");
    console.log("Fetched from session storage:", data);
    if (data) {
      console.log("Setting post details state...");
      setPostDetails(JSON.parse(data));
      sessionStorage.removeItem("postDetails");
    }
  }, []);

  const fetchDataCategory = async () => {
    if (category) {
      const formData = new URLSearchParams();
      formData.append("cat", category);
      formData.append("limit", cardsPerPage);
      formData.append("offset", (currentPage - 1) * cardsPerPage)

      try {
        const response = await fetch(
          "https://bumppy.com/api/testcategory.php",
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
        console.l
        setCards(
          data.map((apiCard) => ({
            title: apiCard.post_title,
            imageSrc: apiCard.feature_url, // Ensure this is the correct property name
            postid: apiCard.id,
            author: apiCard.display_name,
            date: apiCard.post_date,
            views: apiCard.post_views_count,
            additionalText:
              "The dynamic relationship between business and technology has become increasingly intertwined, propelling innovation, shaping industries.",
          }))
        );
      } catch (error) {
        console.error("Error fetching article data:", error);
      }
    }
  };

  useEffect(() => {
    fetchDataCategory();
  }, [category]);

  return (
    <div className="bg-light">
      <Head>
        <title>{category}</title>
        {/* <meta name="description" content={category_description}></meta> */}
        {/* <meta name="keywords" content={category_keywords}></meta> */}

        <meta property="og:site_name" content="Bumppy"></meta>
        <meta property="og:type" content="article"></meta>
        <meta property="og:title" content={category}></meta>
        {/* <meta name="og:description" content={category_description}></meta> */}
        {/* <meta name="og:keywords" content={category_keywords}></meta> */}

        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:title" content={category}></meta>
        {/* <meta name="twitter:description" content={category_description}></meta> */}
        {/* <meta name="twitter:keywords" content={category_keywords}></meta> */}
        <meta name="google" content="nositelinkssearchbox"></meta>

      </Head>
      <NavBar />
      <div className="left-right-paddingOnly">
        <p className="font2 text-gray d-flex">
        <Link href={`/${locale}/`} passHref>
                    <Nav.Link
                      className="text-gray"
                    >
                      {translate(`Home`)}
                    </Nav.Link>
                  </Link>
                  {">"} {category}

        </p>
        <p className="single-post-title2 ">{category}</p>
      </div>
      <div className=" d-none d-lg-flex  justify-content-between left-right-padding category-height">
        <div className="col-12  col-lg-6">
          {firstCard && (
            <ListItemTop
              key={0}
              imageSrc={firstCard.imageSrc}
              title={firstCard.title}
              author={firstCard.author}
              postid={firstCard.postid}
              additionalText={firstCard.additionalText}
              date={firstCard.date}
              views={firstCard.views}
            />
          )}
        </div>
        <div className=" row col-12  col-lg-6  ">
          <div className="col-12  col-lg-6 mb-4">
            {firstCard && (
              <ListItemTop
                key={0}
                imageSrc={secondCard1.imageSrc}
                title={secondCard1.title}
                author={secondCard1.author}
                postid={secondCard1.postid}
                additionalText={secondCard1.additionalText}
                date={secondCard1.date}
                views={secondCard1.views}
              />
            )}
          </div>
          <div className="col-12  col-lg-6 mb-4">
            {firstCard && (
              <ListItemTop
                key={0}
                imageSrc={secondCard2.imageSrc}
                title={secondCard2.title}
                author={secondCard2.author}
                postid={secondCard2.postid}
                additionalText={secondCard2.additionalText}
                date={secondCard2.date}
                views={secondCard2.views}
              />
            )}
          </div>
          <div className="col-12  col-lg-6 ">
            {firstCard && (
              <ListItemTop
                key={0}
                imageSrc={secondCard3.imageSrc}
                title={secondCard3.title}
                author={secondCard3.author}
                postid={secondCard3.postid}
                additionalText={secondCard3.additionalText}
                date={secondCard3.date}
                views={secondCard3.views}
              />
            )}
          </div>
          <div className="col-12  col-lg-6 ">
            {firstCard && (
              <ListItemTop
                key={0}
                imageSrc={secondCard4.imageSrc}
                title={secondCard4.title}
                author={secondCard4.author}
                postid={secondCard4.postid}
                additionalText={secondCard4.additionalText}
                date={secondCard4.date}
                views={secondCard4.views}
              />
            )}
          </div>
        </div>
      </div>
      <div className="d-flex mt-2 mb-5 justify-content-between" style={{ paddingRight: '10rem', paddingLeft: '10rem' }} id='blogMobileView'>
        <div className=" col-lg-9 col-12 bg-light" id='blogListMobileView'>
          <div className=" " style={{ paddingRight: '4rem' }} id='blogListMobileView'>
            {currentCards.map((card, index) => (
              <ListItem
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                author={card.author}
                postid={card.postid}
                additionalText={card.additionalText}
                category={category} // Assuming 'category' comes from a higher scope
                date={card.date}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(cards.length / cardsPerPage)}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
            onPageClick={handlePageClick}
          />
        </div>
        <div className="col-md-3 col-12 p-md-0 mt-md-4 mt-2  " id='topAuthListMobileView'>
          <BlogInside />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categorypage;
