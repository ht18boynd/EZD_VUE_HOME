import axios from "axios";

const baseURL = "http://localhost:8081/api/v1"; // Thay thế bằng địa chỉ URL thực tế của máy chủ API

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Cache-Control": "no-cache",
  },
});

const AuthService = {
  async register(userData) {
    return await axiosInstance
      .post("/auth/signup", userData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  },

  async login(credentials) {
    const LOGIN_API_URL = `${baseURL}/auth/signin`; // Địa chỉ đăng nhập
    return await axiosInstance.post(LOGIN_API_URL, credentials).then((response) => {
      const token = response.data.token;
      // Lưu JWT vào localStorage hoặc Vuex state
      localStorage.setItem("token", token);
      return response;
    });
  },
  async findByEmail(email) {
    const FIND_BY_EMAIL_API_URL = `${baseURL}/auth/findByEmail?email=${email}`;
    return await axiosInstance.get(FIND_BY_EMAIL_API_URL).then((response) => {
      return response.data;
    });
  },
};

export default AuthService;
