import { API_CALL } from "./components/fetch_data"; 
import { USER_DATA } from "./components/get_user_entered_fields";
import { submitBtn } from "./utils/dom";





const RUN_APP = (() => {

  submitBtn().addEventListener('click', () => {
    let userDataArray = USER_DATA().getUserDataArray()
    API_CALL.makeApiCall(userDataArray)
  })  

})()

