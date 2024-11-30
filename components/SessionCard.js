// components/SessionCard.js
import React from "react"
import { View, Text, Button } from "react-native"
import { useNavigation } from "@react-navigation/native"

const SessionCard = ({ sessionData }) => {
  const navigation = useNavigation()

  return (
    <View style={{ padding: 10, borderWidth: 1, marginBottom: 10 }}>
      <Text>{sessionData.sessionName}</Text>
      <Text>{sessionData.date}</Text>
      <Button
        title="Enroll"
        onPress={() =>
          navigation.navigate("Enrollment", { sessionId: sessionData._id })
        }
      />
    </View>
  )
}

export default SessionCard
