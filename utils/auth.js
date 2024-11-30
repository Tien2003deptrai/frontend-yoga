import AsyncStorage from "@react-native-async-storage/async-storage" // Dùng async-storage mới
import axios from "axios"

const API_URL = "http://192.168.1.6:5000/api/auth" // Thay đổi cho phù hợp với môi trường của bạn

// Hàm login và lưu token vào AsyncStorage
export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password })
  const token = response.data.token
  await AsyncStorage.setItem("token", token) // Lưu token vào AsyncStorage
  return token
}

// Hàm đăng xuất
export const logout = async () => {
  await AsyncStorage.removeItem("token") // Xóa token khỏi AsyncStorage
}

// Kiểm tra xem người dùng đã đăng nhập chưa
export const getUserToken = async () => {
  return await AsyncStorage.getItem("token")
}

export const register = async (username, password) => {
  const response = await axios.post(`${API_URL}/register`, {
    username,
    password,
  })
  return response.data
}
