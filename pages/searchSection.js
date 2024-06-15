import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";
import search from "../public/images1/Search (1).svg";


import { Form, FormControl } from "react-bootstrap";

const ListItem = ({ imageSrc, title, author, postid, additionalText, category, date }) => {
  const router = useRouter();

  const handleCardClick = () => {
    const dataToPass = {
      postid,
      title, 
      image: imageSrc, 
      author,
      date,
      // views: card.views, 
    };
    sessionStorage.setItem('nextPageData', JSON.stringify(dataToPass));
    router.push(`/SinglePost`);
  };

  const generateSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };
  const title1 = { dangerouslySetInnerHTML: { __html: title } };
  return (
    <div className="row pt-md-3 p-lg-3 p-2 m-3 m-lg-0 my-lg-3 bg-light shadow" style={{borderRadius:"5px"}}>
      <div className="col-md-3 col p-0 d-flex align-items-center">
        <img src={imageSrc} style={{ height: "auto", width: "100vw" }} alt="" />
      </div>
      <div className=" cursor-pointer col-md-8 col-9 m-0 pe-1">
        <p
          className="m-0 p-md-0 p-1"
          style={{
            fontSize: ".9rem",
            fontFamily: "Roboto, sans-serif",
            fontWeight: "500",
            whiteSpace: "nowrap",
            overflow: "hidden", // Prevent overflow
            textOverflow: "ellipsis", // Add ellipsis when content overflows
          }}
          // onClick={() => handleCardClick()}
        >
         
            
         <Link href={`/SinglePost?title=${title}&postid=${postid}&image=${imageSrc}&date=${date}&author=${author}`} passHref>

        
<span {...title1} />

</Link>
          
        </p>

        <p
          className="m-0 pt-md-1 px-md-0 p-1"
          style={{
            fontSize: ".9rem",
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

const SearchResult1 = () => {
  const [cards1, setCards1] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchhead, setSearchhead] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false); 
  const router = useRouter();

  // const searchResult = async () => {
  //   setLoading(true); // Set loading to true when starting the API call
  //   setSearchhead(searchText);
  //   try {
  //     const response = await fetch(`/api/searchapi?search_text=${searchText}`);
  //     const data = await response.json();

  //     if (data.result) {
  //       if (data.result === "Sorry, no posts matched your criteria.") {
  //         setCards1([]);
  //         setErrorMessage("Sorry, no posts matched your criteria.");
  //       } else {
  //         const resultArray = JSON.parse(data.result);
  //         const validCards = resultArray.filter((apiCard) => apiCard.id !== undefined);

  //         setCards1((prevState) =>
  //           validCards.map((apiCard) => ({
  //             ...prevState[validCards.indexOf(apiCard)],
  //             title: apiCard.post_title,
  //             imageSrc: apiCard.feature_url,
  //             postid: apiCard.id,
  //             date: apiCard.post_date,
  //             more: apiCard.more,
  //             author: apiCard.display_name,
  //           }))
  //         );
  //         setErrorMessage(null);
  //       }
  //     } else {
  //       console.error("Invalid data format:", data);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     setErrorMessage("Error fetching data. Please try again.");
  //   } finally {
  //     setLoading(false); // Set loading to false after the API call completes
  //   }
  // };


  const fetchSearchResult = () => {
    setLoading(true);
    const formData = new URLSearchParams();
    formData.append('search_text', searchText);
    formData.append('page', '1');
  
    fetch('https://bumppy.com/api/search.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data.length === 0) {
          // Handle case where no posts match the criteria
          setCards1([]);
          setErrorMessage('Sorry, no posts matched your criteria.');
        } else {
          const validCards = data.filter((apiCard) => apiCard.id !== undefined);
  
          setCards1(
            validCards.map((apiCard) => ({
              title: apiCard.post_title,
              imageSrc: apiCard.feature_url,
              postid: apiCard.id,
              date: apiCard.post_date,
              more: apiCard.more,
              author: apiCard.display_name,
            }))
          );
          setErrorMessage(null);
        }
      })
      .catch((error) => {
        console.error('Error fetching article data:', error);
        setCards1([]);
        setErrorMessage('No result found.');
      })
      .finally(() => {
        setLoading(false);
      });
  };
  
  
  

  const handleSearch = () => {
    fetchSearchResult();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSearchResult();
  };
  return (
    <>
      <NavBar />
      <div className=" col-lg-10 col-12 " >
      <div
        className="left-right-padding"
    
      >{searchhead&& 

        <div className="py-3"><h5>{searchhead} - Search Results</h5></div>
      }
      {!searchhead&& 

<div className="py-5"><h3>Search Here</h3></div>
}
        
        <Form inline className="d-flex search-form1" onSubmit={handleSubmit}>
          <FormControl
            type="text"
            placeholder="Search...."
            className="px-5 custom-input-2 search-input1 text-dark"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div variant="primary" className="btn custom-btn1" onClick={handleSearch}>
            Search
          </div>
        </Form>
      </div>

      <div   className="left-right-padding">
        {loading ? (
            <div className="d-flex justify-content-center">
           <div className="loading-ring "></div>
          
           </div>
        ) : (
          <div className=" ">
          
            {errorMessage ? (
              <p>{errorMessage}</p>
            ) : (
              cards1.map((author, index) => (
                <ListItem
                  key={index}
                  imageSrc={author.imageSrc}
                  title={author.title}
                  author={author.author}
                  postid={author.postid}
                  date={author.date}
                
                />
              ))
            )}
          </div>
        )}
      
</div>
</div>
      {/* <Footer /> */}
    </>
  );
};

export default SearchResult1;
