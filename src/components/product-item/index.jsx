import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

//este componente va a recibir como parametro todos los items y una funcion que me permita clickearlo
const ProductItem = ({item, onSelected}) => {
  return (
   <View style={styles.container}>
       <TouchableOpacity 
           style={styles.contentContainer}
           onPress={() => onSelected(item)}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.detailsContainer}>
               <Text style={styles.price}>${item.price}</Text>
               <Text style={styles.weight}>x{item.weight}</Text>
            </View>
       </TouchableOpacity>
   </View>
  )
}

export default ProductItem;