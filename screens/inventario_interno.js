import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Button,  TouchableOpacity, ScrollView} from 'react-native';
import firebaseService from '../services/firebase';
import { ListItem, Avatar} from "react-native-elements";
import { useLinkProps } from '@react-navigation/native';

const Inventario_int = (props) => {

  const[products, setUsers] = useState([])

  useEffect(() => {
    firebaseService.database.collection('inventario_int').onSnapshot(querySnapshot => {
      const products =[];
      querySnapshot.docs.forEach(doc => {
        const {nombre, codigo, cantidad} = doc.data()
        products.push({
        id: doc.id,
        nombre,
        codigo,
        cantidad,
        })
      });
      setUsers(products)
    });
  },[])

    return(  
      <ScrollView >
          <TouchableOpacity style={styles.botonAltas} onPress={() => navigation.navigate('Altas')}>
           <Text style={styles.textoBoton}>Añadir producto</Text>
         </TouchableOpacity>
         {
          products.map((product) =>{
            return(
              <ListItem key={product.key} bottomDivider onPress={() => {
                props.navigation.navigate('Detalle' ,{
                  productId: product.id
                })
              }}>
              <ListItem.Chevron/>
              <Avatar source={{uri: 'https://images.rappi.com.mx/products/976228632-1588872085128.png?d=128x90'}}/>
            <ListItem.Content>
              <ListItem.Title>{product.nombre}</ListItem.Title>
              <ListItem.Subtitle>{product.cantidad}</ListItem.Subtitle>
            </ListItem.Content>
            </ListItem>
            )
          })
         }
         
      </ScrollView>
    )
}

export default Inventario_int

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  scrol:{
    marginTop: 35,
  },
    container:{
        flexDirection: 'column',
        flex:1
    },
    botonAltas: {
        elevation: 2,
        padding: 7,
        backgroundColor: '#397EFF',
        height: 50,
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 20,
    },
    textoBoton:{
      fontSize: 16,
      color: '#FFFFFF',
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    image2: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      height: 700,
        width: 400,
    },
    imagen1:{
      marginTop: -80,
      marginBottom: 20,
        width: 200,
        height: 100,
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