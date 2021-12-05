import { AuthorizationScreenStyle } from "../screens/stackNavigation/AuthorizationScreen/AuthorizationScreenStyle"
import { ActivityIndicator, Linking, Text, TextInput, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAccount, setMail, setPassword } from "../redux/actions"

export const AuthorizationForm = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.app.loading)
  const [password, setPasswordValue] = useState('')
  const [mail, setMailValue] = useState('')

  const onPressHandler = () => {
    dispatch(setMail(mail))
    dispatch(setPassword(password))
    dispatch(getAccount(mail, password))
  }

  return (
    <View style={AuthorizationScreenStyle.form}>
      <TextInput
        placeholder='Почта'
        style={AuthorizationScreenStyle.mail}
        autoFocus
        onChangeText={(text) => setMailValue(text)}
      />
      <TextInput
        placeholder='Пароль'
        style={AuthorizationScreenStyle.password}
        onChangeText={(text) => setPasswordValue(text)}
      />
      <TouchableOpacity
        style={AuthorizationScreenStyle.button}
        onPress={onPressHandler}
      >
        {loading
          ? <ActivityIndicator size='small' color='white' />
          : <Text style={AuthorizationScreenStyle.button_text}>Войти</Text>
        }
      </TouchableOpacity>
      <Text
        style={AuthorizationScreenStyle.forget}
        onPress={() => Linking.openURL('https://auth.insales.ru/login')}
      >Забыли пароль?</Text>
    </View>
  )
}
