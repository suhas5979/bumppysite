import Image from "next/image";
import React, { useState, useEffect } from 'react';



const NavApple = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);

  const handleSearchClick = () => {
    setIsSearchVisible(true);
  };

  const handleCloseClick = () => {
    setIsSearchVisible(false);
  };

  const handleOverlayClick = () => {
    setIsSearchVisible(false);
  };

  const handleMenuIconClick = () => {
    setIsMobileSearchActive(!isMobileSearchActive);
  };

  const handleSearchInputClick = () => {
    setIsMobileSearchActive(true);
  };

  const handleCancelBtnClick = () => {
    setIsMobileSearchActive(false);
  };

  return (
 <>
 <div class="nav-container">
        <nav>
            <ul class="mobile-nav">
                <li>
                    <div class="menu-icon-container">
                        <div class="menu-icon">
                            <span class="line-1"></span>
                            <span class="line-2"></span>
                        </div>
                    </div>
                </li>

                <li>
                    <a href="#" class="link-logo"></a>
                </li>

                <li>
                    <a href="" class="link-bag"></a>
                </li>
            </ul>

            <ul class="desktop-nav">
                <li>
                    <a href="#" class="link-logo"></a>
                </li>
                <li>
                    <a href="#">Mac</a>
                </li>
                <li>
                    <a href="#">iPad</a>
                </li>
                <li>
                    <a href="#">iPhone</a>
                </li>
                <li>
                    <a href="#">Watch</a>
                </li>
                <li>
                    <a href="#">TV</a>
                </li>
                <li>
                    <a href="#">Music</a>
                </li>
                <li>
                    <a href="#">Support</a>
                </li>
                <li>
                    <a href="#" class="link-search"></a>
                </li>
                <li>
                    <a href="#" class="link-bag"></a>
                </li>
            </ul>
        </nav>

         {/* End of navigation menu items  */}

        <div class="search-container hide">
            <div class="link-search"></div>
            <div class="search-bar">
                <form action="">
                    <input type="text" placeholder="Search apple.com"/>
                </form>
            </div>
            <div class="link-close"></div>

            <div class="quick-links">
                <h2>Quick Links</h2>
                <ul>
                    <li>
                        <a href="#">Visiting an Apple Store FAQ</a>
                    </li>
                    <li>
                        <a href="#">Shop Apple Store Online</a>
                    </li>
                    <li>
                        <a href="#">Accessories</a>
                    </li>
                    <li>
                        <a href="#">AirPods</a>
                    </li>
                    <li>
                        <a href="#">AirTag</a>
                    </li>
                </ul>
            </div>
        </div>


        <div class="mobile-search-container">
            <div class="link-search"></div>
            <div class="search-bar">
                <form action="">
                    <input type="text" placeholder="Search apple.com"/>
                </form>
            </div>
            <span class="cancel-btn">Cancel</span>

            <div class="quick-links">
                <h2>Quick Links</h2>
                <ul>
                    <li>
                        <a href="#">Visiting an Apple Store FAQ</a>
                    </li>
                    <li>
                        <a href="#">Shop Apple Store Online</a>
                    </li>
                    <li>
                        <a href="#">Accessories</a>
                    </li>
                    <li>
                        <a href="#">AirPods</a>
                    </li>
                    <li>
                        <a href="#">AirTag</a>
                    </li>
                </ul>
            </div>
        </div>
        

    </div>
    <div class="overlay"></div>
 </>
  );
};

export default NavApple;
