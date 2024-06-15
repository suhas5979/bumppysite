import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";
import Head from 'next/head';

import useTranslation from "../utils/useTranslation";

const Refund = () => {

  const translate = useTranslation();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Refund and Cancellation Policy | Bumppy</title>
        <meta name="description" content="Our focus is complete customer satisfaction. In the event,
                 if you are displeased with the services provided, we will refund back the money, provided the
                  reasons are genuine and proved after investigation. Please read the fine prints of each service packages 
                  before buying it, it provides all the details about the services or the product you purchase"></meta>
        <meta name="keywords" content="refund policy,cancellation policy,refund and cancellation policy"></meta>

        <meta property="og:site_name" content="Bumppy"></meta>
        <meta property="og:type" content="article"></meta>
        <meta property="og:title" content="Refund and Cancellation Policy | Bumppy"></meta>
        <meta property="og:description" content="Our focus is complete customer satisfaction. In the event, if you are displeased
                   with the services provided, we will refund back the money, provided the reasons are genuine and proved after investigation. 
                   Please read the fine prints of each service packages before buying it, it provides all the details about the services or the product you purchase"></meta>
        <meta property="og:url" content="https://www.bumppy.com/refund-policy/"></meta>

        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:title" content="Refund and Cancellation Policy | Bumppy"></meta>
        <meta name="twitter:description" content="Our focus is complete customer satisfaction. In the event, if you are displeased with the services provided, we will refund back the 
        money, provided the reasons are genuine and proved after investigation. Please read the fine prints of each service packages before buying it, it provides all the details about
        the services or the product you purchase"></meta>
        <meta name="google" content="nositelinkssearchbox"></meta>
      </Head>
      <NavBar />
      <div className="container">
        <div className="p-md-5 p-4">
          <div className="px-md-5" >
            <p style={{ fontSize: '1.8rem', fontWeight: "500" }}>{translate(`Refund Policy`)}</p>
            <p style={{ fontSize: '1.3rem' }}>{translate(`Refund and Cancellation Policy`)}</p>
            <p>
              {translate(`Our focus is complete customer satisfaction. In the event, if you
              are displeased with the services provided, we will refund back the
              money, provided the reasons are genuine and proved after
              investigation. Please read the fine prints of each service
              packages before buying it, it provides all the details about the
              services or the product you purchase.`)}
            </p>
            <p>
              {translate(`In case of dissatisfaction from our services, clients have the
              liberty to cancel their projects and request a refund from us. Our
              Policy for the cancellation and refund will be as follows:`)}
            </p>
            <p style={{ fontSize: '1.3rem' }}>{translate(`Cancellation Policy`)}</p>
            <p>{translate(`For Cancellations please contact the us via contact us link.`)}</p>
            <p>
              {translate(` Requests received later than 10 business days prior to the end of
              the current service period will be treated as cancellation of
              services for the next service period.`)}
            </p>
            <p style={{ fontSize: '1.3rem' }}>{translate(`Refund Policy`)}</p>
            <p>
              {translate(`We will try our best to create the suitable design concepts for
              our clients.`)}
            </p>
            <p>
              {translate(`In case any client is not completely satisfied with our products
              we can provide a refund.`)}
            </p>
            <p>
              {translate(`If paid by credit card, refunds will be issued to the original
              credit card provided at the time of purchase and in case of
              payment gateway name payments refund will be made to the same
              account.`)}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Refund;
