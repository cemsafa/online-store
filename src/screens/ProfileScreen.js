import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";

const ProfileScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text>Profile Screen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

ProfileScreen.navigationOptions = {
  title: "Profile",
  tabBarIcon: <FontAwesome name="user" size={20} />,
};

const styles = StyleSheet.create({});

export default ProfileScreen;
