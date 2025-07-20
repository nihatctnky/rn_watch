import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { fontSize, iconSize, spacing } from '../theme/dimensions';
import { Colors } from '../theme/colors';
import { fontFamily } from '../theme/fonts';
import Category from '../component/Category';
import ProductCard from '../component/ProductCard';
import { smartWatch } from '../data/smartwatch';
import { headphones } from '../data/headphones';

const HomeScreen = () => {

  const [data, setData] = useState(smartWatch);

  const [selectedCategory, setSelectedCategory] = useState('Smart Watch');


  const handleUpdateCategory=(newCategory)=>{
    if(newCategory === "Smart Watch") {
     
      setData(smartWatch)
    }else if (newCategory === "Headphones"){

      setData(headphones)
    }
    setSelectedCategory(newCategory)

  }



  return (
    <View style={styles.container}>

    <FlatList 

    ListHeaderComponent={ 
      <>
  <View>
        <Text style={styles.headline}>Find your suitable watch now.</Text>
      </View>
      {/* search */}
      <View style={styles.mainInputContainer}>
        <View style={styles.inputWrapper}>
          <Image style={styles.logo} source={require('../../src/assets/images/Search.png')} />
          <TextInput
            style={styles.textInput}
            placeholderTextColor={Colors.placeholderText}
            placeholder="Search Product"
          />
        </View>

        {/* category icon */}
        <View style={styles.categoryContainer}>
          <Image style={styles.logo} source={require('../../src/assets/images/Category.png')} />
        </View>
      </View>
      <Category 
      selectedCategory={selectedCategory} handleUpdateCategory={handleUpdateCategory}/>
      </> 
    }
    numColumns={2}
    keyExtractor={(item) => item.id.toString()}
    data={data}
    renderItem={({item})=>(
      <ProductCard
     
       item={item}/>
    )}
    columnWrapperStyle={{
      justifyContent:"space-between"
    }}
    contentContainerStyle={{
      paddingBottom:20,
      padding: spacing.md,
    }}
    showsVerticalScrollIndicator={false}
    />
     
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {

    backgroundColor: Colors.background,
   
    paddingTop: 80,
  },
  headline: {
    fontSize: fontSize.xxl,
    color: Colors.black,
    fontFamily: fontFamily.Bold,
  },
  mainInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.xl,
  },
  inputWrapper: {
    flex: 1,
    borderWidth: 2,
    flexDirection: 'row',
    padding: spacing.md,
    alignItems: 'center',
    gap: 7,
    borderRadius: 100,
    borderColor: Colors.placeholderText,
    paddingHorizontal: spacing.md,
  },
  logo: {
    height: iconSize.md,
    width: iconSize.md,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: fontSize.md,
    fontSize: fontSize.md,
    fontFamily: fontFamily.Medium,
  },
  categoryContainer: {
    paddingHorizontal: spacing.sm,
  },
  logo: {
    height: iconSize.sm,
    width: iconSize.sm,
  },
});
