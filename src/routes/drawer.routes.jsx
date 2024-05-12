import{createDrawerNavigator} from '@react-navigation/drawer'
import {MaterialIcons} from '@expo/vector-icons'
import PortalHome from '../screens/PortalHome'

const{Screen,Navigator} = createDrawerNavigator()

export default function DrawerRoutes(){

    return (
        <Navigator>
            <Screen
                name="Home"
                component={PortalHome}
                options={{
                    drawerIcon :()=><MaterialIcons name='home' size={34}
                     />
                }}
               
            />
        </Navigator>
    )
}