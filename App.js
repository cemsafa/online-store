import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import ProfileScreen from "./src/screens/ProfileScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import OrderStatusScreen from "./src/screens/OrderStatusScreen";
import CartScreen from "./src/screens/CartScreen";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";
import ProductListScreen from "./src/screens/ProductListScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import { FontAwesome5 } from "@expo/vector-icons";
import HomeScreen from "./src/screens/HomeScreen";

const productListFlow = createStackNavigator(  
  { 
    Home: HomeScreen,
    ProductList: ProductListScreen,
    ProductDetail: ProductDetailScreen,
  }, 
  
);

productListFlow.navigationOptions = {    
  title: "Home",
  tabBarIcon: <FontAwesome5 name="home" size={20} />,
};

const switchNavigator = createSwitchNavigator(
  
{   
  // ResolveAuth: ResolveAuthScreen,
  // loginFlow: createStackNavigator({
  //   Signup: SignupScreen,
  //   Signin: SigninScreen,
   
  // }),
  mainFlow: createBottomTabNavigator({
    
    productListFlow,
    OrderStatus: OrderStatusScreen,
    Cart: CartScreen,
    Profile: ProfileScreen,
  }),
}
);

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => setNavigator(navigator)} />
    </AuthProvider>
  );
};
