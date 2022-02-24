export const DATE_FORMATTER = (() => {
  const getHumanDate = (unixTime, returnDateString = true) => {
    if (returnDateString) return new Date(unixTime * 1000).toDateString();

    return new Date(unixTime * 1000);
  };

  const getTime = (unixTime) => {
    return new Date(unixTime * 1000).toLocaleTimeString("en-US");
  };

  const getDay = (unixTime) => {
    return new Date(unixTime * 1000).toLocaleDateString("en-US", {
      weekday: "long",
    });
  };

  return { getHumanDate, getTime, getDay };
})();
