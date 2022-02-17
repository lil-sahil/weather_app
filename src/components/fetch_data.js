import { apiKey,
         webAddress,
         criteria } from "./api_keys"     


/**
 * module to make API calls to WeatherAPI
 */
export const API_CALL = (() => {
  
  // Get complete webaddress
  const getWebAddress = (city = false, country = false, lon = false, lat = false) => {

    // If nothing entered
    if ( city === false & country === false & lon === false & lat === false){
      return 1
    }

    else if (city !== false & country !== false){
      // forecastAPICity
      return webAddress() + criteria(true) + city + ',' + country + '&appid=' + apiKey()
    }

    else if (lon !== false & lat !== false){
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

    fetch(getWebAddress(...userData), {mode: 'cors'})
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        console.log(response)
      })
  }

  return { makeApiCall }

})()