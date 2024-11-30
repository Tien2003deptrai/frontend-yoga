import axios from "axios"
import { getUserToken } from "../utils/auth" // Hàm để lấy token từ AsyncStorage hoặc localStorage

const API_URL = "http://localhost:5000/api/v1/"

// Hàm lấy token từ storage
const getAuthHeader = async () => {
  const token = await getUserToken()
  return token ? { Authorization: `Bearer ${token}` } : {}
}

// Lấy danh sách các lớp học
export const getClasses = async () => {
  try {
    const authHeader = await getAuthHeader() // Lấy token để thêm vào header
    const response = await axios.get(`${API_URL}/classes`, {
      headers: authHeader,
    })
    return response.data
  } catch (error) {
    console.error("Error fetching classes", error)
    return []
  }
}

// Lấy chi tiết lớp học
export const getClassDetails = async (classId) => {
  try {
    const authHeader = await getAuthHeader() // Lấy token để thêm vào header
    const response = await axios.get(`${API_URL}/classes/${classId}`, {
      headers: authHeader,
    })
    return response.data
  } catch (error) {
    console.error("Error fetching class details", error)
    return null
  }
}

// Đăng ký tham gia session
export const enrollInSession = async (sessionId) => {
  try {
    const authHeader = await getAuthHeader() // Lấy token để thêm vào header
    const response = await axios.post(
      `${API_URL}/students/enroll`,
      { sessionId },
      { headers: authHeader }
    )
    return response.data.success
  } catch (error) {
    console.error("Error enrolling in session", error)
    return false
  }
}
