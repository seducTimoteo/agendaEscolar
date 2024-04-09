import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../home/Home'
import Dashboard from "../pages/dashbord/Dashboard";
import TelaInicial from  '../pages/TelaInicial/TelaInicial';
import Login from "../pages/Login/Login";


const Stack = createNativeStackNavigator()
export const Navigation = ()=>{
    

    return(
        <Stack.Navigator>
            <Stack.Screen
            name="TelaIncial"
            component={TelaInicial}
            options={{ headerShown: false }}
            />
             <Stack.Screen 
                name='Login'
                component={Login}
                options={{ headerShown: false }}

             />
             <Stack.Screen
                name="Home"
                component={Home}
                />
             <Stack.Screen
                  name='Dashboard'
                  component={Dashboard}
             />
        </Stack.Navigator>
       
    );
}