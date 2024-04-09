import { NavigationProp, ParamListBase} from '@react-navigation/native';


declare namespace ReactNavigation {
    interface RootParamLit extends ParamListBase{}
}

   

declare module '@react-navigation/native' {

    export type RootNavigationProp<T extends ParamListBase> = NavigationProp<T>;
    export function useNavigation<T extends NavigationProp<ReactNavigation.RootParamLit>>(): T;
}