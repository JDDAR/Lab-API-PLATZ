import {
  fetchProductsFailure,
  fetchProductsStart,
  fetchProductsSuccess,
} from "../slice/productSlice";
import axiosInstance from "../../api/axiosInstance";

const fetchProducts = (limit, offset) => async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const response = await axiosInstance.get(
      `products?limit=${limit}&skip=${offset}`,
    );
    console.log("Productos recibidos:", response.data); // Verifica la estructura de los datos
    dispatch(fetchProductsSuccess(response.data.products));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};

export default fetchProducts;
