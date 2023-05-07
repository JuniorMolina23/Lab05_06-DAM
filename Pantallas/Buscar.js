import React from 'react';
import { View, TextInput, StyleSheet, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Usuarios from './componentes/usuarios';

const Buscar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Ionicons name="search" style={styles.icon} />
                <TextInput
                    style={styles.buscador}
                    placeholder="Buscar"
                    placeholderTextColor="#888"
                />
            </View>
            <View style={styles.resultadoContainer}>
                <Text style={styles.resultadoTitulo}>Resultados de búsqueda</Text>
                <ScrollView>
                    <Usuarios titulo="Junior Molina" descripcion="Hola amig@" />
                    <Usuarios titulo="Feranando Araca" descripcion="Hola nuevamente este es una prueba" />
                    <Usuarios titulo="Jenifer Flores" descripcion="Prueba desde tercer componente" />
                    <Usuarios titulo="Gabriel Sumi" descripcion="Descripcion de Gabriel Sumi" />
                    <Usuarios titulo="Jhonatan Ticona" descripcion="Hola nuevamente este es una prueba" />
                    <Usuarios titulo="Miguel Arcana" descripcion="Prueba desde tercer componente" />
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
        height: 40,
        marginHorizontal: 10,
        marginVertical: 5,
        paddingHorizontal: 10,
    },
    icon: {
        fontSize: 24,
        color: '#333',
        marginHorizontal: 5,
    },
    buscador: {
        flex: 1,
        fontSize: 18,
        color: '#333',
        marginLeft: 5,
    },
    resultadoContainer: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 20,
    },
    resultadoTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },

});

export default Buscar;
