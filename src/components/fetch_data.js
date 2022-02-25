import { apiKey, webAddress, criteria } from "./api_keys";

export const API_CALL = (() => {
  // Get complete webaddress
  const getWebAddress = (city = "", country = "") => {
    // If nothing entered
    if ((city === "") & (country === ""))
      return console.log("Enter City and Country");

    // If City not entered
    if (city === "") return console.log("Enter a City");

    // If Country code not selected
    if (country === "") return console.log("Select a Country Code");

    // forecastAPICity
    return (
      webAddress() +
      criteria(true) +
      city +
      "," +
      country +
      "&units=metric" +
      "&appid=" +
      apiKey()
    );
  };

  const makeApiCall = (userData) => {
    /**
     * userData: array of user entered values
     * => JSON object as a result of API call
     */

    return fetch(getWebAddress(...userData), { mode: "cors" }).then(
      (response) => {
        return response.json();
      }
    );
  };

  const makeAPICallWeather = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return { makeApiCall, makeAPICallWeather };
})();
