import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import ProductItem from "../components/ProductItem";
import { getProducts } from "../api/ProductsService";

const ProductListScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  function renderProduct({ item: product }) {
    return (
      <ProductItem
        {...product}
        onPress={() => {
          navigation.navigate("ProductDetail", {
            productId: product.id,
          });
        }}
      />
    );
  }

  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
  );
};

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: "#eeeeee",
  },
  productsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});

export default ProductListScreen;
