import { View, FlatList } from 'react-native'
import { ORDERS } from "../../constants/data/orders"
import { styles } from './styles';
import  OrderItem  from "../../components/order-item";

const Orders = ({ navigation }) => {

  const onDelete = (id) => {};

  const renderItem = ( { item } )  => <OrderItem item={item}  onDelete={onDelete}/>
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
        <FlatList 
         data={ORDERS}
         renderItem={renderItem}
         keyExtractor={keyExtractor}
        />
    </View>
  );
};


export default Orders;
