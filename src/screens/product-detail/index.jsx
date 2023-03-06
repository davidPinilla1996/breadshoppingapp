import React from 'react'
import { ImageBackground, Text, View, Button } from 'react-native'
import { styles } from '../../styles';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/index";
import { THEME } from '../../constants/theme';

const ProductDetail = ({ navigation }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={(require("../../img/panArtesanal.jpg"))} style={styles.image}>
        <Text style={styles.title}>{product?.title}</Text>
        <Text style={styles.title}>{product?.description}</Text>
        <Text style={styles.title}>{product?.weight}</Text>
        <Text style={styles.title}>{product?.price}</Text>
        <Button 
           title="add to cart"
           onPress={onAddToCart} 
           color={THEME.colors.primary}
        />
        </ImageBackground>  
    </View>
  );
};


export default ProductDetail;
