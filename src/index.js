// DOM Elements
import { submitBtn } from "./utils/dom";

// Controllers
import { API_CALL } from "./components/fetch_data";
import { USER_DATA } from "./components/get_user_entered_fields";

// Display Components
import { CITY_COUNTRY } from "./components/display_city_country";
import { TODAY_SHOWCASE } from "./components/display_today_showcase";
import { WEEKLY_FORECAST } from "./components/display_weekly_showcase";

const RUN_APP = (() => {
  submitBtn().addEventListener("click", async () => {
    // Get User entered Data
    let userDataArray = USER_DATA().getUserDataArray();

    // Check user data Array and exit function if it contains empty values
    if (userDataArray.includes("")) return;

    // Make API Call
    let apiData = await API_CALL.makeApiCall(userDataArray);

    // Display city/Country Component
    CITY_COUNTRY.makeComponent(apiData);

    // Display today showcase
    TODAY_SHOWCASE.makeComponent(apiData);

    // Display Weekly Cards
    WEEKLY_FORECAST.makeComponent(apiData);
  });
})();
