import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const OrderScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>OrderScreen</Text>
    </View>
  );
};

OrderScreen.navigationOptions = {
  title: "Order Status",
  tabBarIcon: <FontAwesome5 name="clipboard-list" size={20} />,
};

const styles = StyleSheet.create({
  viewStyle: {},
  textStyle: {},
});

export default OrderScreen;
