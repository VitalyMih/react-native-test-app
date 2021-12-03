import React from "react"
import { Text, View } from "react-native"
import { TabHeader } from "../../components/TabHeader/TabHeader"

export const StatisticsTabScreen = () => {
  return (
    <TabHeader text="Статистика">
      <View>
        <Text>Statistics</Text>
      </View>
    </TabHeader>
  )
}
