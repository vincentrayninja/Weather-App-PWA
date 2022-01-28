import axios from "axios";
const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "15f0fd95e8e3fb2b09bff2b20fd47e87";
export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });
  return data;
};
