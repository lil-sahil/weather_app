import { getUserEnteredCity,
         getUserEnteredCountry,
         getUserEnteredLongitude,
         getUserEnteredLatitude } from "../utils/dom"



/**
 * Module to get data from User entered form
 */

export const USER_DATA = () => {

  // Get the user data currently entered in the fields

  const getUserDataArray = () => {
    return [getUserEnteredCity(), 
            getUserEnteredCountry(), 
            getUserEnteredLongitude(), 
            getUserEnteredLatitude()]
  }

  return { getUserDataArray }
}