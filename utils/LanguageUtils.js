export const COUNTRIES = {
  "India": {
    name: "India",
    flag: "fi fi-in fis",
    languages: [
      // { language: 'Hindi', locale: 'hi' },
      { language: 'English', locale: 'en-IN' },
      // { language: 'Bengali', locale: 'bn' },
      // { language: 'Telugu', locale: 'te' },
      // { language: 'Marathi', locale: 'mr' },
      // { language: 'Tamil', locale: 'ta' },
      // { language: 'Urdu', locale: 'ur' },
      // { language: 'Gujarati', locale: 'gu' },
      // { language: 'Kannada', locale: 'kn' },
      // { language: 'Odia', locale: 'or' },
      // { language: 'Malayalam', locale: 'ml' },
      // { language: 'Punjabi', locale: 'pa' },
      // { language: 'Assamese', locale: 'as' },
      // { language: 'Maithili', locale: 'mai' },
      // { language: 'Sanskrit', locale: 'sa' }
    ]
  },

  // "Brazil": {
  //   name: "Brazil",
  //   flag: "fi fi-br fis",
  //   languages: [
  //     { language: 'Portuguese', locale: 'pt' },
  //     { language: 'English', locale: 'en-BR' }
  //   ]
  // },

  // "Vietnam": {
  //   name: "Vietnam",
  //   flag: "fi fi-vn fis",
  //   languages: [
  //     { language: 'Vietnamese', locale: 'vi' },
  //     { language: 'English', locale: 'en-VI' }
  //   ]
  // },
  // "Bangladesh": {
  //   name: "Bangladesh",
  //   flag: "fi fi-bd fis",
  //   languages: [
  //     { language: 'Bengali', locale: 'bn' },
  //     { language: 'English', locale: 'en-BN' }
  //   ]
  // },
  // "Australia": {
  //   name: "Australia",
  //   flag: "fi fi-au fis",
  //   languages: [
  //     { language: "English", locale: "en-AU" }
  //   ]
  // },

  
};

export const getLanguageNameForLocale = (locale) => {
  // it should return the language name
  const CountryArray = Object.values(COUNTRIES)
  for (const country of CountryArray) {
    for (const language of country.languages) {
      if (language.locale === locale) {
        return language.language
      }
    }
  }
  return "English";
}

export const getCountryForLocale = (locale) => {
  // it should return the country name and flag
  const CountryArray = Object.values(COUNTRIES)
  // if (locale === 'en') return { name: "India", flag: "fi fi-in fis" };

  for (const country of CountryArray) {
    for (const language of country.languages) {
      if (language.locale === locale) {
        return country;
      }
    }
  }
  return { name: "India", flag: "fi fi-in fis" };
}