import React, { useEffect, useState, useContext } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Text, Button } from "react-native-elements";
import { CartContext } from "../context/CartContext";
import { FontAwesome } from "@expo/vector-icons";
import { CartIcon } from "../components/CartIcon";

export function CartScreen({ navigation }) {
  const { items, getItemsCount, getTotalPrice } = useContext(CartContext);

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
      <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
        <Text style={styles.lineRight}>$ {total}</Text>
      </View>
    );
  }
  function renderItem({ item }) {
    return (
      <View style={styles.cartLine}>
        <Text style={styles.lineLeft}>
          {item.product.name} x {item.qty}
        </Text>
        <Text style={styles.lineRight}>$ {item.totalPrice}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <Text h2 style={styles.header}>
        Cart
      </Text>
      <View style={styles.infoContainer}>
        <FlatList
          style={styles.itemsList}
          contentContainerStyle={styles.itemsListContainer}
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.product.id.toString()}
          ListFooterComponent={Totals}
        />
      </View>
    </SafeAreaView>
  );
}

CartScreen.navigationOptions = {
  title: "Cart",
  // tabBarIcon: <FontAwesome name="shopping-cart" size={20} />,
  tabBarIcon: (
    <TouchableOpacity>
      <FontAwesome
        name="shopping-cart"
        size={20}
        style={{ flex: 1, position: "absolute" }}
      />
      <CartIcon />
    </TouchableOpacity>
  ),
};

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: "row",
  },
  cartLineTotal: {
    flexDirection: "row",
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
  },
  lineTotal: {
    fontWeight: "bold",
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: "#333333",
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#333333",
    textAlign: "right",
  },
  itemsList: {
    backgroundColor: "#eeeeee",
    marginTop: 50,
  },
  itemsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  infoContainer: {
    padding: 16,
  },
  header: {
    paddingTop: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
