import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../theme/colors'
import { fontSize, spacing } from '../theme/dimensions';
import { fontFamily } from '../theme/fonts';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({item}) => {
  const navigation=useNavigation()
  return (
    <TouchableOpacity style={styles.container}
    onPress={()=>navigation.navigate("ProductDetail",{item})}
    >
  <View style={styles.imageWrapper}>
  <Image style={styles.productImage} source={{ uri: item.images[0] }} />

  </View>
  {/*content name price */}
  <View style={styles.contentContainer}>
    <Text style={styles.contenttitle}>{item.name}</Text>
    <Text style={styles.contenttext}>{item.brand}</Text>
    <Text style={styles.contentprice}>${item.price}</Text>
  </View>
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  container:{
    width:"48%",
  
    elevation: 5,
    backgroundColor:Colors.card,
    borderRadius:12,
    marginVertical:spacing.md

  },
  imageWrapper:{
    borderRadius:12,
    backgroundColor:"#FFC8B7",
    margin:spacing.sm,
     justifyContent:"center",
    alignItems:"center"
  },
  productImage:{
    width:"100%",
    height:150,
    resizeMode:"cover",
  },
  contentContainer:{
    padding:10,
    gap:13

  },
  contenttitle:{
    fontSize:fontSize.md,
    fontWeight:"600",
    fontFamily:fontFamily.SemiBold,
    height:19
  },
  contenttext:{
    fontSize:fontSize.md,
    color:Colors.gray,
    fontFamily:fontFamily.Medium
  },
  contentprice:{
    fontSize:fontSize.md,
    color:"#5B41FF",
    fontWeight:fontFamily.SemiBold
  },
})