import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity,  Text, StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


interface ButtonProps {
 
  onPress: () => void,
  
}


function TelaInicial({ onPress }: ButtonProps) {
    const navigation = useNavigation()

    const handleNavigation = (id: string) =>{
      navigation.navigate('Login', {userType: id})
    }
  
  return (
    <View style={styles.container}>

        
        <View style={styles.containerLogo}>
          <Image 
            accessibilityLabel='image'
            source={require('../../../assets/logo.png')}
            style={styles.image}
            resizeMode='contain'
          />
        </View>
        <Text style={styles.title}>Agenda escolar</Text>
        <View style={styles.containerButton}>
          <TouchableOpacity
            accessibilityLabel='tap me'
            style={styles.button}
            onPress={() =>  handleNavigation("Aluno")}
          >
            <Icon name='graduation-cap' size={80} color="white" style={styles.icon} />
            <Text style={styles.text}>Aluno</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel='tap me'
            style={styles.button}
            onPress={() => handleNavigation('Gestao')}
           
          >
            <Icon name='users-cog' size={80} color="white" style={styles.icon} />
            <Text style={styles.text}>Gestão</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerLogo: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center'
  },
  image: {
    width: 180,
    height: 180,
  },
  title: {
    fontWeight: 'bold',
    color: '#345c8c',
    fontSize: 26,
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
