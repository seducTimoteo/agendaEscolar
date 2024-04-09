import React from 'react';
import { View, Button, Text, ButtonText, GluestackUIProvider, Center,} from '@gluestack-ui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet,Image  } from 'react-native';
import { config } from "@gluestack-ui/config";
import { useNavigation } from '@react-navigation/native';





function TelaInicial() {

    const navigation = useNavigation()

    return (
        <GluestackUIProvider config={config}>
            <Center flex={1}>
                <View >
                    <Image 
                        accessibilityLabel='image'
                        source={require('../../../assets/logo.png')}
                        style={styles.image}
                        resizeMode='contain'
                    />
                </View>
                <Text style={styles.title}>Agenda escolar</Text>
            <View style={styles.containerButton}>
            <Button
                accessibilityLabel='tap me'
                style={styles.button}
                onPress={() =>  {navigation.navigate('Login')}}
                id='student'
            >
                <Icon name='graduation-cap' size={80} color="white" style={styles.icon} />
                <ButtonText style={styles.text}>Aluno</ButtonText>
            </Button>
            <Button
                accessibilityLabel='tap me'
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
                id='director'
            >
                <Icon name='users-cog' size={80} color="white" style={styles.icon} />
                <ButtonText style={styles.text}>Gestão</ButtonText>
            </Button>
            </View>
            </Center>
      
        </GluestackUIProvider>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    containerLogo: {
      flex: 1,
      width: '100%',
      height: 50,
      marginTop: 80,
      bottom: 20,
      alignSelf: 'center',
      
    },
    image: {
      width: 230,
      height: 200,
      marginTop: 50,
      marginBottom: 50
    },
    title: {
      fontWeight: 'bold',
      color: '#345c8c',
      fontSize: 34,
    },
    containerButton: {
      flex: 2,
      marginTop: 50,
    },
    button: {
      overflow: 'hidden',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#345c8c',
      borderRadius: 8,
      padding: 16,
      width: 180,
      height: 180,
      marginVertical: 8,
      marginHorizontal: 16,
      shadowColor: '#000',
      shadowOffset: {
        width: 20,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    icon: {
      marginRight: 10,
      marginBottom: 10,
    },
    text: {
      color: '#fff',
      fontSize: 20,
    }
  })

export default TelaInicial;