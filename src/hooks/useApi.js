import { useParams } from "react-router-dom";
import useAxios from "./useAxios";
import { USER_NOT_FOUND } from "./apiMessage";

const useApi = () => {
  const axiosClient = useAxios();

  /** get localstorage value */
  const getLocalStorageValue = () => {
    return {
      token: localStorage.getItem("token")
        ? localStorage.getItem("token")
        : null,
      email: localStorage.getItem("email")
        ? localStorage.getItem("email")
        : null,
      role: localStorage.getItem("role") ? localStorage.getItem("role") : null,
    };
  };

  /** calling login api */

  const login = async (data) => {
    const response = await axiosClient.apiClient("POST", "user/login", data);
    if (response) {
      if (response?.data) {
        return response.data;
      }
    } else {
      return { message: response.message, data: [] };
    }
    return null;
  };
  /** calling login api */

  /** calling category api */
  const getAllCategory = async (keyword, pageNumber = 0) => {
    const response = await axiosClient.apiClient(
      "GET",
      `category/all?keyword=${keyword}&page=1`
    );
    if (response) {
      if (response?.data?.success === true) {
        return response;
      }
    }
    return null;
  };
  /** calling category api */

  /** get all tour */
  const getTour = async () => {
    const response = await axiosClient.apiClient("POST", "tour");
    return response.data.data;
  };

  const getTourById = async (id) => {
    const response = await axiosClient.apiClient("GET", `tour/${id}`);
    return response.data.data;
  };

  /*************************Transaction service start here ******************/
  const getApprovedTransaction = async () => {
    const response = await axiosClient.apiClient("GET", "transection/approved");
    return response.data.data;
  };

  const getPendingTransaction = async () => {
    const response = await axiosClient.apiClient("GET", "transection/pending");
    return response.data.data;
  };

  const getRejectTransaction = async () => {
    const response = await axiosClient.apiClient("GET", "transection/reject");
    return response.data.data;
  };

  const getTransactionById = async (trnxId) => {
    const response = await axiosClient.apiClient(
      "GET",
      `transection/${trnxId}`
    );
    return response.data.data;
  };

  const updateTransactionStatus = async (data) => {
    const response = await axiosClient.apiClient(
      "POST",
      "transection/update",
      data
    );
    return response.data.isExecute;
  };

  /*************************Transaction service start here ******************/

  /*************************Booking Service start here *********************/
  const getAllBooking = async () => {
    const response = await axiosClient.apiClient("GET", `booking`);
    return response.data.data;
  };

  const getBookingDetails = async () => {};

  /*************************Booking Service end here *********************/

  return {
    login,
    getAllCategory,
    getLocalStorageValue,
    getTour,
    getTourById,
    getApprovedTransaction,
    getPendingTransaction,
    getRejectTransaction,
    getTransactionById,
    updateTransactionStatus,
    getAllBooking,
    getBookingDetails,
  };
};

export default useApi;
