import React, { useState, useEffect } from "react";
import Link from 'next/link';
import useTranslation from "../utils/useTranslation";
import { useRouter } from 'next/router';

const ListItem = ({ imageSrc, title, author, postid, screenWidth, date, views, slug }) => {

  const router = useRouter();
  const titleFontSize = screenWidth < 768 ? ".9rem" : ".9rem";
  const authorFontSize = screenWidth < 768 ? ".9rem" : ".9rem";
  const truncatedTitle =
    title.length > 20 ? title.slice(0, 23) + "..." : title;

  const handleCardClick = (card) => {
    const dataToPass = {
      postid: postid,
      title: title,
      image: imageSrc,
      date: date,
      author: author,
      views: views,

    };
    sessionStorage.setItem('nextPageData', JSON.stringify(dataToPass));
    // router.push(`/SinglePost/${generateSlug(title)}`);
    router.push('/SinglePost', undefined, { force: true }).then(() => {
      window.location.href = '/SinglePost';
    });
  };
  const generateSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };
  const title1 = { dangerouslySetInnerHTML: { __html: title } };

  return (
    <div className="d-flex py-1">
      <div className=" p-0 d-flex align-items-center" style={{ marginRight: '0.5rem' }} id='topAuthImgParent'>
        <img src={imageSrc} style={{ height: "4rem", maxWidth: '4rem', width: 'auto', borderRadius: "10px" }} alt="" />
      </div>
      <div className="d-flex flex-column text-start justify-content-center align-items-start" style={{}}>
        <p
          className=" m-0 p-md-0  cursor-pointer"
          style={{
            fontSize: titleFontSize,
            fontFamily: 'Poppins, sans-serif',
            fontWeight: "500",
            whiteSpace: "nowrap",
            overflow: "hidden", // Prevent overflow
            textOverflow: "ellipsis", // Add ellipsis when content overflows

          }}
        >
          <Link href={`/${slug}`} >
            <span className="cursor-pointer"
              style={{
                textAlign: "start",
                color: "#3E3232",
                fontFamily: 'Poppins, sans-serif',
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                WebkitLineClamp: 2, // Display up to 2 lines
                textOverflow: "ellipsis",
                cursor: "pointer",
              }}
               {...title1} />
          </Link>
        </p>
        <p
          className="m-0 pt-md-1 px-md-0 p-1"
          style={{
            fontSize: authorFontSize,
            color: "#6d6d6d",
            fontFamily: 'Poppins, sans-serif',
            fontWeight: "400",
          }}
        >
          {author}
        </p>
      </div>
    </div>
  );
};
const BlogInside = () => {

  const translate = useTranslation();
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/api/blogpostapi");
  //       const data = await response.json();

  //       if (data.result) {
  //         const resultArray = JSON.parse(data.result);

  //         const validCards = resultArray.filter(apiCard => apiCard.id !== undefined);

  //         setCards((prevState) =>
  //           validCards.map((apiCard) => ({
  //             ...prevState[validCards.indexOf(apiCard)],
  //             title: apiCard.post_title,
  //             imageSrc: apiCard.feature_url,
  //             postid: apiCard.id,
  //             additionalText: "The dynamic relationship between business and technology...",
  //             date: apiCard.post_date,
  //             more: apiCard.more,
  //             author: apiCard.display_name,
  //             // views: apiCard.post_views_count, 
  //           }))
  //         );
  //       } else {
  //         console.error("Invalid data format:", data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const fetchDataBlogs = () => {
    // Prepare form data
    const formData = new URLSearchParams();
    formData.append('page', '8');
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
        setCards(data.map(apiCard => ({
          title: apiCard.post_title,
          imageSrc: apiCard.feature_url,
          postid: apiCard.id,
          additionalText: "The dynamic relationship between business and technology...",
          date: apiCard.post_date,
          more: apiCard.more,
          author: apiCard.display_name,
          // views: apiCard.post_views_count,
          text: apiCard.post_title,
          image: apiCard.feature_url,
          postid: apiCard.id,
          additionalText: "The dynamic relationship between business and technology has become increasingly intertwined, propelling innovation, shaping industries.",
          date: apiCard.post_date,
          more: apiCard.permalink,
          author: apiCard.display_name,
          views: apiCard.post_views_count,
          slug: apiCard.slug // Ensure this property exists or adjust accordingly
        })));

        // Adjust this line based on how your state is managed (e.g., if using useState hook)
      })
      .catch((error) => {
        console.error("Error fetching article data:", error);
      });
  };

  const fetchDataBlogs2 = async () => {
    const formData = new URLSearchParams();
    formData.append("page", "1");

    try {
      const response = await fetch("https://demo.bumppy.com/api2/getBlogPosts.php", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      // console.log("Raw API response:", data);
      // Ensure data is an array before processing
      const resultArray = Array.isArray(data) ? data : [];

      const validCards = resultArray.filter(apiCard => apiCard.id !== undefined);
      // console.log("Fetched data length:", validCards.length);
      // console.log("Fetched data:", validCards);

      setCards(validCards.map(apiCard => ({
        title: apiCard.post_title,
        imageSrc: apiCard.feature_url,
        postid: apiCard.id,
        additionalText: "The dynamic relationship between business and technology...",
        date: apiCard.post_date,
        more: apiCard.more,
        author: apiCard.display_name,
        // views: apiCard.post_views_count,
        text: apiCard.post_title,
        image: apiCard.feature_url,
        postid: apiCard.id,
        additionalText: "The dynamic relationship between business and technology has become increasingly intertwined, propelling innovation, shaping industries.",
        date: apiCard.post_date,
        more: apiCard.permalink,
        author: apiCard.display_name,
        views: apiCard.post_views_count,
        slug: apiCard.slug // Ensure this property exists or adjust accordingly
      })));
    } catch (error) {
      console.error("Error fetching article data:", error);
    }
  };

  useEffect(() => {
    fetchDataBlogs();
  }, []);

  return (
    <div>
      <div
        className=" d-flex pt-4"
        style={{ textAlign: "start", alignItems: "center" }}
      >
        <p
          style={{
            fontSize: "1.1rem",
            fontWeight: "500",
            fontFamily: 'Poppins, sans-serif',

          }}
        >
          {translate(`Popular Tags`)}
        </p>
      </div>
      <div className="mt-2 d-flex flex-wrap" style={{}}>
        {tags.map((tag, index) => (
          <div key={index} className="">
            <p className="tag" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {tag}
            </p>
          </div>
        ))}
      </div>
      <div className="row"  >
        <div
          className="d-flex my-3"
          style={{ textAlign: "start", alignItems: "center" }}
        >
          <p style={{
            fontSize: "1.1rem",
            fontWeight: "500",
            fontFamily: 'Poppins, sans-serif',

          }}>{translate(`Top Authors`)}</p>
        </div>
        <div className="d-flex flex-column" style={{ overflowY: 'auto', height: "99vh", overflowX: 'hidden' }} >
          {cards.map((author, index) => (
            <ListItem
              key={index}
              style={{
                fontFamily: 'Poppins, sans-serif',
              }}
              imageSrc={author.imageSrc}
              title={author.title}
              author={author.author}
              postid={author.postid}
              date={author.date}
              screenWidth={screenWidth}
              slug={author.slug}
            />
          ))}
        </div>
        {/* <div className="mt-2">
          {" "}
          {ads.map((ad, index) => (
            <img
              key={index}
              className="mx-2 mt-2"
              style={{ width: "300px", height: "250px" }}
              src={ad}
              alt={`ad${index}`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default BlogInside;