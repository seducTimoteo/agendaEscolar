import  { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { TextInputMask} from 'react-native-masked-text';


type RootStackParamList = {
    Login: { userType: string};
};

type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

interface LoginProps {
    route: LoginScreenRouteProp;
}

const Login = ({ route }: LoginProps) => {
    const { userType } = route.params;

    const navigation = useNavigation();

    const [cpf, setCpf] = useState<string>('');


    const handleLogin = () => {
        // Lógica de login aqui
        if(userType === 'Aluno'){
            navigation.navigate('Student')
        }else if( userType === 'Gestao'){
            navigation.navigate('Gestao')
        }
       
        console.log(cpf);
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/logo.png')}
                    resizeMode='center'
                />
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.textForm}>Faça o login para Acessar!</Text>
                <TextInputMask
                    style={styles.input}
                    placeholder='Digite Seu Cpf'
                    placeholderTextColor={'#000'}
                    keyboardType='numeric'
                    returnKeyType='done'
                    type={'cpf'}
                    onChangeText={text => setCpf(text)}
                    value={cpf}
                    
                />
                <TouchableOpacity onPress={handleLogin} style={styles.button}>
                    <Text style={styles.text}>Acessar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerTitle: {
        flex: 1,
        width: 190,
        marginTop: 130,
        bottom: 20,
        alignSelf: 'center'
    },
    image: {
        width: 190,
        height: 150,
        alignSelf: 'center'
    },
    containerForm: {
        flex: 2,
        height: 'auto',
        backgroundColor: '#345c8c',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: '5%'
    },
    textForm: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 20
    },
    input: {
        width: '70%',
        height: 50,
        marginTop: 60,
        marginBottom: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,   
        borderRadius: 10,
        backgroundColor: '#ffff'
    },
    button: {
        backgroundColor: '#f3db34',
        borderRadius: 50,
        height: 30,
        width: '50%',
        alignSelf: 'center',
        paddingVertical: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        color: '#345c8c',
        fontSize: 18
    }
});

export default Login;
