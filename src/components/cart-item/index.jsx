import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import { THEME } from "../../constants/theme";
import { FontAwesome5 } from '@expo/vector-icons'; 

const CartItem = ({ item, onDelete }) => {
    return (
       <View style={styles.container}>
           <View style={styles.headerContainer}>
               <Text style={styles.header}>{item.title}</Text>
           </View>
           <View style={styles.contentContainer}>
               <Text style={styles.quantity}>{item.quantity}</Text>
               <Text style={styles.price}>{item.price}</Text>
           </View>
           <TouchableOpacity onPress={() => onDelete(item.id)}>
                <FontAwesome5 name="trash" size={24} color={THEME.colors.primary} />
           </TouchableOpacity>
       </View>
    );
};


export default CartItem;
