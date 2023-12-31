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
    }else{
      return {message:response.message,data:[]}
    }
    return null;
  };
  /** calling login api */

  /** calling category api */
  const getAllCategory = async (keyword, pageNumber=0) => {
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
    const response = await axiosClient.apiClient(
      "POST","tour"
    );
  return response.data.data
  };


  return {
    login,
    getAllCategory,
    getLocalStorageValue,
    getTour
  };
};

export default useApi;
