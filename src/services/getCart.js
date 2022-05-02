import { StatusCodes } from "http-status-codes";
import apiClient from "../config/axiosClient.config";
import getError from "../utils/getError";

const getCartService = async () => {
  let apiUrl = `/api/cart`;
  try {
    const cartResponse = await apiClient().get(apiUrl);
    return cartResponse;
  } catch (err) {
    return getError(StatusCodes.INTERNAL_SERVER_ERROR, "internal_server_error");
  }
};

export default getCartService;
