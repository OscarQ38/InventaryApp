import {StatusBar} from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import image from '../assets/dq.png';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

 const Menu = ({navigation}) => {
  return(
    <View style={styles.container}>
    {/* <View style={styles.containerInvi}></View> */}
        
        <View style={styles.container2}>
        <Image style={styles.imagen1} 
            source={require('../assets/dq.png')}
          />
        <TouchableOpacity style={styles.botonMenu} onPress={() => navigation.navigate('Inventario_int')}>
          <Text style={styles.textoBoton}>Inventario interno</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonMenu} onPress={() => navigation.navigate('Inventario_ext')}>
          <Text style={styles.textoBoton}>Inventario externo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonMenu} onPress={() => navigation.navigate('Mermas')}>
          <Text style={styles.textoBoton}>Mermas</Text>
        </TouchableOpacity>
        
        </View>
        
    </View>
  );
}

export default Menu

const styles = StyleSheet.create({
  container:{
      flexDirection: 'column',
      flex:1
  },
  containerInvi:{
    flex: 0.3, 
       backgroundColor: '#D10007',
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
  botonMenu: {
      elevation: 2,
      padding: 7,
      backgroundColor: '#004AD7',
      height: 60,
      width: 300,
      marginTop: 37,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,

  },
  textoBoton:{
    fontSize: 20,
    color: '#FFFFFF',
  },
  botonDrawer:{
    elevation: 2,
      padding: 5,
      backgroundColor: '#004AD7',
      height: 50,
      width: 80,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 15,
      marginTop: 30,
  },
  imagen1:{
    marginTop: -80,
    marginBottom: 20,
      width: 200,
      height: 100,
      alignContent:'center',
      
  }
});

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Detalles" />
      <Drawer.Screen name="Notificaciones" />
    </Drawer.Navigator>
  );
}

