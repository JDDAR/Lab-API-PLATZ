import axios from "axios";

//Crear una instancia de axios con la base de la URL de la API
const axiosInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/products",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
