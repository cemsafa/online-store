import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", user: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { user: null, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => {
  return async () => {
    const user = JSON.parse(await AsyncStorage.getItem("user"));
    if (user) {
      dispatch({ type: "signin", payload: user });
      navigate("Category");
    } else {
      navigate("Signup");
    }
  };
};

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: "clear_error_message" });
  };
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const jsonData = JSON.stringify({ email, password });
      console.log(jsonData);
      await AsyncStorage.setItem("user", jsonData);
      navigate("Category");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const jsonData = JSON.stringify({ email, password });
      await AsyncStorage.setItem("user", jsonData);
      navigate("Category");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };
};

const signout = (dispatch) => {
  return async () => {
    try {
      await AsyncStorage.removeItem("user");
      dispatch({ type: "signout" });
      navigate("Signup");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign out",
      });
    }
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { user: null, errorMessage: "" }
);
