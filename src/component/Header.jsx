import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ArrowLeft, Heart } from 'iconsax-react-native'
import { Colors } from '../theme/colors'
import { spacing } from '../theme/dimensions'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <ArrowLeft size="32" color={Colors.black}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Heart size="32" color={Colors.black}/>
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})