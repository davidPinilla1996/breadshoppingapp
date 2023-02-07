import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

//este componente va a recibir como parametro todos los items y una funcion que me permita clickearlo
const CategoryItem = ({item, onSelected}) => {
  return (
   <View style={styles.container}>
      <TouchableOpacity  
        style={{...styles.contentContainer, backgroundColor: item.color }}
        onPress={() => onSelected(item)}
      >
         <View>
            <Text style={styles.title}>{item.title}</Text>
         </View>
      </TouchableOpacity>
   </View>
  )
}

export default CategoryItem;