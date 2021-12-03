import React from "react"
import { Linking, Text, TouchableOpacity, View } from "react-native"
import { ShopCardStyle } from "./ShopCardStyle"


export const ShopCard = ({ title, host, hostProtocol}) => {
  return (
    <View style={ShopCardStyle.container}>
      <View style={ShopCardStyle.main_content}>
        <Text style={ShopCardStyle.title}>{title}</Text>
        <Text style={ShopCardStyle.host}>{host}</Text>
      </View>
      <TouchableOpacity
        style={ShopCardStyle.button}
        onPress={() => Linking.openURL(`${hostProtocol}://${host}`)}
      >
        <Text style={ShopCardStyle.button_text}>Открыть</Text>
      </TouchableOpacity>
    </View>
  )
}
