import React from "react"
import { TabHeader } from "../../components/TabHeader/TabHeader"
import { useSelector } from "react-redux"
import { View } from "react-native"
import { ShopCard } from "../../components/ShopCard/ShopCard"

export const MainTabScreen = () => {
  const account = useSelector(state => state.get.account)

  return (
    <TabHeader
      text={`Добро пожаловать в InSales, ${account.owner.name}!`}
    >
      <View style={{height: '100%'}}>
        <ShopCard
          title={account.title}
          host={account.main_host}
          hostProtocol={account.main_host_protocol}
        />
      </View>
    </TabHeader>
  )
}
