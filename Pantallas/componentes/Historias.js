import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Historias({ titulo }) {
    return (
        <View style={styles.resultado}>
            <Image
                style={styles.resultadoImagen}
                source={{
                    uri: 'https://picsum.photos/200/300',
                }}
            />
            <Text style={styles.resultadoTitulo}>{titulo}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    resultado: {
        margin: 5,
        width:80,
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
        padding:10
    },
    resultadoImagen: {
        width: 60,
        height: 60,
        marginRight: 10,
        borderRadius: 50,
    },
    resultadoTitulo: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
        textAlign:'center'
    },
});
export default Historias;

