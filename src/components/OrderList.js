import React from "react"
import { ScrollView } from "react-native"
import { OrderCard } from "./OrderCard/OrderCard"

export const OrderList = ({ orders }) => {
  return (
    <ScrollView>
      {orders.map(order => <OrderCard order={order} key={order.key}/>)}
    </ScrollView>
  )
}
