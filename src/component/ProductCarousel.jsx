import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { spacing } from '../theme/dimensions'
import { smartWatch } from '../data/smartwatch'
import { Colors } from '../theme/colors'

const screenWidth = Dimensions.get("window").width
const ProductCarousel = ({images}) => {
    
  const[activeSlide,setActiveSlide]=useState(0)
  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveSlide(viewableItems[0].index);
    }
  });
  

  return (
   <>
   <FlatList
  data={images}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <View  style={styles.productImageWrapper}>
      <Image style={styles.productImage} source={{ uri: item }}  />
    </View>
  )}
  horizontal
  onViewableItemsChanged={onViewRef.current}
  pagingEnabled
  showsHorizontalScrollIndicator={false}
  snapToAlignment="center"
  snapToInterval={screenWidth}
  decelerationRate="fast"

/>


   <View style={styles.pagination}>
   {
    images.map((_,index)=>(
      <View 
      key={index}
      style={[styles.dot,index===activeSlide && {
        width:20,
        borderRadius:32
      },
      {
        backgroundColor: index===activeSlide?Colors.purple:Colors.gray
      }
    ]}/>
      
    ))
    
   }
   </View>
   </>
  )
}
export default ProductCarousel

const styles = StyleSheet.create({
    productImageWrapper:{
      justifyContent:"center",
      alignItems:"center",
      width:screenWidth,
      paddingTop: spacing.md
    },
    productImage:{
        height:350,
        width:350,
        resizeMode:"cover",
        borderRadius:10
    },
    pagination:{
      flexDirection:"row",
      justifyContent:"center",
      marginVertical:10,
    },
    dot:{
      height:10,
      width:10,
      borderRadius:5,
      marginHorizontal: spacing.xs,
      backgroundColor:Colors.gray
    }
})