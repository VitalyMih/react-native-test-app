import React from "react"
import { StyleSheet } from "react-native"

export const TabHeaderStyle = StyleSheet.create({
  safe_area: {
    flex: 1,
    backgroundColor: '#5b39b8'
  },
  container: {
    backgroundColor: 'white',
    height: '100%'
  },
  header: {
    backgroundColor: '#5b39b8',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})
