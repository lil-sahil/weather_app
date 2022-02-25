import { getUserEnteredCity, getUserEnteredCountry } from "../utils/dom";

/**
 * Module to get data from User entered form
 */

export const USER_DATA = () => {
  // Get the user data currently entered in the fields

  const getUserDataArray = () => {
    return [getUserEnteredCity(), getUserEnteredCountry()];
  };

  return { getUserDataArray };
};
