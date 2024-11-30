// navigation/AppNavigator.js
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen"
import ClassDetailScreen from "../screens/ClassDetailScreen"
import EnrollmentScreen from "../screens/EnrollmentScreen"
// import ProfileScreen from "../screens/ProfileScreen"

const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ClassDetail" component={ClassDetailScreen} />
      <Stack.Screen name="Enrollment" component={EnrollmentScreen} />
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    </Stack.Navigator>
  )
}

export default AppNavigator
