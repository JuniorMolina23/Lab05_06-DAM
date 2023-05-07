import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

function Usuarios({ titulo, descripcion }) {

    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity style={styles.resultado}
                onPress={() => navigation.navigate("Detalles",{ datos: { titulo, descripcion } })}>
                <Image
                    style={styles.resultadoImagen}
                    source={{
                        uri: 'https://picsum.photos/200/300',
                    }}
                />
                <View style={styles.resultadoInfo}>
                    <Text style={styles.resultadoTitulo}>{titulo}</Text>
                    <Text style={styles.resultadoDescripcion}>
                        {descripcion}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    resultado: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        backgroundColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 10,
        elevation: 5,
    },
    resultadoImagen: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderRadius: 10,
    },
    resultadoInfo: {
        flex: 1,
    },
    resultadoTitulo: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    resultadoDescripcion: {
        fontSize: 16,
        color: '#666',
    },
});
export default Usuarios;

