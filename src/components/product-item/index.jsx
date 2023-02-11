import React from 'react'
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './styles';

//este componente va a recibir como parametro todos los items y una funcion que me permita clickearlo
const ProductItem = ({item, onSelected}) => {
  return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.contentContainer}
                onPress={() => onSelected(item)}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.textDescription}>{item.description}</Text>
           </TouchableOpacity>
       </View>
  )
}

export default ProductItem;




{/* <View style={styles.detailsContainer}>
               <Text style={styles.price}>precio: ${item.price}</Text>
               <Text style={styles.weight}>unidades: {item.units}</Text>
            </View> */}