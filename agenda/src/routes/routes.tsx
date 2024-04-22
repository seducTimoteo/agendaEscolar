import { createNativeStackNavigator } from'@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import pages
import TelaInicial from '../pages/telaInicial/Index';
import Login from  '../pages/login/Login';
import Student from '../pages/dashboard/student/Student';
import Gestao from '../pages/dashboard/Gestao/Gestao'
// import tabs
import Infor from '../pages/dashboard/Gestao/Gestao';
import Calendar from '../pages/Calendar/Calendar';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity} from 'react-native';


const Stack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();
function TabNavigation (){

    return(
        <Tab.Navigator>
            <Tab.Screen
             name='Home' component={Student}/>
             <Tab.Screen
             name='Agenda' component={Calendar}/>
             <Tab.Screen
             name='Eventos' component={Infor}/>
        </Tab.Navigator>
    )
}

export default function Routes(){


    return(
        <Stack.Navigator initialRouteName='TelaInicial'>
              <Stack.Screen
                name='TelaInicial'
                component={TelaInicial}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
            />
             <Stack.Screen
                name='Student'
                component={Student}
                options={{ 
                    headerShown: true,
                    headerTitle: 'Home',
                    
                    headerStyle: {
                        backgroundColor: '#345c8c',
                         
                    },
                    headerBackVisible: false,
                    headerTitleStyle: {
                        color: '#fff'
                    },

                    headerRight: (props) => (
                    <TouchableOpacity>
                        <Icon name='notifications' size={24} color='#fff' />
                    </TouchableOpacity>)
                 }}
            />
            <Stack.Screen
                name='Gestao'
                component={Gestao}
                options={{
                    headerShown: true,
                    headerTitle: 'Home',
                    
                    headerStyle: {
                        backgroundColor: '#345c8c',
                         
                    },
                    headerBackVisible: false,
                    headerTitleStyle: {
                        color: '#fff'
                    },
                }}
            />
        
        </Stack.Navigator>
    )
}