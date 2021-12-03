import {StyleSheet} from "react-native"

export const MainScreenStyle = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center'
  },
  image: {
    width: 300,
    height: 150,
    marginBottom: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2196F3',
    width: '80%',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5
  },
  button_text: {
    color: 'white',
    fontSize: 20
  }
})
