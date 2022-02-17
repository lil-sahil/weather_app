import { getUserEnteredCity,
         submitBtn } from "../utils/dom"



/**
 * Module to get data from User entered form
 */

export const USER_DATA = () => {

  // When the button is pressed return the value in the form.
  const ButtonEventListner = (() => {
    submitBtn().addEventListener('click', () => {
      console.log(getUserEnteredCity())
      return getUserEnteredCity()
    })
  })()

}