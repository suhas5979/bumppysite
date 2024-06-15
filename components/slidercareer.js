import React, { Component } from "react";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDragging: false,
      isAutoSliding: false,
      startX: 0,
      translateX: 0,
      autoSlideInterval: null,
    };
    this.sliderRef = React.createRef();
    this.observer = null; 
  }

  componentDidMount() {
    // Initialize the intersection observer
    this.observer = new IntersectionObserver(this.handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when at least 50% of the component is visible
    });
    this.observer.observe(this.sliderRef.current); // Start observing the slider component
  }

  componentWillUnmount() {
    // Disconnect the observer when the component unmounts
    if (this.observer) {
      this.observer.disconnect();
    }
    this.stopAutoSlide();
  }

  // Intersection observer callback
  handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // If the component is intersecting with the viewport, start auto sliding
        this.startAutoSlide();
      } else {
        // If the component is not intersecting, stop auto sliding
        this.stopAutoSlide();
      }
    });
  };

  startAutoSlide = () => {
    const autoSlideInterval = setInterval(this.autoSlide, 3000);
    this.setState({ autoSlideInterval });
  };

  stopAutoSlide = () => {
    clearInterval(this.state.autoSlideInterval);
  };
handleMouseMove = (event) => {
  if (this.state.isDragging) {
    const newTranslateX = event.pageX - this.state.startX;
    const sliderWidth = document.querySelector(".slider-content").scrollWidth;
    const windowWidth = window.innerWidth;
    const slideWidth = windowWidth;
    const maxTranslateX = -(sliderWidth - slideWidth);

    const restrictedTranslateX = Math.max(maxTranslateX, Math.min(0, newTranslateX));

    this.setState({
      translateX: restrictedTranslateX,
    });
  }
};

autoSlide = () => {
  const { translateX } = this.state;
  const sliderWidth = document.querySelector(".slider-content").scrollWidth;
  const windowWidth = window.innerWidth;
  const slideWidth = windowWidth;
  let remainingDistance = slideWidth - (Math.abs(translateX) % slideWidth);

  if (remainingDistance < slideWidth / 2) {
    remainingDistance = 0;
  }

  let newTranslateX = translateX - remainingDistance;

  const maxTranslateX = -(sliderWidth - slideWidth);
  newTranslateX = Math.max(maxTranslateX, Math.min(0, newTranslateX));

  this.setState({ translateX: newTranslateX });

  clearInterval(this.state.autoSlideInterval);
  const autoSlideInterval = setInterval(this.autoSlide, 3000);
  this.setState({ autoSlideInterval });
};

  handleMouseDown = (event) => {
    event.preventDefault();
    const startX = event.pageX - this.state.translateX;
    this.setState({
      isDragging: true,
      startX: startX,
    });
  };

  // handleMouseMove = (event) => {
  //   if (this.state.isDragging) {
  //     const newTranslateX = event.pageX - this.state.startX;
  //     this.setState({
  //       translateX: newTranslateX,
  //     });
  //   }
  // };

  handleMouseUp = () => {
    this.setState({
      isDragging: false,
    });
  };
  handleMouseLeave = () => {
    this.startAutoSlide();
  };

  render() {
    const { translateX } = this.state;
    const transition = this.state.isDragging ? "none" : "transform 0.5s ease";

    return (
      <div
        className="slider "
        onMouseEnter={this.stopAutoSlide}
        // onMouseLeave={this.restartAutoSlide}
        ref={this.sliderRef} 
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
        onMouseLeave={this.handleMouseLeave}
        style={{
          background: "#f9f9f9",
          position: "relative",
          overflow: "hidden",
          cursor: this.state.isDragging ? "grabbing" : "grab",
        }}
      >
        <div
          className="slider-content"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: transition,
          }}
        >
          <div className="slide">
            <div className="text-center ps-md-3" style={{ background: "#F9F9F9" }}>
              <div className="row mx-md-5">
                <div className="col-12 col-md-5 order-md-last">
                  <div>
                    <img
                      className="mb-5"
                      style={{ height: "25rem" }}
                      src="/images/image1/m1.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-md-7 col-12 px-md-5 px-3 pt-md-5 pb-md-3 d-flex justify-content-center align-items-center">
                  <div className="m-md-5 m-2" style={{ textAlign: "start" }}>
                    <p
                      className="p-0  py-4  m-0"
                      style={{
                        color: "#000",
                        fontSize: ".8rem",
                        fontWeight: "400",
                      }}
                    >
                      01/02
                    </p>
                    <p
                      className="p-0 m-0 single-post-title2"
                      style={{
                        color: "#252525",
                      
                        fontWeight: "500",
                      }}
                    >
                    Diversity - Our foundation, our strength
                    </p>
                    <p
                      className="p-0 m-0 py-4 "
                      style={{
                        color: "#000",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "100",
                        
                      }}
                    >
                      Acquiring and honing skills is the cornerstone of personal
                      and professional development. At our company, we recognize
                      the importance of fostering a culture of continuous
                      learning and skill enhancement. Whether you're a seasoned
                      professional or just starting your career, we provide
                      opportunities for you to expand your skill set, develop
                      new talents, and stay ahead in today's competitive
                      landscape.
                      
                    </p>
                    <button
                      className="p-0 m-0  mt-1 mt-md-3 read-more-button-slider"
                      style={{
                        background: "none",
                        fontSize: ".9rem",
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slide d-flex  align-items-end " style={{ background: "#F9F9F9" }}>
            <div className="text-center ps-md-5" style={{ background: "#F9F9F9" }}>
              <div className="row mx-md-5">
                <div className="col-12 px-md-5 px-5  col-md-5 order-md-last d-flex  align-items-end ">
                  <div>
                    <img
                      className="mt-5"
                      // style={{ height: "22rem" }}
                      src="/images/image1/m2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-7 col-12 px-md-5 px-4 pt-md-5 pb-md-3 d-flex justify-content-center align-items-center">
                  <div className="m-md-5 m-2" style={{ textAlign: "start" }}>
                    <p
                      className="p-0 py-4 m-0"
                      style={{
                        color: "#000",
                        fontSize: ".9rem",
                        fontWeight: "400",
                      }}
                    >
                      02/02
                    </p>
                    <p
                      className="p-0 m-0 single-post-title2"
                      style={{
                        color: "#252525",
                        // fontSize: "1.2rem",
                        fontWeight: "500",
                      }}
                    >
                    Empowering diversity in our workforce
                    </p>
                    <p
                      className="p-0 py-4 m-0 "
                      style={{
                        color: "#000",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "100",
                      }}
                    >
                      Embark on a rewarding career journey with us and unlock
                      new opportunities for growth and advancement. As a dynamic
                      and forward-thinking company, we offer a wide range of
                      career paths tailored to suit your interests, skills, and
                      aspirations. Whether you're passionate about technology,
                      marketing, finance, or operations, we have a place for you
                      to thrive and excel.
                    </p>
                    <button
                      className="p-0 m-0 mt-1 mt-md-3 read-more-button-slider"
                      style={{
                        background: "none",
                        fontSize: ".9rem",
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

       
        </div>
      </div>
    );
  }
}

export default Slider;