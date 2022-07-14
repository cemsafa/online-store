import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";

const OrderScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <Text h2 style={styles.text}>
        Order Status
      </Text>
    </SafeAreaView>
  );
};

OrderScreen.navigationOptions = {
  title: "Order Status",
  tabBarIcon: <FontAwesome5 name="clipboard-list" size={20} />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  text: {
    textAlign: "center",
  },
});

export default OrderScreen;
