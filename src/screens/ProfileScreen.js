import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";

const ProfileScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <Text h2 style={styles.text}>
        Welcome
      </Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
  text: {
    textAlign: "center",
  },
});

export default ProfileScreen;
