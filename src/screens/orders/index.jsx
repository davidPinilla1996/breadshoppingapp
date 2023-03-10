import { View, FlatList } from 'react-native';
import { useCallback, useEffect } from "react";
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { getOrders, deleteOrder } from "../../store/actions/index";
import  OrderItem  from "../../components/order-item";
import { useFocusEffect } from '@react-navigation/native';

const Orders = ({ navigation }) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);
  const onDelete = (id) => {
    dispatch(deleteOrder(id));
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch])
  );

  const renderItem = ( { item } )  => <OrderItem item={item}  onDelete={onDelete}/>
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
        <FlatList 
         data={orders}
         renderItem={renderItem}
         keyExtractor={keyExtractor}
        />
    </View>
  );
};


export default Orders;
