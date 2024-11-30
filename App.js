// App.js
import React, { useState, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import AppNavigator from "./navigation/AppNavigator"
import AuthNavigator from "./navigation/AuthNavigator"
import { getUserToken } from "./utils/auth" // Hàm kiểm tra token

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await getUserToken() // Kiểm tra token từ AsyncStorage hoặc Context
      setIsLoggedIn(!!token) // Đặt trạng thái đăng nhập
    }
    checkLoginStatus()
  }, [])

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}{" "}
      {/* Điều hướng dựa trên trạng thái đăng nhập */}
    </NavigationContainer>
  )
}
