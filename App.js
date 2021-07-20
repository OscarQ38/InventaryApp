import {StatusBar} from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderBackground } from "@react-navigation/stack";
import Login from './screens/Login';
import Registro from "./screens/registro";
import Menu from "./screens/menu_principal";
import Inventario_int from './screens/inventario_interno';
import Inventario_ext from './screens/inventario_externo';
import Mermas from './screens/mermas';
import Altas from './screens/altas';
import Detalle from './screens/producto_detalle'
import { color } from 'react-native-reanimated';
import AltasM from './screens/Altas_mermas';
import DetalleM from './screens/detalleM';
import AltasExt from './screens/altas_externo';
import DetalleExt from './screens/detalle_Ext';


const Stack = createStackNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={Login} options={
          {
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'red' }
          }
        }/>
        <Stack.Screen name="Registro" component={Registro} options={
          {
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'red' }
          }
        }/>
        <Stack.Screen name="Menu" component={Menu}  options={
          {
            headerLeft: null,
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'red' }
          }
        } />
        <Stack.Screen name="Inventario_int" component={Inventario_int} options={
          {
            title:'Inventario interno',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'red' }
          }
        }/>
        <Stack.Screen name="Inventario_ext" component={Inventario_ext} options={
          {
            title:'Inventario externo',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'red' }
          }
        }/>
        <Stack.Screen name="Mermas" component={Mermas} options={
          {
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'red' }
          }
        }/>
        <Stack.Screen name="Altas" component={Altas} options={
          {
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'red' }
          }
        }/>
        <Stack.Screen name="Detalle" component={Detalle} options={
          {
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'red' }
          }
        }/>
        <Stack.Screen name="AltasM" component={AltasM} options={
          {
            title:'Altas',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'red' }
          }
        }/>
        <Stack.Screen name="DetalleM" component={DetalleM} options={
          {
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'red' }
          }
        }/>
        <Stack.Screen name="AltasExt" component={AltasExt} options={
          {
            title: 'Altas',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'red' }
          }
        }/>
        <Stack.Screen name="DetalleExt" component={DetalleExt} options={
          {
            title: 'Detalle',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'red' }
          }
        }/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}




