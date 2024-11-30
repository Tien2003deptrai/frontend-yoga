import React, { useState } from "react"
import { View, TextInput, Button, Text, StyleSheet } from "react-native"
import { login, register } from "../utils/auth"
import { useNavigation } from "@react-navigation/native"

const AuthForm = ({ type }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const navigation = useNavigation()

  const handleSubmit = async () => {
    try {
      if (type === "login") {
        await login(username, password)
        navigation.navigate("Home")
      } else if (type === "register") {
        await register(username, password)
        navigation.navigate("Login")
      }
    } catch (err) {
      setError("Invalid credentials or registration failed")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {type === "login" ? "Login" : "Register"}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title={type === "login" ? "Login" : "Register"}
        onPress={handleSubmit}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   padding: 100,
  //   backgroundColor: "#f7f7f7",
  // },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
})

export default AuthForm
