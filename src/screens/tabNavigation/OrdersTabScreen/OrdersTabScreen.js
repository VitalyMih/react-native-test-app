import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native"
import { TabHeader } from "../../../components/TabHeader/TabHeader"
import { useDispatch, useSelector } from "react-redux"
import { getOrders } from "../../../redux/actions"
import { OrdersTabStyle } from "./OrdersTabStyle"
import { OrderList } from "../../../components/OrderList"

export const OrdersTabScreen = () => {
  const orders = useSelector(state => state.get.orders)
  const mail = useSelector(state => state.get.mail)
  const password = useSelector(state => state.get.password)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getOrders(mail, password))
  }, [])

  return (
    <TabHeader text="Заказы">
      {
        orders
          ? <View style={{flex: 1}}><OrderList orders={orders} /></View>
          : <View style={OrdersTabStyle.loader}><ActivityIndicator size='large' color='#5b39b8' /></View>
      }
    </TabHeader>
  )
}
