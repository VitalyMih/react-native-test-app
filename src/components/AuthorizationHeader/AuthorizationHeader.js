import React from "react"
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import left_icon from '../../img/icons/left-icon.png'
import { AuthorizationHeaderStyle } from "./AuthorizationHeaderStyle"

export const AuthorizationHeader = (props) => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={AuthorizationHeaderStyle.safe_area}>
      <View style={AuthorizationHeaderStyle.container}>
        <View style={AuthorizationHeaderStyle.header}>
          <TouchableOpacity
            style={AuthorizationHeaderStyle.icon}
            onPress={() => navigation.goBack()}
          >
            <Image source={left_icon} style={AuthorizationHeaderStyle.img}/>
          </TouchableOpacity>
          <Text style={AuthorizationHeaderStyle.title}>Войти</Text>
        </View>
        {props.children}
      </View>
    </SafeAreaView>
  )
}
