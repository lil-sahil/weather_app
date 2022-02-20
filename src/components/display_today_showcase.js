// DOM Elements
import { dailyForecastShowcase } from "../utils/dom";

// Utils
import { clearChildren } from "../utils/clear_children";
import { DATE_FORMATTER } from "../utils/time_format";

// API
import { API_CALL } from "./fetch_data";

export const TODAY_SHOWCASE = (() => {
  const controller = (APIdata) => {
    // Remove all previous child elements
    clearChildren(dailyForecastShowcase);

    // Get relevant data for the component
    let currentTemp = APIdata.list[0].main.temp;
    let feelLikeTemp = APIdata.list[0].main.feels_like;
    let tempMin = APIdata.list[0].main.temp_min;
    let tempMax = APIdata.list[0].main.temp_max;
    let humidity = APIdata.list[0].main.humidity;
    let weather = APIdata.list[0].weather[0].main;
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

    labelString === "Currently"
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
    componentHelper("Current Temperature", currentTemp, mainContainer);

    // Feels Like Temperature
    componentHelper("Feels Like", feelLikeTemp, mainContainer);

    // Minimum Temperature
    componentHelper("Min Temp", tempMin, mainContainer);

    // Maximum Temperature
    componentHelper("Max Temp", tempMax, mainContainer);

    // Humidity
    componentHelper("Humidity", humidity, mainContainer);

    // Current Weather

    componentHelper("Currently", (weather = false), mainContainer, weatherIcon);

    return mainContainer;
  };

  const makeComponent = (APIdata) => {
    dailyForecastShowcase.appendChild(display(...controller(APIdata)));
  };

  return { makeComponent };
})();
