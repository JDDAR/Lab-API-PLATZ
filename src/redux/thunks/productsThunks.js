import {
  fetchProductsFailure,
  fetchProductsStart,
  fetchProductsSuccess,
} from "../slice/productSlice";
import axiosInstance from "../../api/axiosInstance";

const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const response = await axiosInstance.get("products");
    dispatch(fetchProductsSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};

export default fetchProducts;
