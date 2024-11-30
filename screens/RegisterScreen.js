// screens/RegisterScreen.js
import React from "react"
import { View, Text } from "react-native"
import AuthForm from "../components/AuthForm"

const RegisterScreen = () => {
  return (
    <View>
      <Text>Register</Text>
      <AuthForm type="register" />
    </View>
  )
}

export default RegisterScreen
