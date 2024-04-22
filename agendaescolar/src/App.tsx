import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './navigation/Navigation'
import { StatusBar } from 'expo-status-bar';



export default function App({ barStyle}: any) {
  return (

    <NavigationContainer>
      <Navigation />
      <StatusBar hidden/>
    </NavigationContainer>


  );
}
