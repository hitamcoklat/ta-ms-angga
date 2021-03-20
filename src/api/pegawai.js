import axios from "axios";
import url from "./baseUrl";
const api = axios.create({
  baseURL: url,
});

export const getPegawai = () => api.get(`/data-json/data-pegawai.json`);

const apis = {
  getPegawai,
};

export default apis;
