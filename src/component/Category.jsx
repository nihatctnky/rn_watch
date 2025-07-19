import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { fontSize, spacing } from '../theme/dimensions';
import { Colors } from '../theme/colors';
import { fontFamily } from '../theme/fonts';
import { category } from '../data/category';

const Category = ({selectedCategory,handleUpdateCategory}) => {
 
  const handleSelectedCategory = category => {
    handleUpdateCategory(category);
  };
  return (
    <FlatList
      data={category}  keyExtractor={(item) => item.name}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => {
            handleUpdateCategory(item.name);
          }}
          showsHorizontalScrollIndicator={false}
        >
          <Text
            style={[
              styles.categoryText,
              selectedCategory === item.name && { color: Colors.purple },
            ]}
          >
            {item.name}
          </Text>
{
    selectedCategory===item.name && 
    <View style={styles.underline} />
}
        </TouchableOpacity>
      )}
  
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={
        <View style={{ paddingHorizontal: spacing.sm }} />
      }
    />
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryText: {
    fontSize: fontSize.md,
    color: Colors.gray,
    fontFamily: fontFamily.SemiBold,
  },
  underline: {
    borderBottomColor: Colors.purple,
    borderBottomWidth: 2,
    marginTop: 5,
    width: '50%',
  },
});
