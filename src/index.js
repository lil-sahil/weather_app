// DOM Elements
import { submitBtn } from "./utils/dom";




// Controllers
import { API_CALL } from "./components/fetch_data"; 
import { USER_DATA } from "./components/get_user_entered_fields";


// Visual Components
import { CITY_COUNTRY } from "./components/city_country_verification";




const RUN_APP = (() => {

  submitBtn().addEventListener('click', async () => {

    // Get User entered Data
    let userDataArray = USER_DATA().getUserDataArray()


    // Make API Call
    let apiData = await API_CALL.makeApiCall(userDataArray)
    

    // Display city/Country Component
    CITY_COUNTRY.makeComponent(apiData)
    
  })  

})()

