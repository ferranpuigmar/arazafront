import { StatusCodes } from "http-status-codes";
import apiClient from "../config/axiosClient.config";
import getError from "../utils/getError";

const getProductByIdService = async (id) => {
  let apiUrl = `/api/product/${id}`;
  try {
    const productResponse = await apiClient().get(apiUrl);
    return productResponse;
  } catch (err) {
    return getError(StatusCodes.INTERNAL_SERVER_ERROR, "internal_server_error");
  }
};

export default getProductByIdService;
