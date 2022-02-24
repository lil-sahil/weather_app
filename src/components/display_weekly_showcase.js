// DOM Elements
import { weeklyForecastDisplay } from "../utils/dom";

// Utils
import { clearChildren } from "../utils/clear_children";
import { DATE_FORMATTER } from "../utils/time_format";
import { addDegree } from "../utils/degree_sign";

// API
import { API_CALL } from "./fetch_data";

// WeeklyForecast Factory
const individualCard = (
  timeVal,
  dateVal,
  weatherIcon,
  minTemperature,
  maxTemperature
) => {
  const mainContainer = document.createElement("div");

  const time = document.createElement("div");
  time.textContent = timeVal;

  const day = document.createElement("div");
  day.textContent = dateVal;

  const icon = document.createElement("div");
  icon.innerHTML = `<img src=${API_CALL.makeAPICallWeather(weatherIcon)}>`;

  const minMax = document.createElement("div");

  const min = document.createElement("div");
  min.textContent = minTemperature;

  const max = document.createElement("div");
  max.textContent = maxTemperature;

  minMax.appendChild(min);
  minMax.appendChild(max);

  // Add all elements to main container
  mainContainer.appendChild(time);
  mainContainer.appendChild(day);
  mainContainer.appendChild(icon);
  mainContainer.appendChild(minMax);

  return mainContainer;
};

// Weekly Forecast Module
export const WEEKLY_FORECAST = (() => {
  const controller = (apiDataDay) => {
    // Time - ex. "3:19:27 PM"
    let time = DATE_FORMATTER.getTime(apiDataDay.dt);

    // Day - ex. Tuesday
    let day = DATE_FORMATTER.getDay(apiDataDay.dt);

    // Weather Icon
    let weatherIcon = apiDataDay.weather[0].icon;

    // Min Temperature
    let minTemp = addDegree(apiDataDay.main.temp_min.toPrecision(2));

    // Max Temperature
    let maxTemp = addDegree(apiDataDay.main.temp_max.toPrecision(2));

    return [time, day, weatherIcon, minTemp, maxTemp];
  };

  // Create a sanitized data to not take into account previous times.
  const sanitizeData = (apiData) => {
    // Get all data greater than the current time.
    let currentTime = new Date();

    let sanitizedArray = apiData.list.filter((el) => {
      if (DATE_FORMATTER.getHumanDate(el.dt, false) > currentTime) {
        return el;
      }
    });

    return sanitizedArray;
  };

  const makeComponent = (apiData) => {
    // Remove all previous child elements
    clearChildren(weeklyForecastDisplay);

    // let data = sanitizeData(apiData);
    // console.log(data);

    for (let i = 1; i < 10; i++) {
      // Input raw api data for each time into controller
      let individualData = controller(apiData.list[i]);

      // Create card for each time using factory
      let card = individualCard(...individualData);

      // Append each card section
      weeklyForecastDisplay.append(card);
    }
  };

  return { makeComponent };
})();
