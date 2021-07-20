import React, { useEffect, useState} from "react";
import { View, Text, ScrollView, TextInput, Button, StyleSheet, ActivityIndicator } from "react-native";
import firebaseService from '../services/firebase';

const Detalle = (props) =>{

    const initialState = {
        id:'',
        nombre:'',
        codigo:'',
        cantidad:'',
    }

    const [product, setproduct] = useState(initialState)
    
    const [loading, setloading] = useState(true)


    const getProductById = async (id) => {
        const dbRef = firebaseService.database.collection('inventario_int').doc(id)
        const doc = await dbRef.get();
        const product = doc.data();
        setproduct({
            ...product,
            id: doc.id
        })
        setloading(false)
    };

    useEffect(() =>{
        getProductById(props.route.params.productId)
    }, [])

    const handleChangeText = (nombre, value) => {
        setproduct({ ...product, [nombre]: value})
    }

    const deleteProduct =  async () => {
        const dbRef = firebaseService.database.collection('inventario_int').doc(props.route.params.productId)
        await dbRef.delete();
        props.navigation.navigate('Inventario_int')
    }

    const updateProduct =  async () => {
        const dbRef = firebaseService.database.collection('inventario_int').doc(props.route.params.productId)
        await dbRef.set({
            nombre: product.nombre,
            codigo: product.codigo,
            cantidad: product.cantidad
        })
        setproduct(initialState)
        props.navigation.navigate('Inventario_int')
    }

    if (loading) {
        return(
            <View>
                <ActivityIndicator size="large" color="#0D36EF"/>
            </View>
        )
    }


    console.log(props.route.params.productId)
    return(
        <ScrollView style={styles.container}>
        <View >
            <TextInput style={styles.inputs} placeholder="Nombre de producto"
            value={product.nombre}
             onChangeText={(value) => handleChangeText('nombre', value)}   
            />
        </View>
        <View >
            <TextInput style={styles.inputs} placeholder="Numero de codigo"
            value={product.codigo}
            onChangeText={(value) => handleChangeText('codigo', value)}
            />
        </View>
        <View >
            <TextInput style={styles.inputs} placeholder="Cantidad"
            value={product.cantidad}
            onChangeText={(value) => handleChangeText('cantidad', value)}
            />
        </View>
        <View>
                <Button color="#1FBE56" title="Actualizar" onPress={() => updateProduct()}/>
            </View>
            <View style={styles.container2}>
                 <Button color="#FF0000" title="Borrar" onPress={() => deleteProduct()}/>
            </View>
    </ScrollView>
    )
}
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
    container2:{
        marginTop: 15,
      },
  });

export default Detalle