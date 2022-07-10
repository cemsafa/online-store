import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import CategoryItem from "../components/CategoryItem";
import { getCategories } from "../api/CategoriesService";

const CategoryScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(getCategories());
  });

  function renderCategorie({ item: category }) {
    return (
      <CategoryItem
        {...category}
        onPress={() => {
          navigation.navigate("ProductList", {
            categoryId: category.id,
          });
        }}
      />
    );
  }

  return (
    <FlatList
      style={styles.categoriesList}
      contentContainerStyle={styles.categoriesListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={categories}
      renderItem={renderCategorie}
    />
  );
};

const styles = StyleSheet.create({
  categoriesList: {
    backgroundColor: "#eeeeee",
  },
  categoriesListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});

export default CategoryScreen;
