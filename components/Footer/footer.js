import React, {useEffect} from "react";
import Link from "next/link";
import useTranslation from "../../utils/useTranslation";

import { useRouter } from 'next/router';
import BumppyLogo from "../../public/images/BumppyLogo.svg";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import useLocale from "../../utils/useLocale";

import config from '../../public/locales/config.json';

import EdTech from "../../public/images/footer/Ed-Tech.js";
import EComm from "../../public/images/footer/EComm.js";
import Payment from "../../public/images/footer/Payment.js";
import Food from "../../public/images/footer/Food.js";
import Travel from "../../public/images/footer/Travel.js";
import Media from "../../public/images/footer/Media.js";

import Facebook from "../../public/images/footer/Facebook";
import Linkedin from "../../public/images/footer/Linkedin";
import Instagram from "../../public/images/footer/Instagram";

import Image from "next/image";


const configFile = './locales/config.json';
const imagesArray = [
  { Icon: Media, text: "Media", navigateTo: "https://accounts.bumppy.com/" },
  { Icon: Travel, text: "Trawlo", navigateTo: "https://flights.bumppy.com/" },
  { Icon: Food, text: "Chaafo", navigateTo: "https://chaafo.com/" },
  { Icon: Payment, text: "Payments", navigateTo: "https://payments.bumppy.com/" },
  { Icon: EComm, text: "Shoppek", navigateTo: "https://Shoppek.bumppy.com/" },
  { Icon: EdTech, text: "Ed-Tech", navigateTo: "https://examsnotice.com/" },
];

const handleLinkClick = (link) => {
  window.open(link, "_blank");
};

