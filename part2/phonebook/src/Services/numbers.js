import axios from "axios";
const baseUrl = "https://lionfish-app-cpxa4.ondigitalocean.app/api/persons";

const getAll = () => {
  const req = axios.get(baseUrl);
  return req.then((response) => response.data).catch((error) => error);
};

const create = (newObject) => {
  const req = axios.post(baseUrl, newObject);
  return req.then((response) => response.data).catch((error) => error);
};

const update = (id, newObject) => {
  const req = axios.put(`${baseUrl}/${id}`, newObject);
  return req.then((response) => response.data).catch((error) => error);
};

const remove = (id) => {
  const req = axios.delete(`${baseUrl}/${id}`);
  return req;
};

const numberServices = { getAll, create, update, remove };

export default numberServices;
