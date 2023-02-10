import React from 'react'
import { FlatList, ImageBackground, SafeAreaView, Text, View, Image } from 'react-native'
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
           data={CATEGORIES}
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

