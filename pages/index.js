// pages/index.js
import React, { useState, useEffect } from "react";
import NavBar from "../components/Navbar/Navbar";
import OurProducts from "../components/OurProducts/OurProducts";
import FirstSection from "../components/FirstSection/FirstSection";
import Slider from "../components/slider";
import ArticleSlider from "../components/ArticleSlider";
import Blog from "../components/Blog";
import Footer from "../components/Footer/footer";
import MiddleNav from "../components/MiddleNav/MiddleNav";
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from "next/router";
import Head from 'next/head';
import SinglePost from "./SinglePost";

const widgetSettings = {
  showTopNavBar: true,
  showNavBar: true,
  showFirstSection: true,
  showOurProducts: true,
  // Add more settings for future widgets here
};

export default function Index() {
  const router = useRouter();



  const [settings, setSettings] = useState({ ...widgetSettings });

  const fetchSettings = async () => {
    // Implement logic to fetch settings data from your backend API (once you have it)
    // For now, you can keep using local storage as a placeholder
    const loadedSettings = JSON.parse(localStorage.getItem("componentVisibility")) || settings;
    // setSettings(loadedSettings);
  };

  useEffect(() => {
    fetchSettings(); // Fetch settings on component mount
  }, []);




  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>New Movie | Bollywood News | Mobile Movies - Bumppy</title>
        <meta name="description" content="BUMPPY : Get Latest News and Entertainment article from 
        India &amp; World,Top News and Latest Stories from Lifestyle,Viral Photos and Videos,celebrity news."></meta>
        <meta name="keywords" content="entertainment news,celebrity news,celebrity gossip,gossip magazines,latest 
        entertainment news,celebrity magazines,latest celeb news,latest celeb gossip,american celeb news,photo 
        poster,poster maker,online poster store,photo poster printing,bollywood news,latest bollywood news,bol
        lywood film,bollywood updates"></meta>

        {/* og meta tags */}
        <meta property="og:site_name" content="Bumppy"></meta>
        <meta property="og:title" content="New Movie | Bollywood News | Mobile Movies - Bumppy"></meta>
        <meta property="og:description" content="BUMPPY : Get Latest News and Entertainment article from 
        India &amp; World,Top News and Latest Stories from Lifestyle,Viral Photos and Videos,celebrity news."></meta>
        <meta property="og:url" content="https://www.bumppy.com/"></meta>
        <meta property="og:image" content="https://www.bumppy.com/wp-content/uploads/2017/12/logo.png"></meta>

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="twitter:title" content="New Movie | Bollywood News | Mobile Movies - Bumppy" />
        <meta name="twitter:description" content="BUMPPY: Get Latest News and Entertainment articles from India & World, Top News, and Latest Stories from Lifestyle, Viral Photos and Videos, celebrity news." />
        <meta name="twitter:image" content="https://www.bumppy.com/wp-content/uploads/2017/12/logo.png" />
      </Head>

      {settings.showNavBar && <NavBar settings={settings} />}
      {settings.showFirstSection && <FirstSection />}
      {settings.showOurProducts && <OurProducts />}
      <MiddleNav />
      <ArticleSlider />
      <Blog />
      <Slider />
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {

  console.log('>>>>>>><<<.', locale)
  return {
    props: {
      locale: locale || 'hi',
    },
  };
}
