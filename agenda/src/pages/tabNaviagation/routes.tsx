import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../home/Home';
import Infor from '../dashboard/Gestao/Gestao';
import Calendar from '../Calendar/Calendar'
import UserPerfile from '../dashboard/Perfile/UserPerfile';


const Tab = createBottomTabNavigator();


export const Navigate = ()=>{

    return(

        <Tab.Navigator>
            <Tab.Screen name='Home'  component={Home}/>
            <Tab.Screen name='Infor'  component={Infor}/>
            <Tab.Screen name='Calendar' component={Calendar}/>
            <Tab.Screen name='userPerfile' component={UserPerfile}/>        </Tab.Navigator>
    )
};