import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Mensajes = ({nombre, mensaje, hora }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://picsum.photos/200/300', }} style={styles.avatar} />
            <View style={styles.textContainer}>
                <Text style={styles.nombre}>{nombre}</Text>
                <Text style={styles.mensaje}>{mensaje}</Text>
            </View>
            <Text style={styles.hora}>{hora}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
        margin:5,
        borderRadius:10,
        backgroundColor:'white'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    nombre: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    mensaje: {
        fontSize: 14,
        color: '#666',
    },
    hora: {
        fontSize: 12,
        color: '#666',
    },
});

export default Mensajes;
