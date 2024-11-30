// components/ClassCard.js
import React from "react"
import { View, Text, Button, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

const ClassCard = ({ classData }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.className}>{classData.className}</Text>
      <Text style={styles.description}>{classData.description}</Text>
      <Button
        title="View Details"
        onPress={() =>
          navigation.navigate("ClassDetail", { classId: classData._id })
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
  },
  className: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    marginVertical: 5,
  },
})

export default ClassCard
