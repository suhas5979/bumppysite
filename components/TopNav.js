import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';

// import {getLatLong} from './../utils/useLocale';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import "/node_modules/flag-icons/css/flag-icons.min.css";

import media from "../public/images/ourProduct/MediaIcon.svg";
import travel from "../public/images/ourProduct/TravelIcon.svg";
import food from "../public/images/ourProduct/FoodIcon.svg";
import payments from "../public/images/ourProduct/PaymentIcon.svg";
import ecom from "../public/images/ourProduct/EComIcon.svg";
import edtech from "../public/images/ourProduct/EdTechIcon.svg";

import { COUNTRIES, getLanguageNameForLocale, getCountryForLocale , getLocaleForCountry} from "../utils/LanguageUtils";
import useTranslation from "../utils/useTranslation";
import useLocale from "../utils/useLocale";

const imagesArray = [
  { img: media, text: "Media", navigateTo: "https://accounts.bumppy.com/" },
  { img: travel, text: "Trawlo", navigateTo: "https://flights.bumppy.com/" },
  { img: food, text: "Chaafo", navigateTo: "https://chaafo.com/" },
  { img: payments, text: "Payments", navigateTo: "https://payments.bumppy.com/" },
  { img: ecom, text: "Shoppek", navigateTo: "https://Shoppek.bumppy.com/" },
  { img: edtech, text: "Ed-Tech", navigateTo: "https://examsnotice.com/" },
];

