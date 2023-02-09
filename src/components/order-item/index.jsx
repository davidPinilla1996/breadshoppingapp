import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { formatDate } from "../../utils/index";
import { THEME } from '../../constants/theme';

//este componente va a recibir como parametro todos los items y una funcion que me permita clickearlo
const OrderItem = ({item, onDelete}) => {
  return (
   <View style={styles.container}>
      <View  style={styles.headerContainer}>
         <Text style={styles.date}>{formatDate(item.date)}</Text>
      </View>
      <View  style={styles.contentContainer}>
         <View>
                <Text style={styles.total}>${item.total}</Text>
         </View>
         <TouchableOpacity onPress={() => onDelete(item.id)}>
             <FontAwesome5 name="trash" size={24} color={THEME.colors.black} />
         </TouchableOpacity>
      </View>
   </View>
  );
};

export default OrderItem;