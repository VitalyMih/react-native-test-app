import React, { useEffect } from "react"
import { View, ActivityIndicator, FlatList } from "react-native"
import { TabHeader } from "../../../components/TabHeader/TabHeader"
import { useDispatch, useSelector } from "react-redux"
import { getProducts, getRefreshProducts, setProductsPage } from "../../../redux/actions"
import { ProductsTabStyle } from "./ProductsTabStyle"
import { ProductCard } from "../../../components/ProductCard/ProductCard"


export const ProductsTabScreen = () => {
  const products = useSelector(state => state.get.products)
  const mail = useSelector(state => state.authorization.mail)
  const password = useSelector(state => state.authorization.password)
  const productsPage = useSelector(state => state.get.productsPage)
  const refresh = useSelector(state => state.get.refresh)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts(mail, password, productsPage))
    dispatch(setProductsPage())
  }, [])

  return (
    <TabHeader text="Товары">
      {
        products.length > 0
          ? <View style={{flex: 1}}>
              <FlatList
                data={products}
                renderItem={({ item }) => <ProductCard product={item}/> }
                keyExtractor={(product) => product.id}
                onEndReached={() => {
                  dispatch(getProducts(mail, password, productsPage))
                  dispatch(setProductsPage())
                }}
                onEndReachedThreshold={0.1}
                refreshing={refresh}
                onRefresh={() => dispatch(getRefreshProducts(mail, password))}
              />
            </View>
          : <View style={ProductsTabStyle.loader}><ActivityIndicator size='large' color='#5b39b8' /></View>
      }
    </TabHeader>
  )
}
