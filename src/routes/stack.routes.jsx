import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home';
import { useFonts } from "expo-font";
import Login from '../screens/Login';
import Equipe from '../screens/Equipe';
import Cadastro from '../screens/Cadastro';
import { PortalRoutes } from './Portal';

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
            <Screen
                name='Login'
                component={Login}
                options={{
                    headerTransparent: 'transparent',                   
                    title:'Login',
                    headerTitleAlign: 'center',
                    headerShadowVisible: 'false',
                    headerTitleStyle:{
                        fontFamily: 'BebasNeue',
                        fontSize: 30
                    }             
                }}
            />
            <Screen
                name='Equipe'
                component={Equipe}
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
            <Screen
                name='Cadastro'
                component={Cadastro}
                options={{
                    headerTransparent: 'transparent',                   
                    title:'Cadastro',
                    headerTitleAlign: 'center',
                    headerShadowVisible: 'false',
                    headerTitleStyle:{
                        fontFamily: 'BebasNeue',
                        fontSize: 30
                    }             
                }}
            />
            <Screen
                name="Portal"
                component={PortalRoutes}
                options={{
                    headerShown: false
                }}
            />
        </Navigator>
    )
}