import { StyleSheet } from "react-native"

export const AuthorizationScreenStyle = StyleSheet.create({
  form: {
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.62,
    elevation: 4,
  },
  mail: {
    height: 45,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray'
  },
  password: {
    height: 45,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2196F3',
    width: '100%',
    marginTop: 30,
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 5
  },
  button_text: {
    color: 'white',
  },
  forget: {
    color: '#2196F3',
    paddingTop: 10,
    paddingBottom: 10
  }
})
