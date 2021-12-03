import React from "react"
import { Text, View } from "react-native"
import { TabHeader } from "../../components/TabHeader/TabHeader"

export const MessageTabScreen = () => {
  return (
    <TabHeader text="Сообщения">
      <View>
        <Text>Message Tab Screen</Text>
      </View>
    </TabHeader>
  )
}
