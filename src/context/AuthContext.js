import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: "signin", payload: token });
      navigate("Home");
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
      navigate("Home");
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
      navigate("Home");
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
      await AsyncStorage.removeItem("token");
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
  { token: null, errorMessage: "" }
);
