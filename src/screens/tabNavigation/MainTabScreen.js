import React from "react"
import { TabHeader } from "../../components/TabHeader/TabHeader"
import { useDispatch, useSelector } from "react-redux";
import { Text, TouchableOpacity, View } from "react-native";
import { ShopCard } from "../../components/ShopCard/ShopCard"
import { logOut } from "../../redux/actions";

export const MainTabScreen = () => {
  const account = useSelector(state => state.authorization.account)
  const dispatch = useDispatch()

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
        <TouchableOpacity
          style={{width: '100%', backgroundColor: '#2196F3', marginTop: 10, padding: 10, alignItems: 'center'}}
          onPress={() => dispatch(logOut())}>
          <Text
            style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}
          >Log Out</Text>
        </TouchableOpacity>
      </View>
    </TabHeader>
  )
}
