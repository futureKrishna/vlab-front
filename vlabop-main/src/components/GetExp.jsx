import axios from "axios";

export const allFetchedExp = async () => {
  const resp = await axios.get(`http://localhost:3000/getexp`);
  const data = await resp.data;
  return data;
};
