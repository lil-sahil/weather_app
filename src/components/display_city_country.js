// DOM Elements
import { cityCountryDisplay } from "../utils/dom"

// Utils
import { clearChildren } from "../utils/clear_children"


export const CITY_COUNTRY = (() => {

  const controller = (APIdata) => {

    // Remove all previous child elements
    clearChildren(cityCountryDisplay)


    // Get relevant data to the component
    let cityName = APIdata.city.name
    let countryName = APIdata.city.country

    return [cityName, countryName]
  }

  const display = (cityName, CountryName) => {
    
    let mainContainer = document.createElement('div')
    let city = document.createElement('h1')
    city.innerHTML = cityName
    
    let country = document.createElement('h5')
    country.innerHTML = CountryName

    
    mainContainer.appendChild(city)
    mainContainer.appendChild(country)
  
    return mainContainer
  }

  const makeComponent = (APIdata) => {

    cityCountryDisplay.appendChild(display(...controller(APIdata)))

  }

  return { makeComponent }
})()