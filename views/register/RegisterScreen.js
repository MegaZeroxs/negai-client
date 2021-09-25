import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const RegisterScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
        </View>
        <View style={styles.login}>
          <Text style={styles.title}>Registrarme</Text>
          <View>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.input}
              placeholder="Perez"
              keyboardType="default"
            />
          </View>
          <View>
            <Text style={styles.label}>Apellido</Text>
            <TextInput
              style={styles.input}
              placeholder="Perez"
              keyboardType="default"
            />
          </View>
          <View>
            <Text style={styles.label}>Correo</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="correo@dominio.com"
              keyboardType="email-address"
            />
          </View>
          <View>
            <Text style={styles.label}>Teléfono</Text>
            <TextInput
              style={styles.input}
              placeholder="####-####"
              keyboardType="phone-pad"
            />
          </View>
          <View>
            <Text style={styles.label}>Dirección Principal</Text>
            <TextInput
              style={styles.input}
              multiline={true}
              placeholder="Calle, Av #9"
              keyboardType="default"
            />
          </View>
          <View style={styles.btn_containers}>
            <Pressable style={[styles.btn, styles.btn_normal]}>
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
      </View>
    </ScrollView>
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
});

export default RegisterScreen;
