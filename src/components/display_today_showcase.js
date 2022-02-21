// DOM Elements
import { dailyForecastShowcase } from "../utils/dom";

// Utils
import { clearChildren } from "../utils/clear_children";
import { DATE_FORMATTER } from "../utils/time_format";

// API
import { API_CALL } from "./fetch_data";

export const TODAY_SHOWCASE = (() => {
  const controller = (APIdata) => {
    // At degree symbol to base value
    const addDegree = (baseString) => {
      return `${baseString}\xB0C`;
    };

    // Add percentage Sign
    const addPercentageSign = (baseString) => {
      return `${baseString}%`;
    };

    // Remove all previous child elements
    clearChildren(dailyForecastShowcase);

    // Get relevant data for the component
    let currentTemp = addDegree(APIdata.list[0].main.temp.toPrecision(1));
    let feelLikeTemp = addDegree(
      APIdata.list[0].main.feels_like.toPrecision(1)
    );
    let tempMin = addDegree(APIdata.list[0].main.temp_min.toPrecision(1));
    let tempMax = addDegree(APIdata.list[0].main.temp_max.toPrecision(1));
    let humidity = addPercentageSign(APIdata.list[0].main.humidity);
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
    dailyForecastShowcase.appendChild(display(...controller(APIdata)));
  };

  return { makeComponent };
})();
