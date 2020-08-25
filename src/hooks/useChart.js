import { useEffect, useState } from 'react';
import languageColors from '../utils/languageColors';
const useChart = (repos) => {
  const [languages, setLanguages] = useState([]);
  const [languagesCount, setLanguagesCount] = useState([]);
  const [languageBorderColors, setLanguageBorderColors] = useState([]);
  const [languageBackgroundColors, setLanguageBackgroundColors] = useState([]);
  const [starLanguages, setStarLanguages] = useState([]);
  const [starLanguagesCount, setStarLanguagesCount] = useState([]);
  const [starLanguagesBorderColors, setStarLanguagesBorderColors] = useState(
    []
  );
  const [
    starLanguagesBackgroundColors,
    setStarLanguagesBackgroundColors,
  ] = useState([]);
  useEffect(() => {
    let languagesWithCounts = repos.reduce((accumulator, currentValue) => {
      const { language } = currentValue;
      if (!language) return accumulator;
      accumulator[language] = (accumulator[language] || 0) + 1;
      return accumulator;
    }, {});
    let starsByLanguageWithCounts = repos.reduce(
      (accumulator, currentValue) => {
        const { language, stargazers_count } = currentValue;
        if (!language || !stargazers_count) return accumulator;
        if (!accumulator[language]) {
          accumulator[language] = stargazers_count;
        } else {
          accumulator[language] += stargazers_count;
        }
        return accumulator;
      },
      {}
    );

    setLanguages(Object.keys(languagesWithCounts));
    setLanguagesCount(Object.values(languagesWithCounts));
    setLanguageBorderColors(
      Object.keys(languagesWithCounts).map((color) => languageColors[color])
    );
    setLanguageBackgroundColors(
      Object.keys(languagesWithCounts).map(
        (color) => `${languageColors[color]}B3`
      )
    );
    setStarLanguages(Object.keys(starsByLanguageWithCounts));
    setStarLanguagesCount(Object.values(starsByLanguageWithCounts));
    setStarLanguagesBorderColors(
      Object.keys(starsByLanguageWithCounts).map(
        (color) => languageColors[color]
      )
    );
    setStarLanguagesBackgroundColors(
      Object.keys(starsByLanguageWithCounts).map(
        (color) => `${languageColors[color]}B3`
      )
    );
  }, [repos]);

  return {
    languages,
    languagesCount,
    languageBorderColors,
    languageBackgroundColors,
    starLanguages,
    starLanguagesCount,
    starLanguagesBorderColors,
    starLanguagesBackgroundColors,
  };
};

export default useChart;
