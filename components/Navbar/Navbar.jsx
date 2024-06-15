import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import BumppyLogo from "../../public/images1/Bumppy_logo.png";
import search from "../../public/images1/Search (1).svg";
import TopNav from "../TopNav";

import { useRouter } from "next/router";

import useTranslation from "../../utils/useTranslation";

import {
  COUNTRIES,
  getLanguageNameForLocale,
  getCountryForLocale,
} from "../../utils/LanguageUtils";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import useLocale from "../../utils/useLocale";

const NavBar = () => {
  const router = useRouter();
  const translate = useTranslation();

  const [isSticky, setSticky] = useState(false);

  const [locale, setLocale] = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setCountry] = useState("India");
  const [selectedlanguage, setLanguage] = useState("English");

  const [is2ndDropdownOpen, setIs2ndDropdownOpen] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  const [showDiv, setShowDiv] = useState(false);
  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);
  const divRef = useRef(null);

  const [selectedMenu, setSelectedMenu] = useState("product");

  const handleMouseLeave = () => {
    if (!isMouseOverNavbar() && !isMouseOverDiv()) {
      setShowDiv(false);
    }
  };

  const handleDivMouseEnter = () => {
    setShowDiv(true);
  };

  const handleDivMouseLeave = () => {
    if (!isMouseOverNavbar()) {
      setShowDiv(false);
    }
  };

  const isMouseOverNavbar = () => {
    return (
      navbarRef.current && navbarRef.current.contains(document.activeElement)
    );
  };

  const isMouseOverDiv = () => {
    return divRef.current && divRef.current.contains(document.activeElement);
  };

  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const closeAllDropdowns = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
  };

  const items = [{ id: 1, label: "Item 1", url: "/item1" }];

  const [settings, setSettings] = useState({
    showTopNavBar: true,
  });

  const onCountryChange = ({ name, languages }) => {
    setCountry(name);
    onLanguageChange(languages[0]);
    setIs2ndDropdownOpen(!is2ndDropdownOpen);
  };

  const onLanguageChange = ({ language, locale: _locale }) => {
    setLanguage(language);
    setLocale(_locale);
  };

  const displaySelectedLanguage = (_locale) => {
    const language = getLanguageNameForLocale(_locale) || "Hindi";
    setLanguage(language);
  };

  const getFlag = () => {
    return COUNTRIES[selectedCountry].flag;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const loadedSettings =
      JSON.parse(localStorage.getItem("componentVisibility")) || settings;
    setSettings(loadedSettings);
  }, []);

  useEffect(() => {
    displaySelectedLanguage(locale);
    setCountry(getCountryForLocale(locale).name);
  }, [locale]);

  const [activeTab1, setActiveTab1] = useState("");

  useEffect(() => {
    // Extract pathname from router object
    const { pathname } = router;
    // Determine active tab based on pathname
    if (pathname === "/") {
      setActiveTab1("Home");
    } else if (pathname === "/contact-page") {
      setActiveTab1("Contact  ");
    } else if (pathname === "/About") {
      setActiveTab1("Company  ");
    } else if (pathname === "/careers") {
      setActiveTab1("Company  ");
    } else {
      setActiveTab1("");
    }
  }, [router]);

  return (
    <>
      <div
        className={` midnavbarContainerNavbar shadow bg-white ${
          isSticky ? "sticky" : ""
        }`}
      >
        <TopNav />
        {/* Navbar DeskTOP */}
        <div
          style={{ paddingLeft: "10rem", paddingRight: "10rem" }}
          className="bg-dark custom-navbar-wrapper-r py-1 "
        >
          <Navbar
            bg="dark"
            color="white"
            expand="lg"
            className="row "
            style={{ fontSize: "0.9rem" }}
            ref={dropdownRef}
          >
            <Container fluid={true}>
              <Link href={`/`} passHref>
                <Navbar.Brand
                  className=" col-2 d-flex align-items-center"
                  onMouseEnter={() => {
                    handleMouseLeave();
                  }}
                >
                  <Image
                    loading="eager"
                    src={BumppyLogo}
                    alt="Bumppy Logo"
                    width={130}
                    height={20}
                  />
                </Navbar.Brand>
              </Link>
              <Navbar.Collapse
                id="basic-navbar-nav "
                className="text-white m-0 p-0 "
              >
                <Nav className=" col-8 ml-auto flex-grow-1 col ml-auto d-flex justify-content-center align-items-center">
                  <Link href={`/${locale}/`} passHref>
                    <Nav.Link
                      className={` p-0 px-4 hover-css ${
                        activeTab1 === "Home" ? "text-warning" : "text-white"
                      } `}
                    >
                      {translate(`Home`)}
                    </Nav.Link>
                  </Link>
                  <NavDropdown
                    title={
                      <span className="text-white p-0 hover-css">
                        {translate(`Product`)}
                      </span>
                    }
                    id="product-dropdown"
                    className="custom-dropdown  p-0"
                    style={{ fontSize: "0.9rem" }}
                    onMouseLeave={() => {
                      closeAllDropdowns();
                    }}
                  >
                    <div className="nested-dropdown">
                      <div
                        className="dropdown-header "
                        onClick={() =>
                          handleLinkClick("https://payments.bumppy.com/")
                        }
                        style={{
                          display: "inline-block",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {translate(`Payments`)}
                      </div>
                      {isOpen1 && (
                        <div className="dropdown-items">
                          ``
                          {items.map((item) => (
                            <Link key={item.id} href={item.url}>
                              <a className="dropdown-item">Nested Items</a>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="nested-dropdown">
                      <div
                        className="dropdown-header"
                        onClick={() => handleLinkClick("https://chaafo.com/")}
                      >
                        {translate(`Chaafo`)}
                      </div>
                      {isOpen2 && (
                        <div className="dropdown-items">
                          {items.map((item) => (
                            <Link key={item.id} href={item.url}>
                              <a className="dropdown-item">Nested Items</a>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="nested-dropdown">
                      <div
                        className="dropdown-header"
                        onClick={() =>
                          handleLinkClick("https://flights.bumppy.com/")
                        }
                      >
                        {translate(`Trawlo`)}
                      </div>
                      {isOpen3 && (
                        <div className="dropdown-items">
                          {items.map((item) => (
                            <Link key={item.id} href={item.url}>
                              <a className="dropdown-item">Nested Items</a>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="nested-dropdown">
                      <div
                        className="dropdown-header"
                        // onClick={toggleDropdown4}
                        onClick={() =>
                          handleLinkClick("https://examsnotice.com/")
                        }
                      >
                        {translate(`Exam Notice`)}
                      </div>
                      {isOpen4 && (
                        <div className="dropdown-items">
                          {items.map((item) => (
                            <Link key={item.id} href={item.url}>
                              <a className="dropdown-item">Nested Items</a>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="nested-dropdown">
                      <div
                        className="dropdown-header"
                        onClick={() =>
                          handleLinkClick("https://Shoppek.bumppy.com/")
                        }
                      >
                        {translate(`Shoppek`)}
                      </div>
                      {isOpen5 && (
                        <div className="dropdown-items">
                          {items.map((item) => (
                            <Link key={item.id} href={item.url}>
                              <a className="dropdown-item">Nested Items</a>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </NavDropdown>

                  <NavDropdown
                    title={
                      <span className="text-white p-0 hover-css">
                        {translate(`Company`)}
                      </span>
                    }
                    id="product-dropdown"
                    className="custom-dropdown  p-0"
                    style={{ fontSize: "0.9rem" }}
                    onMouseLeave={() => {
                      closeAllDropdowns();
                    }}
                  >
                    <div className="nested-dropdown">
                      <Link href={`/${locale}/About`} passHref>
                        <div
                          className="dropdown-header "
                          style={{
                            display: "inline-block",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {translate(`About Us`)}
                        </div>
                      </Link>
                    </div>
                    <div className="nested-dropdown">
                      <Link href={`/${locale}/careers`} passHref>
                        <div className="dropdown-header">
                          {translate(`Careers`)}
                        </div>
                      </Link>
                    </div>
                  </NavDropdown>

                  <Link href={`/${locale}/contact-page`} passHref>
                    <Nav.Link
                      className={` p-0 px-4  ${
                        activeTab1 === "Contact" ? "text-warning" : "text-white"
                      } $ {hover-css} `}
                    >
                      {translate(`Contact Us`)}
                    </Nav.Link>
                  </Link>
                </Nav>
                <Nav className=" col ml-auto flex-grow-1 d-flex justify-content-end align-items-center">
                  <Link href="/searchSection" passHref>
                    <Nav.Link className="text-white p-0 px-4 pt-2 ">
                      <Image
                        loading="eager"
                        src={search}
                        alt="Search"
                        width={20}
                        height={20}
                        className="d-flex align-items-center  "
                      />
                    </Nav.Link>
                  </Link>
                  <Nav.Link href="/Login" className="text-white p-0">
                    {translate(` Login`)}
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        {/* Navbar Mobile */}
        <div className="bg-dark d-lg-none">
          <Navbar
            bg="dark"
            color="white"
            expand="lg"
            className=" px-4 py-2 d-flex "
          >
            <div className="container d-flex justify-content-between align-items-center">
              <Navbar.Brand href="/" className="new-class-name">
                <Image
                  loading="eager"
                  src={BumppyLogo}
                  alt="Bumppy Logo"
                  width={130}
                  height={20}
                />
              </Navbar.Brand>
              <div className="d-flex align-items-center justify-content-center">
                <div
                  className="d-flex justify-content-end align-items-center"
                  style={{ width: "100%", display: "flex !important" }}
                >
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      zIndex: "2",
                      borderTopLeftRadius: "0.5rem",
                      borderTopRightRadius: "0.5rem",
                    }}
                    id="aboutDropdownContentSec4"
                  >
                    <span
                      className="px-2 m-0 d-flex gap-2  align-items-center"
                      style={{
                        cursor: "pointer",
                        fontWeight: "200",
                        color: "#1D191F",
                      }}
                      onClick={() => setIsOpen(!isOpen)}
                      id="aboutDropdownSpan"
                    >
                      <span
                        className={getFlag() || "fi fi-in fis"}
                        style={{
                          height: "30px",
                          width: "30px",
                          borderRadius: "60rem",
                        }}
                      />
                    </span>
                    {isOpen && (
                      <div
                        className="dropdown-content"
                        style={{
                          border: "1px solid lightGrey",
                          position: "absolute",
                          zIndex: 900,
                          top: "2.5rem",
                        }}
                      >
                        {Object.values(COUNTRIES).map((country, index) => (
                          <a
                            className="menu-item d-flex"
                            onClick={(e) => onCountryChange(country)}
                            key={country}
                            id="dropdownItem"
                            style={{
                              backgroundColor: "white",
                              color: "black",
                              cursor: "pointer",
                              padding: "0.5rem",
                              gap: "0.5rem",
                            }}
                          >
                            <span
                              className={country.flag}
                              style={{ height: "30px", width: "30px" }}
                            />
                            <div>{country.name}</div>
                          </a>
                        ))}
                        {is2ndDropdownOpen ? (
                          <div
                            className="dropdown-content"
                            style={{
                              border: "1px solid lightGrey",
                              position: "absolute",
                              zIndex: 900,
                              top: "2.5rem",
                              right: "8.5rem",
                            }}
                          >
                            {COUNTRIES[selectedCountry].languages.map(
                              (language, index) => (
                                <a
                                  className="menu-item d-flex"
                                  onClick={() => onLanguageChange(language)}
                                  key={index}
                                  id="dropdownItem"
                                  style={{
                                    backgroundColor: "white",
                                    color: "black",
                                    cursor: "pointer",
                                    padding: "0.5rem",
                                    gap: "0.5rem",
                                  }}
                                >
                                  <div>{language.language}</div>
                                </a>
                              )
                            )}
                          </div>
                        ) : null}
                      </div>
                    )}
                  </div>

                  <div></div>
                </div>
                <Navbar.Toggle
                  aria-controls="m-0 p-0 "
                  className="custom-navbar-toggler align-items-center mt-0  d-flex"
                  style={{ backgroundColor: "#252525" }}
                >
                  <span
                    className="navbar-toggler-icon"
                    style={{
                      backgroundImage: 'url("/images1/icons8-menu (1).svg")',
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      width: "30px",
                    }}
                  />
                </Navbar.Toggle>
              </div>
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="text-white m-0 p-0 ml-auto"
              >
                <Nav className="mr-auto">
                  <Link href="/" passHref>
                    <Nav.Link
                      className={`custom-dropdown p-2 hover-css ${
                        activeTab1 === "Home" ? "text-warning" : "text-white"
                      } `}
                    >
                      {translate(`Home`)}
                    </Nav.Link>
                  </Link>
                  <NavDropdown
                    title={
                      <span className="text-white hover-css">
                        {" "}
                        {translate(`Product`)}
                      </span>
                    }
                    id="product-dropdown"
                    className="custom-dropdown p-2"
                    style={{ fontSize: "0.9rem" }}
                  >
                    <NavDropdown.Item
                      href="#nested/1"
                      style={{ fontSize: "0.9rem" }}
                      onClick={() =>
                        handleLinkClick("https://payments.bumppy.com/")
                      }
                    >
                      {translate(` Payments`)}
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      href="#nested/1"
                      style={{ fontSize: "0.9rem" }}
                      onClick={() => handleLinkClick("https://chaafo.com/")}
                    >
                      {translate(`Chaafo`)}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#nested/1"
                      style={{ fontSize: "0.9rem" }}
                      onClick={() =>
                        handleLinkClick("https://flights.bumppy.com/")
                      }
                    >
                      {translate(`Flights `)}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#nested/1"
                      style={{ fontSize: "0.9rem" }}
                      onClick={() =>
                        handleLinkClick("https://Shoppek.bumppy.com/")
                      }
                    >
                      {translate(`Ed-Tech  `)}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#nested/1"
                      style={{ fontSize: "0.9rem" }}
                      onClick={() =>
                        handleLinkClick("https://examsnotice.com/")
                      }
                    >
                      {translate(`E-Com  `)}
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title={
                      <span
                        className={` hover-css ${
                          activeTab1 === "Company"
                            ? "text-warning"
                            : "text-white"
                        } `}
                      >
                        {translate(`Company `)}
                      </span>
                    }
                    id="product-dropdown"
                    className="custom-dropdown p-2"
                    style={{ fontSize: "0.9rem" }}
                  >
                    <Link href={`/${locale}/About`} passHref>
                      <NavDropdown.Item style={{ fontSize: "0.9rem" }}>
                        {translate(`About Us  `)}
                      </NavDropdown.Item>
                    </Link>
                    <Link href={`/${locale}/careers`} passHref>
                      <NavDropdown.Item style={{ fontSize: "0.9rem" }}>
                        {translate(` Careers  `)}
                      </NavDropdown.Item>
                    </Link>
                  </NavDropdown>
                  <Link href={`/${locale}/contact-page`} passHref>
                    <Nav.Link
                      className={`custom-dropdown p-2 hover-css ${
                        activeTab1 === "Home" ? "text-warning" : "text-white"
                      } `}
                    >
                      {translate(` Contact Us`)}
                    </Nav.Link>
                  </Link>
                </Nav>
                <Link href="/searchSection" passHref>
                  <Nav.Link className="text-white p-2 ">
                    <span
                      className={`custom-dropdown hover-css ${
                        activeTab1 === "Search" ? "text-warning" : "text-white"
                      } `}
                    >
                      {translate(`Search `)}
                    </span>
                  </Nav.Link>
                </Link>
                <Nav className="ml-auto p-2 ">
                  <Nav.Link href="#login" className="text-white ">
                    {translate(`Login  `)}
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </div>
        {showDiv && selectedMenu != null && (
          <div
            className="transition-div active d-none d-lg-flex "
            onMouseEnter={handleDivMouseEnter}
            onMouseLeave={handleDivMouseLeave}
            ref={divRef}
            style={{ paddingLeft: "10rem", paddingRight: "10rem" }}
          >
            {selectedMenu === "search" && (
              <>
                <div className=" container row col-12 p-0 d-flex pt-4 align-items-center">
                  <Form inline className="d-flex">
                    <Image
                      loading="eager"
                      src={search}
                      alt="Search"
                      width={25}
                      height={25}
                      className="mb-1"
                    />
                    <FormControl
                      type="text"
                      placeholder="Search Bumppy.com"
                      className="p-2 px-4 py-2 custom-input"
                    />
                  </Form>
                  <div
                    className=" row col-2 d-flex px-4 py-1 align-items-center"
                    style={{ color: "#fff" }}
                  >
                    <Link href="/searchresult1" passHref>
                      <a className="bg-white btn btn-small">
                        {" "}
                        {translate(` Search`)}{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
