import { apiKey,
         webAddress,
         criteria } from "./api_keys"     


/**
 * module to make API calls to WeatherAPI
 */
export const API_CALL = (() => {
  
  // Get complete webaddress

  const getWebAddress = (cityEntered, city = false, lon = false, lan = false) => {
    if (cityEntered === true){      
      return webAddress() + criteria(cityEntered = true) + city + '&appid=' + apiKey()
    }
  }

  // Forecast API Call based on city
  const forecastAPICity = (city) => {


    fetch(getWebAddress(true, city), {mode: 'cors'})
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        console.log(response)
      })

  }

  return { forecastAPICity }

})()