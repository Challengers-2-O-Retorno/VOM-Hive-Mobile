import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import PortalHome from "../screens/PortalHome";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import Home from "../screens/Home";
import CadastroCampaign from "../screens/CriarCampaign";
import Campaign from "../screens/Campaign";

const { Screen, Navigator } = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={PortalHome}
        options={{
          drawerIcon: () => <MaterialIcons name="home" size={34} />,
          headerStyle: {
            backgroundColor: "#D88318",
          },
        }}
      />
      <Screen
        name="CriarCampanha"
        component={CadastroCampaign}
        options={{
          drawerIcon: () => <FontAwesome6 name="add" size={24} color="black" />,
          drawerLabel: "Criar campanha",
          headerTitle: "Criar campanha",
          headerStyle: {
            backgroundColor: "#D88318",
          },
        }}
      />
      <Screen
        name="Campaign"
        component={Campaign}
        options={{
          drawerItemStyle: { display: "none" },
          headerStyle: {
            backgroundColor: "#D88318",
          },
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
