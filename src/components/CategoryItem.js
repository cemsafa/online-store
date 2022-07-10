import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const CategoryItem = ({ name, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 5,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 10,
  },
});

export default CategoryItem;
