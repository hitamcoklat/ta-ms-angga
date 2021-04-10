import axios from "axios";
import url from "./baseUrl";
const api = axios.create({
  baseURL: url,
});

const upload = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);

  return api.post("/api/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = () => {
  return api.get("/api/files");
};

export default {
  upload,
  getFiles,
};