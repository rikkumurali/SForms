// import { http } from '../http-common'
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const login = (username, password) => {
    return axios
      .post(API_URL + "users/login/superadmin", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.data.token) {
          localStorage.setItem("accessToken", response.data.data.token);
        }
        return response.data;
      });
  };

  const logout = (url) => {
    return http.post(url);
  }

const DataService = {
    login,
    logout,
};

export default DataService;