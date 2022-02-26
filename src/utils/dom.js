export const getUserEnteredCity = () => {
  return document.querySelector('#search-fields > form > input[name="city"]')
    .value;
};

export const getUserEnteredCountry = () => {
  return document.querySelector(
    '#search-fields > form > select[name="country-code"]'
  ).value;
};

export const submitBtn = () => {
  return document.querySelector("#search-fields > form > button");
};

export const selectContainer = () => {
  return document.querySelector(
    '#search-fields > form > select[name="country-code"]'
  );
};

// Display Sections
export const cityCountryDisplay = document.querySelector("#city-country");

export const dailyForecastShowcase = document.querySelector("#daily-forecast");

export const weeklyForecastDisplay = document.querySelector("#weekly-forecast");
