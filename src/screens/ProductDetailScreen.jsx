import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import Header from '../component/Header';
import ProductCarousel from '../component/ProductCarousel';
import { fontSize, spacing } from '../theme/dimensions';
import { Colors } from '../theme/colors';
import { Star1 } from 'iconsax-react-native';
import { fontFamily } from '../theme/fonts';
import CartButton from '../component/CartButton';

const colorsData = [
  {
    colorName: 'Silver',
    colorValue: '#F0F2F2',
  },
  {
    colorName: 'Bright Orange',
    colorValue: '#F25745',
  },
  {
    colorName: 'Starlight',
    colorValue: '#FAF6F2',
  },
];

const ProductDetailScreen = ({ route }) => {
  const { item } = route.params;

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedTab, setSelectedTab] = useState('Details');

  return (
 
      <View style={styles.container}>
           <ScrollView 
          
           showsVerticalScrollIndicator={false}
           >
        <Header />
        <ProductCarousel images={item.images} />

        <View style={styles.titleContainer}>
          {/* title wrapper*/}
          <View style={styles.titleWrapper}>
            <Text
              style={styles.productTitle}
              numberOfLines={3}
              ellipsizeMode="tail"
            >
              {item.name}
            </Text>
            <Text style={styles.brand}>{item.brand}</Text>
          </View>

          {/* rating  wrapper*/}
          <View style={styles.ratingWrapper}>
            <Star1 size="28" color={Colors.yellow} variant="Bold" />
            <Text style={styles.ratingValue}>4.8</Text>
          </View>
        </View>

        {/* color container*/}

        <View style={styles.colorContainer}>
          <Text style={styles.colorHeading}>Colors</Text>

          {/* colors Card*/}
          <View style={styles.parnetSelectColorContainer}>
            <FlatList
              data={colorsData}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.selectColorContainer,
                    item.colorValue === selectedColor && {
                      borderColor: Colors.purple,
                    },
                  ]}
                  onPress={() => {
                    setSelectedColor(item.colorValue);
                  }}
                >
                  <View
                    style={[
                      styles.circleColor,
                      {
                        backgroundColor: item.colorValue,
                      },
                    ]}
                  />
                  <Text style={styles.colorText}>{item.colorName}</Text>
                </TouchableOpacity>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => (
                <View style={{ width: spacing.sm }} />
              )}
            />
          </View>
        </View>

        {/* Detail rewiew*/}
        <View style={styles.detailsRewiewTabs}>
          <TouchableOpacity onPress={() => setSelectedTab('Details')}>
            <Text
              style={[
                styles.tabText,
                selectedTab == 'Details' && { color: Colors.purple },
              ]}
            >
              Details
            </Text>
            {selectedTab === 'Details' && <View style={styles.underline} />}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelectedTab('Review')}>
            <Text
              style={[
                styles.tabText,
                selectedTab == 'Review' && { color: Colors.purple },
              ]}
            >
              Review
            </Text>
            {selectedTab === 'Review' && <View style={styles.underline} />}
          </TouchableOpacity>
        </View>

        {/* content view */}

        <Text style={styles.detailsContent}>
          {selectedTab === 'Details' ? item.details : item.review}
        </Text>
        </ScrollView>


        {/* Add to cart*/}

        <CartButton/>
      </View>
   
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.sm,
    backgroundColor: Colors.background,
    paddingTop:55
    
    
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 12,
    marginVertical: 16,
  },
  titleWrapper: {
    flex: 1,
    padding:spacing.sm
  },
  productTitle: {
    fontFamily: fontFamily.Bold,
    color: Colors.black,
    fontSize: fontSize.lg,
  },
  brand: {
    fontFamily: fontFamily.Medium,
    color: Colors.gray,
    fontSize: fontSize.sm,
    paddingVertical: spacing.sm,
  },

  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: Colors.lavendark,
    borderRadius: spacing.md,
    padding: spacing.sm,
    height: 50,
    marginTop: spacing.md,
  },
  ratingValue: {
    color: Colors.gray,
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.md,
  },
  colorContainer: {
    padding: spacing.sm,
  },
  colorHeading: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.SemiBold,
    color: Colors.black,
    paddingBottom: spacing.md,
  },
  parnetSelectColorContainer: {},
  selectColorContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 4,
    padding: spacing.sm,
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleColor: {
    height: spacing.md,
    width: spacing.md,
    backgroundColor: Colors.purple,
    borderRadius: spacing.md / 2,
  },
  colorText: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.SemiBold,
  },
  detailsRewiewTabs: {
    padding:spacing.sm,
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
  },
  tabText: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.Medium,
    color: Colors.gray,
  },
  underline: {
    borderBottomWidth: 2,
    padding: 2,
    borderBottomColor: Colors.purple,
    width: '50%',
  },
  detailsContent: {
    paddingVertical:spacing.sm,
    
    color:Colors.gray,
    fontFamily:fontFamily.Regular,
    fontSize:fontSize.md,
    paddingBottom:50

  },
});
