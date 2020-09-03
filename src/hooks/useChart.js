import { useEffect, useState } from 'react';
import languageColors from '../utils/languageColors';
const useChart = (repos) => {
  const [languages, setLanguages] = useState([]);
  const [languagesCount, setLanguagesCount] = useState([]);
  const [languageBorderColors, setLanguageBorderColors] = useState([]);
  const [languageBackgroundColors, setLanguageBackgroundColors] = useState([]);
  const [starLanguages, setStarLanguages] = useState([]);
  const [starLanguagesCount, setStarLanguagesCount] = useState([]);
  const [starLanguagesBorderColors, setStarLanguagesBorderColors] = useState([]);
  const [starLanguagesBackgroundColors, setStarLanguagesBackgroundColors] = useState([]);

  const [mostPopularRepos, setMostPopularRepos] = useState({
    labels: [],
    data: [],
    borderColors: [],
    backgroundColors: [],
  });

  useEffect(() => {
    //Calculating the most used languages
    let languagesWithCounts = repos.reduce((accumulator, currentValue) => {
      const { language } = currentValue;
      if (!language) return accumulator;
      accumulator[language] = (accumulator[language] || 0) + 1;
      return accumulator;
    }, {});

    //Calculating the stars per language
    let starsByLanguageWithCounts = repos.reduce((accumulator, currentValue) => {
      const { language, stargazers_count } = currentValue;
      if (!language || !stargazers_count) return accumulator;
      if (!accumulator[language]) {
        accumulator[language] = stargazers_count;
      } else {
        accumulator[language] += stargazers_count;
      }
      return accumulator;
    }, {});
    //Calculating the popular repos
    let popularRepos = repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 5);
    let popularReposLabels = popularRepos.map((popularRepo) => popularRepo.name);
    let popularReposData = popularRepos.map(
      (popularRepo) => popularRepo.stargazers_count
    );
    setMostPopularRepos((prevState) => ({
      ...prevState,
      labels: popularReposLabels,
      data: popularReposData,
      borderColors: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      backgroundColors: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
    }));

    //Setting Label, Data and colors for the most used languages chart
    setLanguages(Object.keys(languagesWithCounts));
    setLanguagesCount(Object.values(languagesWithCounts));
    setLanguageBorderColors(
      Object.keys(languagesWithCounts).map((color) => languageColors[color])
    );
    setLanguageBackgroundColors(
      Object.keys(languagesWithCounts).map((color) => `${languageColors[color]}B3`)
    );

    //Setting Label, Data and colors for the stars per language chart
    setStarLanguages(Object.keys(starsByLanguageWithCounts));
    setStarLanguagesCount(Object.values(starsByLanguageWithCounts));
    setStarLanguagesBorderColors(
      Object.keys(starsByLanguageWithCounts).map((color) => languageColors[color])
    );
    setStarLanguagesBackgroundColors(
      Object.keys(starsByLanguageWithCounts).map((color) => `${languageColors[color]}B3`)
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
    mostPopularRepos,
  };
};

export default useChart;
