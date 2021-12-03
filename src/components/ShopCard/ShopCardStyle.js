import { StyleSheet } from "react-native"

export const ShopCardStyle = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginLeft: 2,
    marginRight: 2,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  main_content: {

  },
  title: {
    fontWeight: "bold",
    fontSize: 20
  },
  host: {
    color: 'gray'
  },
  button: {
    backgroundColor: '#2196F3',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5
  },
  button_text: {
    color: '#fff'
  }
})
