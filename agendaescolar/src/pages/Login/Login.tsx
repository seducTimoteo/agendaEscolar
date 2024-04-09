import React from 'react';
import { useState } from 'react';
import {
  GluestackUIProvider,
  InputField,
  Input,
  Text,
  View,
  ButtonText,
  Button,
  FormControl,
  Heading,
  VStack,
  Alert
} from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const Login = () => {
  const navigation = useNavigation();
  const [cpf, setCpf] = useState<string>('');
  const [erro,setErro] = useState<string>('');

  const formatCpf = (value :any) => {
    
    const numericValue = value.replace(/\D/g, '');
    const formattedValue = numericValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return formattedValue;

  }
  const handleChangeCpf = (value: any) => {
    setCpf(formatCpf(value));
  }

  const handlerSubmit = () =>{
      //Tratamento de erro
      try{
      
        if (!cpf || cpf.length !== 11) {
          throw new Error('CPF inválido');
       
        }
        
        const nome = "Maria";

        navigation.navigate('Home', {mensagem: `Bem-Vindo ${nome}`})
      }catch(error){
        if(error instanceof Error){
          setErro(error.message);
        }else{
          setErro("Ocorreu um erro ao processar CPF")
        }
      }
        
   
  }
  
  return (
    <GluestackUIProvider
      config={config}>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Image
            accessibilityLabel='image'
            source={require('../../../assets/logo.png')}
            style={styles.image}
            resizeMode='contain'
          />
        </View>
        <FormControl
          p="$4"
          borderWidth="$1"
          borderRadius="$lg"
          borderColor="$borderLight300"
          $dark-borderWidth="$1"
          $dark-borderRadius="$lg"
          $dark-borderColor="$borderDark800"
          backgroundColor='#345c8c'
        >
          <VStack space="xl">
            <Heading
              color="$text900" lineHeight="$md"
              accessible
              style={styles.text}
            >Faça o login para acessar!</Heading>
           
            <VStack space="xs">
            <Text color='$info50' lineHeight="$md" style={styles.text}>CPF</Text>
              <Input
                accessible
                style={styles.input}
                aria-required
                aria-label='inputCpf'
                variant="outline"
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                id="cpf" 
               
                >
                <InputField 
                  onChangeText={setCpf}
                  value={cpf}
                  keyboardType='numeric'
                  style={styles.form}
                  placeholder='000.000.000-00'
                  
                />
                {erro? <Alert><Text>{erro}</Text></Alert>: null}
              </Input>
            </VStack>
          </VStack>
          <Button style={styles.button} onPress={handlerSubmit}>
            <ButtonText style={styles.buttonText}>Acessar</ButtonText>
          </Button>
        </FormControl>
      </View>
    </GluestackUIProvider>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  containerTitle: {
    flex: 1,
    width: '100%',
    height: 50,
    marginTop: 80,
    bottom: 40,
    alignSelf: 'center',
  },
  image: {
    width: 280,
    alignSelf: 'center'
  },
  containerForm: {
    flex: 2,
    backgroundColor: '#345c8c',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: '8%',
    alignItems: 'center',
  },
  form: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    width: 300,
    height: 50,
    marginTop: 100,
    alignSelf: 'center',
    color: '#fff',
    borderColor: '#fff',
    borderBottomStartRadius: 2
  },
  button: {
    position: 'absolute',
    backgroundColor: '#f3db34',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: '15%',
    width: '60%',
    padding: 8,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#345c8c',
    fontSize: 18
  }

});




export default Login;
