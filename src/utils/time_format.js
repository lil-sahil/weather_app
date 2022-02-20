export const DATE_FORMATTER = (() => {
  const getHumanDate = (unixTime) => {
    return new Date(unixTime * 1000).toDateString();
  };

  return { getHumanDate };
})();
