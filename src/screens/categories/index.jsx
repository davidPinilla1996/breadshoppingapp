import React from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import { styles } from './styles';
import { CategoryItem } from "../../components";
import { CATEGORIES } from "../../constants/data/index";

const  Categories = ( {navigation} ) => {
  const onSelected = (item) => {
    navigation.navigate("Products",{
      categoryId: item.id,
      title: item.title
    });
  }; 
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
  const keyExtactor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
         <FlatList 
            data={CATEGORIES}
            renderItem={renderItem}
            keyExtractor={keyExtactor}
            style={styles.containerList}
            contentContainerStyle={styles.contentContainerList}
         />
    </SafeAreaView>
  )
}


export default Categories;
