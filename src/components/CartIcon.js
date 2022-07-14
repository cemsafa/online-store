import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CartContext } from "../context/CartContext";

export function CartIcon() {
  const { getItemsCount } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{getItemsCount()}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 18,
    marginBottom: 2,
    backgroundColor: "red",
    height: 12,
    paddingLeft: 2,
    paddingRight: 2,
    borderRadius: 12 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },
});
