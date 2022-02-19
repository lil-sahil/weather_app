export const cityCountrydisplay = document.querySelector('#city-country')

export const getUserEnteredCity = () => {
  return document.querySelector('#search-fields > form > input[name="city"]').value
}

export const getUserEnteredCountry = () => {
  return document.querySelector('#search-fields > form > input[name="country-code"]').value
}

export const getUserEnteredLongitude = () => {
  return document.querySelector('#search-fields > form > input[name="longitude"]').value
}

export const getUserEnteredLatitude = () => {
  return document.querySelector('#search-fields > form > input[name="latitude"]').value
}

export const submitBtn = () => {
  return document.querySelector('#search-fields > form > button')
}

