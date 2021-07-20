import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, ScrollView, Button } from "react-native";
import firebaseService from '../services/firebase';

const AltasExt = (props) => {

    const [state, setState] = useState({
        nombre:"",
        codigo:"",
        cantidad:"",
        precio:""
    });

    const handleChangeText = (nombre, value) => {
        setState({ ...state, [nombre]: value})
    }

    const saveNewProduct = async () =>{
        if (state.nombre === ''){
            alert('El nombre esta vacio')
        }else{
            await firebaseService.database.collection('inventario_ext').add({
                nombre: state.nombre,
                codigo: state.codigo,
                cantidad: state.cantidad,
                precio: state.precio
            })
            alert('Guardado')
            props.navigation.navigate('Inventario_ext')
        }
        
    }

  return (
    <ScrollView style={styles.container}>
        <View >
            <TextInput style={styles.inputs} placeholder="Nombre de producto"
             onChangeText={(value) => handleChangeText('nombre', value)}   
            />
        </View>
        <View >
            <TextInput style={styles.inputs} placeholder="Numero de codigo"
            onChangeText={(value) => handleChangeText('codigo', value)}
            />
        </View>
        <View >
            <TextInput style={styles.inputs} placeholder="Cantidad"
            onChangeText={(value) => handleChangeText('cantidad', value)}
            />
        </View>
        <View >
            <TextInput style={styles.inputs} placeholder="Precio"
            onChangeText={(value) => handleChangeText('precio', value)}
            />
        </View>
        <View>
            <Button title="Guardar" onPress={() => saveNewProduct()}/>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputs: {
    marginBottom: 15,
    padding: 12,
    width: 290,
    fontSize: 17,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'black',
    color: 'black',
},
  container:{
    marginTop: 45,
    flex: 1,
    padding: 35,
  },
});

export default AltasExt;