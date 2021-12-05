import React from "react"
import { Image, View, Text } from "react-native"
import { ProductCardStyle } from "./ProductCardStyle"

export const ProductCard = ({ product }) => {
  return (
    <View style={ProductCardStyle.container}>
      <View style={ProductCardStyle.image_container}>
        { product.images.length > 0
          ? <Image source={{uri: product.images[0].original_url}} style={ProductCardStyle.image} />
          : <Image source={{uri: 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'}} style={ProductCardStyle.image} />
        }
      </View>
      <View style={ProductCardStyle.main_content}>
        <Text style={ProductCardStyle.main_title}>{product.title}</Text>
        <Text style={ProductCardStyle.main_text}>Остаток: {product.variants.reduce((sum, current) => sum + current.quantity, 0)}</Text>
        <Text style={ProductCardStyle.main_text}>Артикул: {product.variants.length > 1 ? '-' : product.variants[0].sku}</Text>
      </View>
      <View style={ProductCardStyle.price_content}>
        {
        product.variants.length > 1
          ? <Text style={ProductCardStyle.price_text}>
            {Math.min.apply(null, product.variants.map(item => item.price))} - {Math.max.apply(null, product.variants.map(item => item.price))} ₽
            </Text>
          : <Text style={ProductCardStyle.price_text}>{product.variants[0].price} ₽</Text>
        }
      </View>
    </View>
  )
}
