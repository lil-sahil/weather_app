
export const CITY_COUNTRY = (() => {


  const controller = (APIdata) => {
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

    return display(...controller(APIdata))

  }

  return { makeComponent }
})()