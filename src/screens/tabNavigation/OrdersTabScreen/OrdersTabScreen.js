import React, { useEffect } from "react"
import { ActivityIndicator, FlatList, View } from "react-native"
import { TabHeader } from "../../../components/TabHeader/TabHeader"
import { useDispatch, useSelector } from "react-redux"
import { getOrders } from "../../../redux/actions"
import { OrdersTabStyle } from "./OrdersTabStyle"
import { OrderCard } from "../../../components/OrderCard/OrderCard"

export const OrdersTabScreen = () => {
  const orders = useSelector(state => state.get.orders)
  const mail = useSelector(state => state.authorization.mail)
  const password = useSelector(state => state.authorization.password)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getOrders(mail, password))
  }, [])

  return (
    <TabHeader text="Заказы">
      {
        orders
          ? <View style={{flex: 1}}>
            <FlatList
              data={orders}
              renderItem={({ item }) => <OrderCard order={item} />}
              keyExtractor={(order) => order.key}
            />
            </View>
          : <View style={OrdersTabStyle.loader}><ActivityIndicator size='large' color='#5b39b8' /></View>
      }
    </TabHeader>
  )
}
