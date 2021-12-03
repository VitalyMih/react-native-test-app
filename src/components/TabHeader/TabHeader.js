import React from "react"
import { SafeAreaView, View, Text } from "react-native"
import { TabHeaderStyle } from "./TabHeaderStyle"

export const TabHeader = (props) => {
  return (
    <SafeAreaView style={TabHeaderStyle.safe_area}>
      <View style={TabHeaderStyle.container}>
        <View style={TabHeaderStyle.header}>
          <Text style={TabHeaderStyle.text}>{props.text}</Text>
        </View>
        {props.children}
      </View>
    </SafeAreaView>
  )
}
