import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import PortalHome from "../screens/PortalHome";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";

const { Screen, Navigator } = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={PortalHome}
        options={{
          drawerIcon: () => <MaterialIcons name="home" size={34} />,
        }}
      />
      <Screen
        name="Sair"
        component={Home}
        options={{
          drawerIcon: () => (
            <Ionicons name="exit-outline" size={24} color="black" />
          ),
          
        }}
      />
    </Navigator>
  );
}
