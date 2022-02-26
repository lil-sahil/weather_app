import { COUNTRY_DATA } from "../data_files/country_codes";
import { selectContainer } from "../utils/dom";

// Options factory function
const countryCodeFactory = (val, displayText) => {
  let optionElement = document.createElement("option");
  optionElement.setAttribute("value", val);
  optionElement.textContent = displayText;

  return optionElement;
};

export const POPULATE_COUNTRY_CODES = (() => {
  const populate = () => {
    for (const el of COUNTRY_DATA) {
      selectContainer().appendChild(
        countryCodeFactory(el.abbreviation, el.country)
      );
    }
  };

  return { populate };
})();
