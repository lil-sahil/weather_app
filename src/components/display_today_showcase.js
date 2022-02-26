// DOM Elements
import { dailyForecastShowcase } from "../utils/dom";

// Utils
import { clearChildren } from "../utils/clear_children";
import { DATE_FORMATTER } from "../utils/time_format";
import { addDegree } from "../utils/degree_sign";
import { addPercentageSign } from "../utils/percentage_sign";
import { capitalizeFirstLetters } from "../utils/capitalize_first_letters";

// API
import { API_CALL } from "./fetch_data";

export const TODAY_SHOWCASE = (() => {
  const controller = (APIdata) => {
    // Get relevant data for the component
    let currentTemp = addDegree(APIdata.list[0].main.temp.toPrecision(2));
    let feelLikeTemp = addDegree(
      APIdata.list[0].main.feels_like.toPrecision(2)
    );
    let tempMin = addDegree(APIdata.list[0].main.temp_min.toPrecision(2));
    let tempMax = addDegree(APIdata.list[0].main.temp_max.toPrecision(2));
    let humidity = addPercentageSign(APIdata.list[0].main.humidity);
    let weather = capitalizeFirstLetters(
      APIdata.list[0].weather[0].description
    );
    let weatherIcon = APIdata.list[0].weather[0].icon;
    let UnixTime = APIdata.list[0].dt;

    return [
      currentTemp,
      feelLikeTemp,
      tempMin,
      tempMax,
      humidity,
      weather,
      weatherIcon,
      UnixTime,
    ];
  };

  const componentHelper = (
    labelString,
    attributeValue,
    mainContainer,
    weatherIcon
  ) => {
    let mainComponentContainer = document.createElement("div");
    let label = document.createElement("h3");
    let value = document.createElement("div");

    label.innerHTML = labelString;

    weatherIcon !== undefined
      ? (value.innerHTML = `<img src=${API_CALL.makeAPICallWeather(
          weatherIcon
        )}>`)
      : (value.innerHTML = attributeValue);

    mainComponentContainer.appendChild(label);
    mainComponentContainer.appendChild(value);

    mainContainer.appendChild(mainComponentContainer);
  };

  const display = (
    currentTemp,
    feelLikeTemp,
    tempMin,
    tempMax,
    humidity,
    weather,
    weatherIcon,
    UnixTime
  ) => {
    let mainContainer = document.createElement("div");

    // Add Date and time
    let date = document.createElement("div");
    date.innerHTML = DATE_FORMATTER.getHumanDate(UnixTime);

    mainContainer.appendChild(date);

    // Current Temperature
    componentHelper("Current Temp.", currentTemp, mainContainer);

    // Feels Like Temperature
    componentHelper("Feels Like", feelLikeTemp, mainContainer);

    // Minimum Temperature
    componentHelper("Min", tempMin, mainContainer);

    // Maximum Temperature
    componentHelper("Max", tempMax, mainContainer);

    // Humidity
    componentHelper("Humidity", humidity, mainContainer);

    // Current Weather

    componentHelper(weather, false, mainContainer, weatherIcon);

    return mainContainer;
  };

  const makeComponent = (APIdata) => {
    // Remove all previous child elements
    clearChildren(dailyForecastShowcase);

    dailyForecastShowcase.appendChild(display(...controller(APIdata)));
  };

  return { makeComponent };
})();
