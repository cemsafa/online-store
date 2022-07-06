import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.viewStyle}>
      <Text style={styles.textStyle}>HomeScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {},
  textStyle: {},
});

export default HomeScreen;
