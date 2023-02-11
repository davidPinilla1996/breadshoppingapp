import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { styles } from '../../styles';
import { PRODUCTS } from "../../constants/data";

const ProductDetail = ({ navigation, route }) => {
  const { productId, title } = route.params;

  const product = PRODUCTS.find((product) => product.id === productId);
  return (
    <View style={styles.container}>
      <ImageBackground source={(require("../../img/panArtesanal.jpg"))} style={styles.image}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.title}>{product.description}</Text>
        <Text style={styles.title}>{product.weight}</Text>
        <Text style={styles.title}>{product.price}</Text>
        </ImageBackground>  
    </View>
  );
};


export default ProductDetail;
