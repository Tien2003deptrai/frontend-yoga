// screens/EnrollmentScreen.js
import React, { useEffect, useState } from "react"
import { View, Text, Button } from "react-native"
import { enrollInSession } from "../utils/api"

const EnrollmentScreen = ({ route }) => {
  const { sessionId } = route.params
  const [success, setSuccess] = useState(false)

  const handleEnroll = async () => {
    const result = await enrollInSession(sessionId)
    setSuccess(result)
  }

  return (
    <View>
      <Text>Enroll in this class session?</Text>
      <Button title="Enroll" onPress={handleEnroll} />
      {success && <Text>Enrollment successful!</Text>}
    </View>
  )
}

export default EnrollmentScreen
