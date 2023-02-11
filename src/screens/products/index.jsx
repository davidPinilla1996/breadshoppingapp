import React from 'react'
import { SafeAreaView, FlatList, ImageBackground } from 'react-native'
import { styles } from '../../styles';
import { ProductItem } from '../../components';
import { PRODUCTS } from '../../constants/data/index'

const Products = ( { navigation, route }) => {
  const {categoryId} = route.params;

  const filteredProducts = PRODUCTS.filter((product) => product.categoryId === categoryId);

 const onSelected = (item) => {
     navigation.navigate("ProductDetail", {
        productId: item.id,
        title: item.title,
     });
 };

 const renderItem = ({  item }) => <ProductItem item={item} onSelected={onSelected} />;
 const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
        <FlatList 
           data={filteredProducts}
           renderItem={renderItem}
           keyExtractor={keyExtractor}
           style={styles.contentList}
        />
        
    </SafeAreaView>
  )
}


export default Products;
