
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import config from '../public/locales/config.json';

import { COUNTRIES } from "../utils/LanguageUtils";

const useLocale = () => {
  const router = useRouter();
  const { pathname, query } = router;
  const { locales, defaultLocale } = config;
  const [locale, setLocale] = useState(defaultLocale);
  const [apiFetched, setApiFetched] = useState(false);
 
  const getLocaleForCountry = async (detectedCountry) => {
    const country = COUNTRIES[detectedCountry];
    if (country && country.languages.length > 0) {
      const locale = await country.languages[0].locale;
      setLocale(locale); 
      setLocaleToRoute(locale); 
      router.push(locale); 
      return locale; 
    } else {
      console.log(locale, 'locale not found'); 
    }
  };
  const getLatLong = async () => {
    if (!apiFetched) {
      if (navigator.geolocation) {
        try {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
          let lat = position.coords.latitude, long = position.coords.longitude;

          let BASE_GEO_URL = "https://api.geoapify.com";
          let GEO_API_KEY = "046473aece5c4879948024625483ce20"

          var requestOptions = {
            method: 'GET',
          };

          const res = await fetch(`${BASE_GEO_URL}/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=${GEO_API_KEY}`, requestOptions);
          const data = await res.json();
          const detectedCountry = data.features[0].properties.country;
          getLocaleForCountry(detectedCountry);
          setApiFetched(true);

        } catch (error) {
          console.error('Error getting location:', error);
        }
      }
    }
  }
  useEffect(() => {
    
   // { pathname == '/' || pathname == '/en'? getLatLong() : null }

    console.log(pathname, '<- this is the pathname')
  }, [])


  useEffect(() => {
   // setLocale(getLocale() || defaultLocale);
  }, [pathname])

  const getLocale = () => {
    const pathnameSegments = pathname.split('/');

    if (pathnameSegments.length === 1) return;

    const _locale = pathnameSegments[1];
    return locales.includes(_locale) && _locale;
  }
  const setLocaleToRoute = (newLocale) => {
    const l = getLocale();
    const newPath = l.length ? pathname.replace(`/${l}`, `/${newLocale}`) : `/${newLocale}` + pathname
    console.log(l, newPath, newLocale)
    router.push({ pathname: newPath, query }, undefined, { shallow: true });
  }
  return [locale, setLocaleToRoute];
}

export default useLocale;