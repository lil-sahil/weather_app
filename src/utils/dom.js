export const getUserEnteredCity = () => {
  return document.querySelector('#search-fields > form > input[name="city"]').value
}

export const submitBtn = () => {
  return document.querySelector('#search-fields > form > button')
}
