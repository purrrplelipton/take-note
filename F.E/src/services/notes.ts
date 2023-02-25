import axios from "redaxios";
const url = "/api/notes";

const getAll = async () => {
  const _res = await axios.get(url);
  return _res.data;
};

const create = async (item: {}) => {
  const _res = await axios.post(url, item);
  return _res.data;
};

const update = async (id: number, newProp: {}) => {
  const _res = await axios.put(`${url}/${id}`, newProp);
  return _res.data;
};

const remove = async (id: number) => {
  const _res = await axios.delete(`${url}/${id}`);
  return _res.data;
};

const services = { getAll, update, create, remove };

export default services;