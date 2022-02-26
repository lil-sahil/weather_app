export const capitalizeFirstLetters = (sentenceString) => {
  try {
    let capital = sentenceString
      .split(" ")
      .map((el) => `${el.slice(0, 1).toUpperCase()}${el.slice(1)}`);

    return capital.join(" ");
  } catch (err) {
    console.log(`${err}`);
  }
};
