export const apiKey = () => {
  return "b4094e7ee81afa53177036765e7564f9"
}

export const webAddress = () => {
  return "https://api.openweathermap.org/data/2.5/forecast?"
}

export const criteria = (cityEntered) => {
  if (cityEntered === true){
    return "q="
  }
}

// 'https://api.openweathermap.org/data/2.5/forecast?q=London&appid=b4094e7ee81afa53177036765e7564f9'