import axios from "axios";

const weatherSearch = async (location) => {
  const url = `http://api.weatherstack.com/current?access_key=971a1e61562b1db19465f0a9b5eb72ad&query=${location}`;
  const response = await axios.get(url);
  return response;
};

export default weatherSearch;
