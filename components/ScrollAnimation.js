// ScrollAnimation.js

import React, { useRef, useEffect } from "react";

const ScrollAnimation = ({ children, className }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fadeInUp");
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return <div ref={elementRef} className={className}>{children}</div>;
};

export default ScrollAnimation;
