// DOM Elements
import { weeklyForecastDisplay } from "../utils/dom";

// Utils
import { clearChildren } from "../utils/clear_children";
import { DATE_FORMATTER } from "../utils/time_format";
import { addDegree } from "../utils/degree_sign";
import { addPercentageSign } from "../utils/percentage_sign";

// API
import { API_CALL } from "./fetch_data";

// WeeklyForecast Factory
const individualCard = (
  dateTime,
  weatherIcon,
  minTemperature,
  maxTemperature
) => {
  const mainContainer = document.createElement("div");

  const time = document.createElement("div");

  const day = document.createElement("div");

  const icon = document.createElement("div");

  const minMax = document.createElement("div");
};

// Weekly Forecast Module
export const WEEKLY_FORECAST = (() => {
  return 1;
})();
