import { API_CALL } from "./components/fetch_data"; 
import { USER_DATA } from "./components/get_user_entered_fields";
import { submitBtn } from "./utils/dom";
import { TRANSFORM_DATA } from "./components/transform_data";




const RUN_APP = (() => {

  submitBtn().addEventListener('click', async () => {

    // Get User entered Data
    let userDataArray = USER_DATA().getUserDataArray()


    // Make API Call
    let apiData = await API_CALL.makeApiCall(userDataArray)
    

    // Get city Data
    let cityData = TRANSFORM_DATA.cityCountryVerification(apiData)
    console.log(cityData)
  })  

})()

