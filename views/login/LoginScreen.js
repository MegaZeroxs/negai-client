import React, { useContext, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {SERVER_URL} from "@env";
import { UserContext } from '../../context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart'; // Import package from node modules

const LoginScreen = ({ navigation }) => {


  const [errorMessage, setErrorMessage] = useState('')

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const showErrorMessage = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage('');
    }, 5000);
  }


  const useFetchLogin = () => {
    console.log(`http://192.168.1.3:8000/client/login`);
    let { email, password } = loginInfo;
    let regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.trim() !== '' && password.trim() !== '') {
      if (regex_email.test(email)) {
        fetch(`http://192.168.1.3:8000/client/login`, {
          method: "POST",
          body: JSON.stringify(loginInfo),
          headers: { "Content-type": "application/json; charset=UTF-8" }
        }).then(response => response.json())
          .then(json => {
            if(json[0].success === true){
              setUserData(json[0]);
              RNRestart.Restart();

            }else{
              showErrorMessage("Credenciales inválidas");
            }
          })
          .catch(err => console.log(err));
      } else {
        showErrorMessage("Ingrese un correo válido");
      }
    } else {
      showErrorMessage("Rellene los campos");
    }
  }

  const setUserData = async (data) => {
    try {
      const jsonValue = JSON.stringify(data)
      await AsyncStorage.setItem('sessionData', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  const { setLoginState } = useContext(UserContext);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </View>
      <View style={styles.login}>
        <Text style={styles.title}>Iniciar sesión</Text>
        <Text style={styles.label_error}>{errorMessage}</Text>
        <View>
          <Text style={styles.label}>Correo</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="correo@dominio.com"
            keyboardType="email-address"
            onChangeText={
              (text) => {
                setLoginInfo({
                  ...loginInfo,
                  email: text
                });
              }
            }
          />
        </View>
        <View>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            placeholder="*******"
            secureTextEntry={true}
            onChangeText={
              (text) => {
                setLoginInfo({
                  ...loginInfo,
                  password: text
                });
              }
            }
          />
        </View>
        <View style={styles.btn_containers}>
          <Pressable
            style={[styles.btn, styles.btn_normal]}
            onPress={useFetchLogin}>
            <Text style={styles.btn_text}>Iniciar sesión</Text>
          </Pressable>
          <Pressable
            style={[styles.btn, styles.btn_primary]}
            onPress={() => navigation.navigate('Registrarme')}>
            <Text style={[styles.btn_text, styles.btn_text_primary]}>
              Registrarse
            </Text>
          </Pressable>
          <Text style={styles.btn_text_footer}>&copy; 2021 - Negai</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: '40%',
    height: 75,
  },
  login: {
    flex: 2,
    paddingHorizontal: 32,
    paddingBottom: 35,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 30,
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#e4e1e6',
    paddingLeft: 15,
    marginVertical: 10,
  },
  btn_containers: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  btn_containers_row: {
    backgroundColor: '#FFF',
    paddingVertical: 35,
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  btn: {
    backgroundColor: '#FFF',
    color: '#000',
    marginTop: 15,
    padding: 12,
    borderWidth: 2,
    width: '100%',
    alignItems: 'center',
  },
  btn_text: {
    fontSize: 20,
    fontFamily: 'CreatoDisplay-Bold',
  },
  btn_primary: {
    borderColor: '#f04e98',
  },
  btn_text_primary: {
    color: '#f04e98',
  },
  btn_text_footer: {
    color: '#808080',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 12,
  },
  label_error: {
      color: 'red',
      marginTop: -25,
      marginBottom: 5
  }
});

export default LoginScreen;
