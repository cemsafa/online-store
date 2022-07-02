import React from "react";
import { View, StyleSheet } from "react-native";
import ProductItem from "../components/ProductItem";

const ProductListScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>

    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {},
  
});

export default ProductListScreen;