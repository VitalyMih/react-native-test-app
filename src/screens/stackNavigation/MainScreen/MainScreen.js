import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { MainScreenStyle } from "./MainScreenStyle"

export const MainScreen = ({ navigation }) => {

  const onPressHandler = () => {
    navigation.navigate('Authorization')
  }

  return (
    <View style={MainScreenStyle.main}>
      <View style={MainScreenStyle.container}>
        <Image source={require('../../../img/logo.png')} style={MainScreenStyle.image} />
        <TouchableOpacity
          style={MainScreenStyle.button}
          onPress={onPressHandler}
        >
          <Text style={MainScreenStyle.button_text}>Войти</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
