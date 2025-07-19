import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { ShoppingCart } from 'iconsax-react-native'
import { Colors } from '../theme/colors'
import { fontSize, spacing } from '../theme/dimensions';
import { fontFamily } from '../theme/fonts'

const CartButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
    <LinearGradient 
    colors={["#8743FF","#4136F1"]} 
    start={{
        x:0,
        y:0.5
    }}
    end={{
        x:1,
        y:0
    }}
    style={styles.cart}>
    <ShoppingCart size="32" color={Colors.background}/>
        <Text style={styles.cartTitle}>Add to Cart | $349.99</Text>
    </LinearGradient>
    </TouchableOpacity>
  )
}

export default CartButton

const styles = StyleSheet.create({
    container:{
       padding:25,
    },
    cart:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:10,
        marginVertical:spacing.xs,
        height:45,
        borderRadius:100
    
    },
    cartTitle:{
        color: Colors.background,
        fontSize:fontSize.md,
        fontFamily:fontFamily.SemiBold
    }
})