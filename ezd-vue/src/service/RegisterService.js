import axios from "axios";

const baseURL = "http://localhost:8081/api/v1"; // Thay thế bằng địa chỉ URL thực tế của máy chủ API

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Cache-Control": "no-cache",
  },
});

const AuthService = {
  register(userData) {
    return axiosInstance
      .post("/auth/signup", userData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  },

  login(credentials) {
    const LOGIN_API_URL = `${baseURL}/auth/signin`; // Địa chỉ đăng nhập
    return axiosInstance.post(LOGIN_API_URL, credentials).then((response) => {
      const token = response.data.token;
      // Lưu JWT vào localStorage hoặc Vuex state
      localStorage.setItem("token", token);
      return response;
    });
  },
};

export default AuthService;