const TopNav = () => {
  const translate = useTranslation();
  const [locale, setLocale] = useLocale();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setCountry] = useState('India')
  const [selectedlanguage, setLanguage] = useState('English')
  
  const [is2ndDropdownOpen, setIs2ndDropdownOpen] = useState(false)

  const countryDropdownRef = useRef(null);
  const stateDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (stateDropdownRef.current && !stateDropdownRef.current.contains(event.target)) {
        setIs2ndDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };


  useEffect(() => {
    displaySelectedLanguage(locale);
    setCountry(getCountryForLocale(locale).name);
  }, [locale])

  const displaySelectedLanguage = (_locale) => {
    const language = getLanguageNameForLocale(_locale) || 'Hindi';
    setLanguage(language);
  }

  const onCountryChange = async({ name, languages }) => {
    setCountry(name);
    onLanguageChange(languages[0]);
  }

  const onLanguageChange = ({ language, locale: _locale }) => {
    setLanguage(language);
    setLocale(_locale)
  }

  const getFlag = () => {
    return COUNTRIES[selectedCountry].flag;
  }

  return (
    <>
      {/* Top Most Desktop */}
      <div
        style={{ paddingLeft: "10rem", paddingRight: "10rem", height: '2.5rem' }}
        className="bg-white d-none d-lg-flex"
      >
        <div
          className=" d-flex justify-content-start gap-2"
          style={{ width: "100%" }}
        >
          {imagesArray.map((array, index) =>
            <div
              key={index}
              className="d-flex align-items-center text-black gap-1 justify-content-start text-hover2 py-2"

            >
              <Image
                src={array.img}
                height={25}
                width={25}
              />
              <p
                className="d-flex text-black align-items-center mobileFontSize1"
                style={{ fontSize: "0.75rem" }}
                onClick={() => handleLinkClick(array.navigateTo)}
              >
                {translate(`${array.text}`)}
              </p>
            </div>
          )}
        </div>
        <div className="d-flex justify-content-end align-items-center" style={{ width: '100%', display: 'flex !important', flex: 0 }} >
          <div
            ref={stateDropdownRef}
            className="d-flex justify-content-between align-items-center bg-white"
            style={{ zIndex: '2', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem', }}
            id='aboutDropdownContentSec4'
          >
            <span
              className='m-0 d-flex gap-2  align-items-center'
              style={{ cursor: 'pointer', fontWeight: '200', color: '#1D191F' }}
              onClick={() => setIs2ndDropdownOpen(!is2ndDropdownOpen)}
              id='aboutDropdownSpan'
            >
              <p
                className="px-3"
                style={{ paddingTop: "0.1rem", paddingBottom: "0.1rem", border: '0.1rem solid lightGrey', fontSize: '0.8rem', borderRadius: '20vw' }}
                id='aboutDropdownHeading'
              >{selectedlanguage}</p>
            </span>
            {
              is2ndDropdownOpen ?
                <div
                  className="dropdown-content"
                  style={{ border: '1px solid lightGrey', position: 'absolute', zIndex: 900, top: '2.5rem', right: '16rem', }}
                >
                  {COUNTRIES[selectedCountry].languages.map((language, index) => (
                    <a
                      className='menu-item d-flex'
                      onClick={() => onLanguageChange(language)}
                      key={index}
                      id='dropdownItem'
                      style={{ backgroundColor: 'white', color: 'black', cursor: 'pointer', padding: '0.5rem', gap: '0.5rem' }}
                    >
                      <div>{language.language}</div>
                    </a>
                  ))
                  }
                </div>
                : null
            }
          </div>
          <div
            ref={countryDropdownRef}
            className="d-flex justify-content-between align-items-center bg-white"
            style={{ zIndex: '2', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }}
            id='aboutDropdownContentSec4'
          >
            <span
              className='px-2 m-0 d-flex gap-2  align-items-center'
              style={{ cursor: 'pointer', fontWeight: '200', color: '#1D191F' }}
              onClick={() => setIsOpen(!isOpen)}
              id='aboutDropdownSpan'
            >
              <span
                className={getFlag() || "fi fi-in fis"}
                style={{ height: '30px', width: '30px', borderRadius: '60rem' }}
              />
              <p style={{ fontSize: '0.8rem', }} id='aboutDropdownHeading'>{selectedCountry || 'India'}</p>
            </span>
            <div style={{ fontSize: '0.8rem', margin: 0 }} >
              {isOpen ?
                <FaChevronUp onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', fontSize: '0.8rem', }} />
                :
                <FaChevronDown onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', fontSize: '0.8rem', }} />
              }
            </div>
            {
              isOpen && (
                <div className="dropdown-content" style={{ border: '1px solid lightGrey', position: 'absolute', zIndex: 900, top: '2.5rem' }}>
                  {
                    Object.values(COUNTRIES).map((country, index) => (
                      <a className='menu-item d-flex'
                        onClick={(e) => onCountryChange(country)}
                        key={country}
                        id='dropdownItem'
                        style={{ backgroundColor: 'white', color: 'black', cursor: 'pointer', padding: '0.5rem', gap: '0.5rem' }}>
                        <span className={country.flag} style={{ height: '30px', width: '30px', }} />
                        <div>{country.name}</div>
                      </a>
                    ))
                  }
                </div>
              )
            }
          </div>
          <div>
          </div>
        </div>
      </div>
      {/*Top Most Mobile */}
      <div className="p-2 bg-white d-lg-none ">
        <div
          className="d-flex justify-content-between "
          style={{ width: "100%" }}
        >
          <div className=" font-size d-flex  align-items-center">
            <Image
              loading="eager"
              src={media}
              alt="Bumppy Logo"
              width={13}
              height={13}
              className=""
            />
            <span className="p-1" style={{ fontSize: "9px" }}>
              {translate(`Media`)}
            </span>
          </div>
          <div className="font-size d-flex  align-items-center">
            <Image
              loading="eager" src={travel} alt="Bumppy Logo" width={13} height={13} />
            <span
              className="   p-1 "
              style={{ fontSize: "9px" }}
              onClick={() => handleLinkClick("https://flights.bumppy.com/")}
            >
              {translate(` Trawlo`)}
            </span>
          </div>
          <div className="font-size d-flex  align-items-center">
            <Image
              loading="eager" src={food} alt="Bumppy Logo" width={13} height={13} />{" "}
            <span
              className="   p-1 "
              style={{ fontSize: "9px" }}
              onClick={() => handleLinkClick("https://chaafo.com/")}
            >
              {translate(`Food`)}
            </span>
          </div>
          <div className="font-size d-flex  align-items-center">
            <Image
              loading="eager" src={payments} alt="Bumppy Logo" width={13} height={13} />{" "}
            <span
              className="   p-1 "
              style={{ fontSize: "9px" }}
              onClick={() => handleLinkClick("https://payments.bumppy.com/")}
            >
              {translate(`Payment`)}
            </span>
          </div>
          <div className="font-size d-flex  align-items-center">
            <Image
              loading="eager"
              src={ecom}
              alt="Bumppy Logo"
              width={13}
              height={13}
              className=""
            />
            <span
              className=" p-1 "
              style={{ fontSize: "9px" }}
              onClick={() => handleLinkClick("https://examsnotice.com/")}
            >
              {translate(`E-Com`)}
            </span>{" "}
          </div>
          <div className="font-size d-flex  align-items-center">
            <Image
              loading="eager"
              src={edtech}
              alt="Bumppy Logo"
              width={13} // adjust width according to your design
              height={13} // adjust height according to your design
            />
            <span
              className="  p-1 "
              style={{ fontSize: "9px" }}
              onClick={() => handleLinkClick("https://Shoppek.bumppy.com/")}
            >
              {translate(`ED-Tech`)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;