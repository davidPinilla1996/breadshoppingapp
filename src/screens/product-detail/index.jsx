import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { styles } from '../../styles';
import { useSelector } from "react-redux";

const ProductDetail = ({ navigation }) => {
  const product = useSelector((state) => state.products.selected);

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
