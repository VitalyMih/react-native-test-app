import React from "react"
import { View, Text } from "react-native"
import { OrderCardStyle } from "./OrderCardStyle"

export const OrderCard = ({ order }) => {
  return (
    <View style={OrderCardStyle.container}>
      <View style={OrderCardStyle.up_row}>
        <Text style={OrderCardStyle.number}>{order.number}</Text>
        <View style={OrderCardStyle.status}>
          <Text style={OrderCardStyle.status_title}>{order.custom_status.title}</Text>
        </View>
        <View style={OrderCardStyle.price}>
          <Text style={OrderCardStyle.price_text}>{order.total_price} ₽</Text>
        </View>
      </View>
      <View style={OrderCardStyle.bottom_row}>
        <View style={OrderCardStyle.client}>
          {order.client.surname && <Text>{order.client.surname} </Text>}
          <Text>{order.client.name} </Text>
          {order.client.middlename && <Text>{order.client.middlename} </Text>}
        </View>
        <View>
          <Text>{order.created_at.slice(0, 10).split('-').reverse().join('.')}</Text>
        </View>
      </View>
    </View>
  )
}
