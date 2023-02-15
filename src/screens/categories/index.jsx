import React from 'react'
import { FlatList, ImageBackground, SafeAreaView, Text, View, Image } from 'react-native'
import { styles } from './styles';
import { CategoryItem } from "../../components";
import { useSelector, useDispatch } from "react-redux"; 
import { selectCategory } from "../../store/actions";


const  Categories = ( {navigation} ) => {
  const dispatch = useDispatch(); 
  const categories = useSelector((state) => state.category.categories); 
  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate("Products",{ 
      title: item.title,
    });
  }; 
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
  const keyExtactor = (item) => item.id.toString();
  return (

  <SafeAreaView style={styles.container}>
     <ImageBackground source={(require("../../img/panArtesanal.jpg"))} style={styles.image}>
        <View style={styles.titleCategories}>
           <Text style={styles.textTitle}>FORNI</Text>
               <Image
                  style = {styles.img}
                  source = {(require ( "../../img/fondoPan.png"))}
               />
            <Text style={styles.textTitleTitle}> DOLCI</Text>   
        </View>
        <FlatList 
           data={categories}
           renderItem={renderItem}
           keyExtractor={keyExtactor}
           style={styles.containerList}
           contentContainerStyle={styles.contentContainerList}
        />
     </ImageBackground>
  </SafeAreaView>
  )
}


export default Categories;

