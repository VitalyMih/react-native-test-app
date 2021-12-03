import { StyleSheet } from "react-native"

export const ProductCardStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    paddingTop: 15,
    paddingBottom: 15
  },
  image_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5
  },
  image: {
    height: 50,
    width: 50,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5
  },
  main_content: {
    flex: 4
  },
  main_title: {
    fontSize: 15
  },
  main_text: {
    color: 'gray'
  },
  price_content: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 5
  },
  price_text: {
    color: '#5b39b8'
  }
})
