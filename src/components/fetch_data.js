import { apiKey,
         webAddress,
         criteria } from "./api_keys"     


export const API_CALL = (() => {
  
  // Get complete webaddress
  const getWebAddress = (city = "", country = "", lon = "", lat = "") => {

    // If nothing entered
    if ( city === "" & country === "" & lon === "" & lat === ""){
      return 1
    }

    else if (city !== "" & country !== ""){
      // forecastAPICity
      return webAddress() + criteria(true) + city + ',' + country + '&units=metric' + '&appid=' + apiKey()
    }

    else if (lon !== "" & lat !== ""){
      // forecastLonLat
      return 1
    }

    else{
      return 1
    }
  }


  const makeApiCall = (userData) => {
    /**
     * userData: array of user entered values
     * => JSON object as a result of API call
     */ 

    return fetch(getWebAddress(...userData), {mode: 'cors'})
            .then((response) => {
              return response.json()
            })
  }


  const makeAPICallWeather = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}.png`
  }

  return { makeApiCall, makeAPICallWeather }

})()