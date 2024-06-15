import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "../../utils/useTranslation";
import useLocale from '../../utils/useLocale';

const MiddleNav = () => {
  const router = useRouter();
  const translate = useTranslation();
  const [locale] = useLocale();
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    // window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='bg-dark p-3 d-flex justify-content-center '>
        <div className='text-white' style={{ fontSize: "22px", fontWeight: "bold" }}>{translate(`Bumppy Media`)}</div>
      </div>
      {/* Mobile View */}
      <div className={` midnavbarContainer py-3 px-0  d-lg-none px-lg-3 shadow bg-white ${isSticky ? 'sticky' : ''}`}>
        <div
          className={`container`}
        >
          <div className="d-flex justify-content-between py-1">
          <Link href={`/categories/[category]`} as={`/categories/Entertainment`} passHref>
              <div className=' text-black  mobileFontSize mid-nav-hover' style={{ fontFamily: 'Poppins, sans-serif' }}>
              {translate(`Entertainment`)}
              </div>
            </Link >
            <Link href={`/categories/[category]`} as={`/categories/E-commerce`} passHref>
              <div className=' text-black  mobileFontSize mid-nav-hover' style={{ fontFamily: 'Poppins, sans-serif' }}>
              {translate(`E-Com`)}
              </div>
            </Link >
            <Link href={`/categories/[category]`} as={`/categories/Education`} passHref>
              <div className=' text-black  mobileFontSize mid-nav-hover' style={{ fontFamily: 'Poppins, sans-serif' }}>
              {translate(`Education`)}
              </div>
            </Link >
            <Link href={`/categories/[category]`} as={`/categories/Health`} passHref>
              <div className=' text-black  mobileFontSize mid-nav-hover' style={{ fontFamily: 'Poppins, sans-serif' }}>
              {translate(`Health`)}
              </div>
            </Link >
            <Link href={`/categories/[category]`} as={`/categories/Lifestyle`} passHref>
              <div className=' text-black  mobileFontSize mid-nav-hover' style={{ fontFamily: 'Poppins, sans-serif' }}>
              {translate(`Lifestyle`)}
              </div>
            </Link >
            <Link href={`/categories/[category]`} as={`categories/Technology`} passHref>
              <div className=' text-black  mobileFontSize mid-nav-hover' style={{ fontFamily: 'Poppins, sans-serif' }}>
              {translate(`Technology`)}
              </div>
            </Link >
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div style={{ paddingLeft: "10rem", paddingRight: "10rem", fontSize: "1.2rem" }} className={` custom-navbar-wrapper-r midnavbarContainer  shadow bg-white ${isSticky ? 'sticky' : ''}`}>
        <div
          className={` px-0 py-3 `}
        >
          <div className="d-flex justify-content-between py-1">
          <Link href={`/categories/[category]`} as={`/categories/Entertainment`} passHref>
              <div className='mobileFontSize' style={{ fontFamily: 'Poppins, sans-serif' }}>
              {translate(`Entertainment`)}
              </div>
            </Link>
            <Link href={`/categories/[category]`} as={`/categories/E-commerce`} passHref>
              <div className='mobileFontSize' style={{ fontFamily: 'Poppins, sans-serif' }}>
              {translate(`E-Com`)}
              </div>
            </Link >
            <Link href={`/categories/[category]`} as={`/categories/Education`} passHref>
              <div className='mobileFontSize' style={{ fontFamily: 'Poppins, sans-serif' }}>
              {translate(`Education`)}
              </div>
            </Link >
            <Link href={`/categories/[category]`} as={`/categories/Health`} passHref>
              <div className='mobileFontSize' style={{ fontFamily: 'Poppins, sans-serif' }}>
              {translate(`Health`)}
              </div>
            </Link >
            <Link href={`/categories/[category]`} as={`/categories/Lifestyle`} passHref>
              <div
                className='mobileFontSize' style={{ fontFamily: 'Poppins, sans-serif' }}>
                {translate(`Lifestyle`)}
              </div>
            </Link >
            <Link href={`/categories/[category]`} as={`/categories/Technology`} passHref>
              <div className='mobileFontSize' style={{ fontFamily: 'Poppins, sans-serif' }}>
              {translate(`Technology`)}
              </div>
            </Link >
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleNav;
