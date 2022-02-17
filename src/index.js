import { API_CALL } from "./components/fetch_data"; 
import { USER_DATA } from "./components/get_user_entered_fields";
import { getUserEnteredCity } from "./utils/dom";



const RUN_APP = (() => {

  USER_DATA()

  
  API_CALL.forecastAPICity('London')

})()

