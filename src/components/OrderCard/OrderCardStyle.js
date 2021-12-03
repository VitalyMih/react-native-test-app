import React from "react"
import { StyleSheet } from "react-native"

export const OrderCardStyle = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    padding: 5
  },
  up_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  },
  bottom_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  number: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16
  },
  status: {
    flex: 2,
    alignItems: 'center'
  },
  status_title: {
    color: '#fff',
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#59bd5c'
  },
  price: {
    flex: 1,
    alignItems: 'flex-end'
  },
  price_text: {
    fontWeight: 'bold'
  },
  client: {
    flexDirection: 'row'
  }
})
