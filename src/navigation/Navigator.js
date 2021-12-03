import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { Image, View, Text } from "react-native"
import { MainScreen } from "../screens/stackNavigation/MainScreen/MainScreen"
import { AuthorizationScreen } from "../screens/stackNavigation/AuthorizationScreen/AuthorizationScreen"
import { MainTabScreen } from "../screens/tabNavigation/MainTabScreen"
import { OrdersTabScreen } from "../screens/tabNavigation/OrdersTabScreen/OrdersTabScreen"
import { ProductsTabScreen } from "../screens/tabNavigation/ProductsTabScreen/ProductsTabScreen"
import { StatisticsTabScreen } from "../screens/tabNavigation/StatisticsTabScreen"
import { MessageTabScreen } from "../screens/tabNavigation/MessageTabScreen"
import { NavigatorStyle } from "./NavigatorStyle"

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      headerShown: false
    }}>
      <Tab.Screen
        name="MainTabScreen"
        component={MainTabScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={NavigatorStyle.icon}>
              <Image source={require('../img/icons/main_icon.png')} style={{tintColor: focused ? '#070edb' : '#494a4d', ...NavigatorStyle.icon_image}} />
              <Text style={{color: focused ? '#070edb' : '#494a4d', ...NavigatorStyle.icon_text}}>Главная</Text>
            </View>
          )}}
      />
      <Tab.Screen
        name="OrdersTabScreen"
        component={OrdersTabScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={NavigatorStyle.icon}>
              <Image source={require('../img/icons/orders_icon.png')} style={{tintColor: focused ? '#070edb' : '#494a4d', ...NavigatorStyle.icon_image}} />
              <Text style={{color: focused ? '#070edb' : '#494a4d', ...NavigatorStyle.icon_text}}>Заказы</Text>
            </View>
          )}}
      />
      <Tab.Screen
        name="ProductsTabScreen"
        component={ProductsTabScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={NavigatorStyle.icon}>
              <Image source={require('../img/icons/products_icon.png')} style={{tintColor: focused ? '#070edb' : '#494a4d', ...NavigatorStyle.icon_image}} />
              <Text style={{color: focused ? '#070edb' : '#494a4d', ...NavigatorStyle.icon_text}}>Товары</Text>
            </View>
          )}}
      />
      <Tab.Screen
        name="StatisticsTabScreen"
        component={StatisticsTabScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={NavigatorStyle.icon}>
              <Image source={require('../img/icons/statistics_icon.png')} style={{tintColor: focused ? '#070edb' : '#494a4d', ...NavigatorStyle.icon_image}} />
              <Text style={{color: focused ? '#070edb' : '#494a4d', ...NavigatorStyle.icon_text}}>Статистика</Text>
            </View>
          )}}
      />
      <Tab.Screen
        name="MessageTabScreen"
        component={MessageTabScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={NavigatorStyle.icon}>
              <Image source={require('../img/icons/message_icon.png')} style={{tintColor: focused ? '#070edb' : '#494a4d', ...NavigatorStyle.icon_image}} />
              <Text style={{color: focused ? '#070edb' : '#494a4d', ...NavigatorStyle.icon_text}}>Сообщения</Text>
            </View>
          )}}
      />
    </Tab.Navigator>
  )
}

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false
        }}
        initialRouteName="App"
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Authorization" component={AuthorizationScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
