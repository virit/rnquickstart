import Login from "../src/pages/user/login";
import {RouterType} from "./RouterType";
import Main from "../src/pages/home/main";
import {Button} from "native-base";


const router: RouterType = {
  routeConfigMap: {
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
    Home: {
      screen: Main,
      navigationOptions: {
        headerShown: false,
      },
    }
  },
  stackConfig: {
    initialRouteName: 'Login',
  },
};

export default router;
