import { SessionModel } from "../models/sessionModel";

const useCommon = () => {
  const sessionModel = SessionModel;
  const url = "http://localhost:8080";
  /** login */
  const tryLogin = (response) => {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("email", response.data.user.email);
    localStorage.setItem("role", response.data.user.role);
  };

  /** Session Information */
  const sessionService = () => {
    sessionModel.token = localStorage.getItem("token") || null;
    sessionModel.email = localStorage.getItem("email") || null;
    sessionModel.role = localStorage.getItem("role") || null;
    return sessionModel;
  };

  /** distroy session information */
  const tryLogout = () => {
    sessionModel.token = localStorage.removeItem('token');
    sessionModel.role = localStorage.removeItem('role');
    sessionModel.email = localStorage.removeItem('email');
  };

  return { tryLogin, sessionService, tryLogout };
};

export default useCommon;
