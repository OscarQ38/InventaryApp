import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity, ImageBackground, TextInput} from 'react-native';
import firebaseService from '../services/firebase';

 const Registro = ({navigation}) => {

  const [name, setName] = useState('')
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const createNewUser = async () => {
    let validatedUser = user.split(" ").join("")
    try {
      await firebaseService.createUser(name, validatedUser , pass)
      navigation.navigate('Menu')
    } catch (e) {
      alert(e)
    }
  }

  return(
    <View style={styles.container}>
      <View style={styles.containerInvi}>
        <ImageBackground source={require('../assets/dq.png')} style={styles.image}></ImageBackground>
      </View>
      <View style={styles.container2}>
      
      <TextInput
          style={styles.usuario}
          placeholder="Email"
          placeholderTextColor="#BDBDBD"
          value={user}
          onChange={(e) => setUser(e.nativeEvent.text)}
        />
        <TextInput
          style={styles.contra}
          secureTextEntry={true}
          placeholder="Contraseña"
          placeholderTextColor="#BDBDBD"
          value={pass}
          onChange={(e) => setPass(e.nativeEvent.text)}
        />
        <TextInput
          style={styles.contra}
          placeholder="Usuario"
          placeholderTextColor="#BDBDBD"
          maxLength={30}
          value={name}
          onChange={(e) => setName(e.nativeEvent.text)}
        />
        <TouchableOpacity style={styles.botonIniciar} onPress={createNewUser}>
          <Text style={styles.textoBoton}>Registrarse</Text>
        </TouchableOpacity>
        

      </View>
      <View style={styles.container}>
      </View>
    </View>
  );
}

export default Registro

const styles = StyleSheet.create({
  container:{
      flexDirection: 'column',
      flex:1,
      backgroundColor: '#FFFFFF'
  },
  containerInvi:{
    flex: 3, 
       backgroundColor: '#FFFFFF'
       
  },
  container1: { 
      flex: 0.8, 
      flexDirection: 'row',
       backgroundColor: '#D10007',
       alignItems: 'flex-start',
       justifyContent: 'flex-start'
  }, 
   container2: { 
      flexDirection: 'column', 
      flex: 6, 
      alignItems: 'center', 
      justifyContent: 'center',
      
   }, 
  container3: { 
      flex: 1.5,
      backgroundColor: '#C3E190', 
      alignItems: 'center',
  },
  botonIniciar: {
      elevation: 2,
      padding: 7,
      backgroundColor: '#0079C4',
      height: 50,
      width: 300,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
  },
  textoBoton:{
    fontSize: 16,
    color: '#FFFFFF',
  },
  textoBoton2:{
    fontSize: 16,
    color: '#F03D43',
  },
  textoBoton3:{
    fontSize: 16,
    color: '#0079C4',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: "center",
    alignContent:'center',
    
  },
  usuario: {
    marginBottom: 20,
    padding: 12,
    width: 320,
    fontSize: 17,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#BDBDBD',
    color: '#000000',
  },
  contra: {
    marginBottom: 30,
    padding: 12,
    width: 320,
    fontSize: 17,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#BDBDBD',
    color: '#000000',
  },
  olvidarContra:{
    elevation: 2,
      padding: 7,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
  },
  registro:{
    elevation: 2,
      padding: 7,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 70,
      marginTop: 15,
  }
});


