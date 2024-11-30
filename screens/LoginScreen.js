// screens/LoginScreen.js
import React from "react"
import { View, Text } from "react-native"
import AuthForm from "../components/AuthForm"

const LoginScreen = () => {
  return (
    <View>
      <AuthForm type="login" />
    </View>
  )
}

export default LoginScreen
