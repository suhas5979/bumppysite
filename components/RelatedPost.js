import React from "react";
import Link from "next/link";


const RelatedPost=({prevSlide, nextSlide, displayedCards })=>{
  
    return(
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
                    bottom:0, 
                    background: 'rgba(0, 0, 0, 0.5)',
                    left:0,
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
                    {/* {  card.text} */}
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
    )
}
export default RelatedPost;