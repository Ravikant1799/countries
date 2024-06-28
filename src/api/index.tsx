import axios from "axios";

export const getCountryData = async () => {
  return await axios.get("https://api.sampleapis.com/countries/countries");
};
