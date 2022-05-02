import { StatusCodes } from "http-status-codes";
import apiClient from "../config/axiosClient.config";
import getError from "../utils/getError";

const getProductsService = async () => {
  let apiUrl = `/api/product`;
  try {
    const prodcutsResponse = await apiClient().get(apiUrl);
    return prodcutsResponse;
  } catch (err) {
    return getError(StatusCodes.INTERNAL_SERVER_ERROR, "internal_server_error");
  }
};

export default getProductsService;
