import React, { useState, useRef, useEffect } from "react";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";

import Link from "next/link";
import Head from 'next/head';
import useTranslation from "../utils/useTranslation";
import { Form, FormControl } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const dataPolicyArray = [
  {
    heading: "What kinds of information do we collect?",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
  {
    heading: "Cookies",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
  {
    heading: "Storage and security of your personal information",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
  {
    heading: "How will we use the information we collect from you?",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
  {
    heading: "Access to your information",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
  {
    heading: "Changes to our Privacy Policy",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
];
const refundPolicyArray = [
  {
    heading: "What kinds of information do we collect?",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
  {
    heading: "Cookies",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
  {
    heading: "Storage and security of your personal information",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
  {
    heading: "How will we use the information we collect from you?",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
  {
    heading: "Access to your information",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
  {
    heading: "Changes to our Privacy Policy",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
];
const cancelpolicyArray = [
  {
    heading: "What kinds of information do we collect?",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
  {
    heading: "Cookies",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
  {
    heading: "Storage and security of your personal information",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
  {
    heading: "How will we use the information we collect from you?",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
  {
    heading: "Access to your information",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
  {
    heading: "Changes to our Privacy Policy",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
];
const cyberPolicyArray = [
  {
    heading: "What kinds of information do we collect?",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
  {
    heading: "Cookies",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
  {
    heading: "Storage and security of your personal information",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
  {
    heading: "How will we use the information we collect from you?",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
  {
    heading: "Access to your information",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
  {
    heading: "Changes to our Privacy Policy",
    content: [
      "Bumppy may use the KYC submitted by you for business purposes. You hereby consent to",
      "• Receiving e-newsletters as well as other communications containing offers etc. and",
      "• Bumppy providing your information to sponsor/s and/or companies associated with it for the purpose of providing you with offers and/or information.",
      "You agree to indemnify, save, and hold Bumppy , its affiliates, contractors, employees, officers, directors, agents and its third party suppliers, licensors, and partners harmless from any and all claims, losses, damages, and liabilities, costs and expenses, including without limitation legal fees and expenses, arising out of or related to your use or misuse of the Services or of the Site, any violation by you of this Agreement, or any breach of the representations, warranties, and covenants made by you herein.",
    ],
  },
];
const Privacy = () => {

  const translate = useTranslation();

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const scrollToSection = (ref, navbarHeight) => {
    const topOffset = ref.current.offsetTop - 100;
    window.scrollTo({ top: topOffset, behavior: 'smooth' });
  };

  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };


  const [openAccordionIndex1, setOpenAccordionIndex1] = useState(null);

  const toggleAccordion1 = (index) => {
    setOpenAccordionIndex1(openAccordionIndex1 === index ? null : index);
  };



  const [openAccordionIndex2, setOpenAccordionIndex2] = useState(null);

  const toggleAccordion2 = (index) => {
    setOpenAccordionIndex2(openAccordionIndex2 === index ? null : index);
  };


  const [openAccordionIndex3, setOpenAccordionIndex3] = useState(null);

  const toggleAccordion3 = (index) => {
    setOpenAccordionIndex3(openAccordionIndex3 === index ? null : index);
  };


  useEffect(() => {
    // Updating isSmallScreen state based on screen width
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 500);
    };

    handleResize(); // Checking the initial screen width
    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // removing event listener on component unmount
    };
  }, []);

  return (
    <>
      <Head>
      <title>Bumppy Privacy Policy</title>
      <meta name="description" content="Bumppy is here for providing you amazing and sparkling content
       with a great privacy policy. When you are surfing Bumppy, then you need not to be worry at all
        because your privacy is highly protected here to make you always comfortable, satisfied and happy."></meta>
        <meta name="keywords" content="entertainment news,celebrity news,celebrity gossip,gossip
         magazines,latest entertainment news"></meta>
         <meta property="og:site_name" content="Bumppy"></meta>
         <meta property="og:type" content="activity"></meta>
         <meta property="og:title" content="Bumppy Privacy Policy"></meta>
         <meta property="og:description" content="Bumppy is here for providing you amazing and sparkling
          content with a great privacy policy. When you are surfing Bumppy, then you need not to be worry
           at all because your privacy is highly protected here to make you always comfortable, satisfied and happy."></meta>
           <meta property="og:url" content="https://www.bumppy.com/privacy-policy/"></meta>
           <meta name="twitter:card" content="summary"></meta>
           <meta name="twitter:title" content="Bumppy Privacy Policy"></meta>
           <meta name="twitter:description" content="Bumppy is here for providing you amazing and sparkling content with
            a great privacy policy. When you are surfing Bumppy, then you need not to be worry at all because your privacy 
            is highly protected here to make you always comfortable, satisfied and happy."></meta>
            



      </Head>
      <NavBar />
      <div className="  left-right-padding-jobs bg-yellow-css ">
        <div className="">
          <div className="row col-12 m-0 p-0 custom-align d-flex justify-centent-between ">
            <div className="col-12 col-lg-6 p-0 m-0 custom-align ">
              <p className="largest-font-size">{translate(`Privacy Policy`)}</p>
              <p className="font-size-1-2-second">
                {" "}
                {translate(`Our policy explains how Bumppy uses your personal information on
                our website and apps.`)}
              </p>
            </div>
            <div className="col-12 col-lg-6 p-0 m-0  d-flex justify-content-end">
              <div>
                <img
                  className=""
                  src="/images1/Privacy_img_1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="left-right-padding-jobs bg-light">
        <p className="largest-font-size">{translate(`Introduction `)}</p>
        <p className="font-size-1-2-second-privacy">
          {" "}
          {translate(`This policy explains how we, Bumppy Media Pvt Ltd. (hereinafter
          referred to as “Bumppy”), use the personal information which you
          provide to us when using our service, including but not limited to our
          website and mobile applications (jointly referred as “Website”).`)}
        </p>
        <p className="font-size-1-2-second-privacy">
          {" "}
          {translate(` Please read this Privacy Policy and understand it before using our
          services.`)}
        </p>
        <p className="font-size-1-2-second-privacy">
          {" "}
          {translate(`By visiting and/or ordering services on this Website, you agree and,
          where required, consent to the collection, use and transfer of your
          information as set out in this policy`)}
        </p>
      </div>

      {/* Section Button */}
      <div className="left-right-padding-jobs ">
        {isSmallScreen ?
          <div className="d-flex flex-column justify-content-center " style={{ height: '50vh' }}>

            <div className="card p-3 mb-4 justify-content-between align-items-start" style={{ borderRadius: 10 }}>
              <span className='pb-2' style={{ fontSize: '1.5rem', fontFamily: 'Poppins, sans-serif', }} >{translate(`Data Policy`)}</span>
              <span style={{ color: 'grey', fontFamily: 'Poppins, sans-serif', }} >{translate(`Learn More`)}</span>
            </div>
            <div className="card p-3 mb-4 justify-content-between align-items-start" style={{ borderRadius: 10 }}>
              <span className='pb-2' style={{ fontSize: '1.5rem', fontFamily: 'Poppins, sans-serif', }} >{translate(`Refund Policy`)}</span>
              <span style={{ color: 'grey', fontFamily: 'Poppins, sans-serif', }} >{translate(`Learn More`)}</span>
            </div>
            <div className="card p-3 mb-4 justify-content-between align-items-start" style={{ borderRadius: 10 }}>
              <span className='pb-2' style={{ fontSize: '1.5rem', fontFamily: 'Poppins, sans-serif', }} >{translate(`Cancellation Policy`)}</span>
              <span style={{ color: 'grey', fontFamily: 'Poppins, sans-serif', }} >{translate(`Learn More`)}</span>
            </div>

          </div>
          :
          <div className="d-flex flex-wrap justify-content-between" style={{ width: '100%' }} >

            <div className="card p-3 mb-4 justify-content-between align-items-center" style={{ width: '32%', height: '18vh', borderRadius: 10 }}>
              <span className='pb-2 text-center' style={{ fontSize: '1.5rem', fontFamily: 'Poppins, sans-serif', }} >{translate(`Data Policy`)}</span>
              <span style={{ color: 'grey', fontFamily: 'Poppins, sans-serif', }} >{translate(`Learn More`)}</span>
            </div>
            <div className="card p-3 mb-4 justify-content-between align-items-center" style={{ width: '32%', height: '18vh', borderRadius: 10 }}>
              <span className='pb-2 text-center' style={{ fontSize: '1.5rem', fontFamily: 'Poppins, sans-serif', }} >{translate(`Refund Policy`)}</span>
              <span style={{ color: 'grey', fontFamily: 'Poppins, sans-serif', }} >{translate(`Learn More`)}</span>
            </div>
            <div className="card p-3 mb-4 justify-content-between align-items-center" style={{ width: '32%', height: '18vh', borderRadius: 10 }}>
              <span className='pb-2 text-center' style={{ fontSize: '1.5rem', fontFamily: 'Poppins, sans-serif', }} >{translate(`Cancellation Policy`)}</span>
              <span style={{ color: 'grey', fontFamily: 'Poppins, sans-serif' }} >{translate(`Learn More`)}</span>
            </div>

          </div>
        }
      </div>

      {/* Data Policy */}

      <div ref={section1Ref} className="  left-right-padding-jobs py-0 bg-yellow-css ">
        <div className="">
          <div className="row col-12 m-0 p-0  custom-align d-flex justify-centent-between ">
            <div className="col-12 col-lg-6 p-0 m-0 custom-align ">
              <p className="largest-font-size">{translate(`Data Policy`)}</p>
              <p className="font-size-1-2-second">
                {" "}
                {translate(`You give some Information, we get some Information. In return,
                we offer useful services.`)}
              </p>
            </div>
            <div className="col-12 col-lg-6 p-0 m-0  d-flex justify-content-end">
              <div>
                <img
                  className=""
                  src="/images1/Data_Policy_img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="left-right-padding-jobs">
        {dataPolicyArray.map((accordion, index) => (
          <div key={index} className="accordion">
            <div
              className="d-flex justify-content-between cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="heading my-2 font-size-1-2-second">
                {accordion.heading}
              </div>
              <div className="toggleButton cursor-pointer btn-open-close d-flex align-items-center">

                {openAccordionIndex == index ?
                  <FaChevronUp style={{ cursor: 'pointer', fontSize: '1rem', }} />
                  :
                  <FaChevronDown style={{ cursor: 'pointer', fontSize: '1rem', }} />
                }
              </div>
            </div>
            <div
              className={`content ${openAccordionIndex === index ? "open" : ""
                }`}
            >
              <div className="py-4">
                {accordion.content.map((paragraph, idx) => (
                  <p key={idx} className="font-size-1-2-second-privacy">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>

      {/* Refund Policy */}
      <div ref={section2Ref} className="  left-right-padding-jobs pe-0 py-0 bg-yellow-css ">
        <div className="">
          <div className="row col-12 m-0 p-0 custom-align d-flex justify-centent-between " >
            <div className="col-11 col-lg-6 p-0 m-0 custom-align " >
              <p className="largest-font-size">{translate(`Refund Policy`)}</p>
              <p className="font-size-1-2-second" style={{marginRight: '1rem'}}>
                {" "}
                {translate(`Tell customers how long they have to ask for their money back.
                This could be anywhere from a few days to a few weeks after they
                pay.`)}
              </p>
            </div>
            <div className="col-12 col-lg-6 p-0 m-0  d-flex justify-content-end">
              <div>
                <img
                  className=""
                  src="/images1/Refund_img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="left-right-padding-jobs">
        {refundPolicyArray.map((accordion, index) => (
          <div key={index} className="accordion">
            <div
              className="d-flex justify-content-between cursor-pointer"
              onClick={() => toggleAccordion1(index)}
            >
              <div className="heading my-2 font-size-1-2-second">
                {accordion.heading}
              </div>
              <div className="toggleButton cursor-pointer btn-open-close d-flex align-items-center">
                {openAccordionIndex == index ?
                  <FaChevronUp style={{ cursor: 'pointer', fontSize: '1rem', }} />
                  :
                  <FaChevronDown style={{ cursor: 'pointer', fontSize: '1rem', }} />
                }
              </div>
            </div>
            <div
              className={`content ${openAccordionIndex1 === index ? "open" : ""
                }`}
            >
              <div className="py-4">
                {accordion.content.map((paragraph, idx) => (
                  <p key={idx} className="font-size-1-2-second-privacy">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>

      {/* Cancel Policy */}
      <div ref={section3Ref} className="  left-right-padding-jobs py-0 bg-yellow-css ">
        <div className="">
          <div className="row col-12 m-0 p-0 custom-align d-flex justify-centent-between ">
            <div className="col-12 col-lg-6 p-0 m-0 custom-align ">
              <p className="largest-font-size">{translate(`Cancellation Policy `)}</p>
              <p className="font-size-1-2-second">
                {" "}
                {translate(`Specify cancellation timeframe, fees, process, and refund
                details including subscription terms for clarity and
                convenience.`)}
              </p>
            </div>
            <div className="col-12 col-lg-6 p-0 m-0  d-flex justify-content-end">
              <div>
                <img
                  className=""
                  src="/images1/Cancel_img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="left-right-padding-jobs">
        {cancelpolicyArray.map((accordion, index) => (
          <div key={index} className="accordion">
            <div
              className="d-flex justify-content-between cursor-pointer"
              onClick={() => toggleAccordion2(index)}
            >
              <div className="heading my-2 font-size-1-2-second">
                {accordion.heading}
              </div>
              <div className="toggleButton cursor-pointer btn-open-close d-flex align-items-center">
                {openAccordionIndex == index ?
                  <FaChevronUp style={{ cursor: 'pointer', fontSize: '1rem', }} />
                  :
                  <FaChevronDown style={{ cursor: 'pointer', fontSize: '1rem', }} />
                }
              </div>
            </div>
            <div
              className={`content ${openAccordionIndex2 === index ? "open" : ""
                }`}
            >
              <div className="py-4">
                {accordion.content.map((paragraph, idx) => (
                  <p key={idx} className="font-size-1-2-second-privacy">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>

      {/* Cyber  */}
      <div className="  left-right-padding-jobs pe-0 py-0 bg-yellow-css ">
        <div className="">
          <div className="row col-12 m-0 p-0 custom-align d-flex justify-centent-between ">
            <div className="col-12 col-lg-6 p-0 m-0 custom-align ">
              <p className="largest-font-size">
                {translate(` Cyber Security & Malware Policy`)}
              </p>
              <p className="font-size-1-2-second">
                {" "}
                {translate(`We value user safety and privacy. Deceptive methods to collect
                personal info harm our safe, open atmosphere.`)}{" "}
              </p>
            </div>
            <div className="col-12 col-lg-6 p-0 m-0  d-flex justify-content-end">
              <div>
                <img
                  className=""
                  //   style={{ height: "20rem" }}
                  src="/images1/Cyber_img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="left-right-padding-jobs">
        <p className="font-size-1-2-second-privacy">{translate(` Policy Rationale`)}</p>
        <p className="font-size-1-2-second-privacy">
          {translate(`We recognize that the safety of our users extends to the security of
          their personal information. Attempts to gather sensitive personal
          information by deceptive or invasive methods are harmful to the
          authentic, open, and safe atmosphere that we want to foster.
          Therefore, we do not allow attempts to gather sensitive user
          information through the abuse of our platform and products.`)}{" "}
        </p>
        <p className="font-size-1-2-second-privacy">{translate(`Do not:`)} </p>
        <p className="font-size-1-2-second-privacy">
          {translate(`Attempt to compromise user accounts or gather sensitive information
          through unauthorized means, defined as: Gaining access to any account
          or user data other than your own without explicit permission from the
          account owner. Encouraging or deceiving users and entities to download
          or run files or programs that will compromise a user’s online or data
          security. Such files and programs will be deemed malicious software or
          “malware” if they harm or gain unauthorized access to a computer,
          device, or network.`)}{" "}
        </p>
        <p className="font-size-1-2-second-privacy">
          {" "}
          {translate(`Acquiring or requesting another user’s login credentials, whether
          explicitly or through deceptive means such as phishing (e.g. fake
          surveys designed to capture log-in info or links to fake login pages
          or impostor websites). Attempting to obtain the sensitive information
          of others such as usernames, passwords, or other personal information,
          through deceptive means or the use of malicious software or websites.`)}
        </p>
        <p className="font-size-1-2-second-privacy">
          {translate(`Publicly sharing your own or others’ login information on platform or
          through a third party service. Creating, sharing, or hosting malicious
          software or malicious brow col-12 m-0 p-0ser extensions to compromise accounts or
          gain access to user data.`)}{" "}
        </p>
      </div>
      {/* Background */}
      <div className="bg-light">
        <div className="left-right-padding-jobs">
          <p className="font-size-2-6-second" >{translate(`Background Location Tracking in Bumppy Sales Team APP or in Bumppy main APP `)}</p>
          <p className="font-size-1-2-second-privacy">{translate(`Bumppy Sales Manager app collect location data to improve location accuracy when finding nearby bluetooth printer . Your location can be accessed at any time even when the app is closed or not in use.`)}</p>
          <p className="font-size-1-2-second-privacy">{translate(`Bumppy  Sales Team app collects location data to Enabled tracking your trips to work or calculated distance travelled even when the app is closed or not in use.`)}</p>
        </div>
      </div>
      <div className="left-right-padding-jobs">


        <p className="font-size-2-6-second">{translate(`What data do we collect about you?`)}</p>
        {cyberPolicyArray.map((accordion, index) => (
          <div key={index} className="accordion">
            <div
              className="d-flex justify-content-between cursor-pointer"
              onClick={() => toggleAccordion3(index)}
            >
              <div className="heading my-2 font-size-1-2-second">
                {accordion.heading}
              </div>
              <div className="toggleButton cursor-pointer btn-open-close d-flex align-items-center">
                {openAccordionIndex == index ?
                  <FaChevronUp style={{ cursor: 'pointer', fontSize: '1rem', }} />
                  :
                  <FaChevronDown style={{ cursor: 'pointer', fontSize: '1rem', }} />
                }


                {/* {openAccordionIndex3 === index ? "▲" : "▼"} */}
              </div>
            </div>
            <div
              className={`content ${openAccordionIndex3 === index ? "open" : ""
                }`}
            >
              <div className="py-4">
                {accordion.content.map((paragraph, idx) => (
                  <p key={idx} className="font-size-1-2-second-privacy">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
