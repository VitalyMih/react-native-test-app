import React from "react"
import { ScrollView } from "react-native"
import { ProductCard } from "./ProductCard/ProductCard"


export const ProductList = ({ products }) => {
  return (
    <ScrollView>
      {products.reverse().map(product => <ProductCard product={product} key={product.id}/>)}
    </ScrollView>
  )
}
