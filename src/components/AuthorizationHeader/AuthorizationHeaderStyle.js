import { StyleSheet } from "react-native"

export const AuthorizationHeaderStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%'
  },
  safe_area: {
    flex: 1,
    backgroundColor: '#5b39b8'
  },
  header: {
    backgroundColor: '#5b39b8',
    justifyContent: 'center',
    height: 40
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  icon: {
    position: 'absolute',
    zIndex: 10,
    left: 15,
    top: 5
  },
  img: {
    height: 30,
    width: 30
  }
})
