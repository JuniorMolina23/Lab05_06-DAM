import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

function Personas({ titulo }) {
    return (
        <View style={styles.resultado}>
            <Image
                style={styles.resultadoImagen}
                source={{
                    uri: 'https://picsum.photos/200/300',
                }}
            />
            <Text style={styles.resultadoTitulo}>{titulo}</Text>
            <TouchableOpacity style={styles.navigationButton}>
                <Text style={styles.texto}>Seguir</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    resultado: {
        margin: 5,
        width: 100,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 10,
    },
    resultadoImagen: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius: 50,
    },
    resultadoTitulo: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
        textAlign: 'center'
    },
    navigationButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#3897f0',
    },
    texto:{
        color:'white'
    }

});
export default Personas;

