import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home';
import { useFonts } from "expo-font";

const {Screen,Navigator} = createStackNavigator();

export function StackRotas(){
    const [fontsLoaded] = useFonts({
        'BebasNeue': require('../../assets/fonts/BebasNeue-Regular.ttf'),
      });

    return(
        <Navigator>
            <Screen
                name='Home'
                component={Home}
                options={{
                    headerTransparent: 'transparent',                   
                    title:'Hive',
                    headerTitleAlign: 'center',
                    headerShadowVisible: 'false',
                    headerTitleStyle:{
                        fontFamily: 'BebasNeue',
                        fontSize: 30
                    }             
                }}
            />
        </Navigator>
    )
}