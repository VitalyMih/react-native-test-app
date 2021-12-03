import React, { useEffect } from "react"
import { View, ActivityIndicator } from "react-native"
import { TabHeader } from "../../../components/TabHeader/TabHeader"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../../redux/actions"
import { ProductsTabStyle } from "./ProductsTabStyle"
import { ProductList } from "../../../components/ProductList"


export const ProductsTabScreen = () => {
  const products = useSelector(state => state.get.products)
  const mail = useSelector(state => state.get.mail)
  const password = useSelector(state => state.get.password)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts(mail, password))
  }, [])

  return (
    <TabHeader text="Товары">
      {
        products
          ? <View style={{flex: 1}}><ProductList products={products} /></View>
          : <View style={ProductsTabStyle.loader}><ActivityIndicator size='large' color='#5b39b8' /></View>
      }
    </TabHeader>
  )
}