const Footer = () => {

  const router = useRouter();
  const translate = useTranslation();

  const getLastRoute = (route) => {
    const segments= route.split('/');

    let IndexOfLocale = -1;

    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      
      if (config.locales.includes(segment)) {
        IndexOfLocale = i;
        break;
      }
    }
    const newPathname = segments.slice(0, IndexOfLocale + 1).join('/');
    return newPathname; // Return the newPathname
  };

  return (
    <footer
      className="bg-dark text-white text-center align-items-center p-4"
      id="parent-n"
    >
      <div
        className="d-flex justfy-content-start align-items-center"
        id="subParent"
      >
        <div className="d-flex col col-2 d-flex justify-content-start">
          <Image
            src={BumppyLogo}
            alt="Bumppy Logo"
            width={155}
            height={22}
            style={{ transform: "translateX(-10px)" }}
            id="bumppyLogo-n"
          />
        </div>
        <div
          className=" d-flex justify-content-start "
          style={{ gap: "3vw" }}
          id="logos-n"
        >
          {imagesArray.map((item, index) => (
            <div
              key={index}
              className=" d-flex align-items-center text-white justify-content-start gap-2"
              id="footerLogo"
            >
              <item.Icon
                className="svgHover"
                height={25}
                width={25}
              />
              <p
                className="d-flex text-white align-items-center "
                style={{ fontSize: "0.75rem" }}
                id="logoText"
                onClick={() => handleLinkClick(item.navigateTo)}
              >
                {translate(`${item.text}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="d-flex justify-content-between "
        style={{ paddingTop: 40, }} id='footerColumns-n'
      >
        <div
          className="justify-content-start flex-column d-flex text-start"
          style={{ justifyContent: "flex-start" }}
        >
          <h6
            className="d-flex text-white font-weight-light px-1 py-2 font-weight-bold"
            id="mobileViewTextSmall"

            style={{ fontSize: "80%" }}
          >
            {translate(`Company`)}
          </h6>
          <Link href={`/${getLastRoute(router.pathname)}/About`} passHref>
            <Nav.Link
              className=" d-flex text-white font-weight-light px-1 py-2 justify-content-start"
              style={{ fontSize: "80%", fontWeight: "200" }}
              id="links-n"
            >{translate(`About Us`)}
            </Nav.Link>
          </Link>
          <Link href={`/${getLastRoute(router.pathname)}/partner`} passHref>
          <Nav.Link
              className=" d-flex text-white font-weight-light px-1 py-2 justify-content-start"
              style={{ fontSize: "80%", fontWeight: "20" }}
              id="links-n"
            >
              {translate(`Partners`)}
            </Nav.Link>
          </Link>
            <Link href={`/${getLastRoute(router.pathname)}/careers`} passHref>
            <Nav.Link className=" d-flex text-white font-weight-light px-1 py-2 justify-content-start"
              style={{ fontSize: "80%", fontWeight: "200" }}
              id="links-n"
            >{translate(`Careers`)}</Nav.Link>
          </Link>
          
          <Link href={`/${getLastRoute(router.pathname)}/contribute`} passHref>
            <Nav.Link
              className=" d-flex text-white font-weight-light px-1 py-2 justify-content-start"
              style={{ fontSize: "80%", fontWeight: "20" }}
              id="links-n"
            >
              {translate(`Contribute`)}
            </Nav.Link>
          </Link>
        </div>
        <div
          className="justify-content-start flex-column d-flex text-start"
          style={{ justifyContent: "flex-start" }}
        >
          <h6
            className="d-flex text-white font-weight-light px-1 py-2 font-weight-bold"
            id="mobileViewTextSmall"
            style={{ fontSize: "80%" }}
          >
            {translate(`Support`)}
          </h6>
          <Link href={`/${getLastRoute(router.pathname)}/contact-page`} passHref>
            <Nav.Link
              className=" d-flex text-white font-weight-light px-1 py-2 justify-content-start"
              style={{ fontSize: "80%", fontWeight: "20" }}
              id="links-n"
            >
              {translate(`Contact Us`)}
            </Nav.Link>
          </Link>
          <Link href={`/${getLastRoute(router.pathname)}/terms-and-conditions`} passHref>
          <Nav.Link
              className=" d-flex text-white font-weight-light px-1 py-2 justify-content-start"
              style={{ fontSize: "80%", fontWeight: "20" }}
              id="links-n"
            >
              {translate(`Terms & Conditions`)}
            </Nav.Link>
          </Link>
          <Link href={`/${getLastRoute(router.pathname)}/privacy-policy`} passHref>
          <Nav.Link
              className=" d-flex text-white font-weight-light px-1 py-2 justify-content-start"
              style={{ fontSize: "80%", fontWeight: "20" }}
              id="links-n"
            >
              {translate(`Privacy Policy`)}
            </Nav.Link>
          </Link>
          <Link href={`/${getLastRoute(router.pathname)}/refund-policy`} passHref>
          <Nav.Link
              className="d-flex text-white font-weight-light px-1 py-2 justify-content-start"
              style={{ fontSize: "80%", fontWeight: "20" }}
              id="links-n"

            >
              {translate(`Refund Policy`)}
            </Nav.Link>
          </Link>
        </div>
        <div
          className="justify-content-start d-flex flex-column text-start"
          style={{ justifyContent: "flex-start" }}
        >
          <h6
            className=" d-flex text-white font-weight-light px-1 py-2 font-weight-bold"
            id="mobileViewTextSmall"
            style={{ fontSize: "80%" }}
          >
            {translate(`Address`)}
          </h6>
          <a
            className=" d-flex text-white font-weight-light xjustify-content-start cursor-pointer"
            style={{ fontSize: "80%", fontWeight: "20" }}
            href="https://www.google.com/maps/@28.4328442,77.5043291,13.25z?entry=ttu"
            id="links-n"
          >
            {translate(`B-218 I-thum Tower Second Floor Sector -62, Noida, 201301`)}
          </a>
        </div>
        <div
          className="justify-content-start d-flex flex-column text-start"
          style={{ justifyContent: "flex-start" }}
        >
          <h6
            className="d-flex text-white font-weight-light px-1 py-2 font-weight-bold"
            id="mobileViewTextSmall"
            style={{ fontSize: "80%" }}
          >
            {translate(`Follow Us`)}
          </h6>
          <h6
            className="d-flex text-white align-items-center px-1 py-2 text-start "
            style={{ gap: "0.2rem" }}
            id="icons-n"
          >
            <Facebook
              className="svgHover"
              height={30}
              width={30}
              onClick={() =>
                handleLinkClick("https://www.facebook.com/BumppyOfficial/")
              }
            />
            <Linkedin
              className="svgHover"
              height={30}
              width={30}
              onClick={() =>
                handleLinkClick(
                  "https://www.linkedin.com/company/bumppy/mycompany/"
                )
              }
            />
            <Instagram
              className="svgHover"
              height={30}
              width={30}
              onClick={() =>
                handleLinkClick("https://www.instagram.com/BumppyOfficial/")
              }
            />
          </h6>
          <div className="justify-content-start align-items-start text-start">
            <a
              className=" d-flex text-white text-left font-weight-light px-1 py-2 justify-content-start"
              style={{ fontSize: "80%", fontWeight: "20" }}
              id="mobileViewTextSmall"
            >
              {translate(`© All Rights Reserved With Bumppy Media Pvt Ltd`)}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;