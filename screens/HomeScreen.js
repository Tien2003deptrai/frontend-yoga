// screens/HomeScreen.js
import React, { useEffect, useState } from "react"
import { View, Text, FlatList } from "react-native"
import { getClasses } from "../utils/api"
import ClassCard from "../components/ClassCard"

const HomeScreen = () => {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    const fetchClasses = async () => {
      const data = await getClasses()
      setClasses(data)
    }
    fetchClasses()
  }, [])

  return (
    <View>
      <Text>Available Yoga Classes</Text>
      <FlatList
        data={classes}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <ClassCard classData={item} />}
      />
    </View>
  )
}

export default HomeScreen
