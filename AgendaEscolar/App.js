import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home/home';
import Gerencia from './gerencia/gerencia';
import CalendarioScreen from './calendario/calendario';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>      
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // Oculta o cabeçalho (Header) de todas as telas
          headerStyle: {
            backgroundColor: 'blue', // Cor do cabeçalho
          },
          headerTintColor: 'white', // Cor do texto no cabeçalho
          headerTitleAlign: 'center', // Alinhamento do texto do título no cabeçalho
          headerTitleStyle: {
            fontWeight: 'bold', // Estilo do texto do título no cabeçalho
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Gerencia" component={Gerencia} />
        <Tab.Screen name="Calendario" component={CalendarioScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
