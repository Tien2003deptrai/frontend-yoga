// screens/ClassDetailScreen.js
import React, { useEffect, useState } from "react"
import { View, Text, Button, FlatList, StyleSheet } from "react-native"
import { getClassDetails } from "../utils/api"
import SessionCard from "../components/SessionCard" // Import SessionCard

const ClassDetailScreen = ({ route }) => {
  const { classId } = route.params
  const [classDetails, setClassDetails] = useState(null)

  useEffect(() => {
    const fetchClassDetails = async () => {
      const data = await getClassDetails(classId)
      setClassDetails(data)
    }
    fetchClassDetails()
  }, [classId])

  const renderSessionItem = ({ item }) => {
    return (
      <SessionCard
        session={item}
        onPress={() => console.log("Session clicked", item)}
      />
    )
  }

  return (
    <View style={styles.container}>
      {classDetails ? (
        <>
          <Text style={styles.className}>{classDetails.className}</Text>
          <Text style={styles.description}>{classDetails.description}</Text>

          <Button title="Enroll" onPress={() => {}} />

          <Text style={styles.sessionsTitle}>Sessions</Text>

          {/* Hiển thị danh sách các sessions nếu có */}
          <FlatList
            data={classDetails.sessions}
            keyExtractor={(item) => item.id.toString()} // Giả sử mỗi session có ID duy nhất
            renderItem={renderSessionItem}
          />
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  className: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  sessionsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
})

export default ClassDetailScreen
