import React from 'react';
import { ScrollView, Text, View,StyleSheet } from 'react-native';
import Mensajes from './componentes/Mensajes';


const App = () => {
    return (
        <View>
            <Text style={styles.titulo}>MENSAJES</Text>
            <ScrollView style={styles.mensajes}>
                <Mensajes nombre='Angela' mensaje='Mensaje de ejemplo 1' hora='10:00 AM' />
                <Mensajes nombre='Antonio' mensaje='Mensaje de ejemplo 2' hora='09:00 AM' />
                <Mensajes nombre='Andrea' mensaje='Mensaje de ejemplo 3' hora='08:32 AM' />
                <Mensajes nombre='Darlene' mensaje='Mensaje de ejemplo 4' hora='07:00 AM' />
                <Mensajes nombre='Juan' mensaje='Mensaje de ejemplo 5' hora='06:14 AM' />
                <Mensajes nombre='Jenifer' mensaje='Mensaje de ejemplo 6' hora='05:30 AM' />
                <Mensajes nombre='Aracely' mensaje='Mensaje de ejemplo 6' hora='10:10 PM' />
                <Mensajes nombre='Gabriel' mensaje='Mensaje de ejemplo 6' hora='Ayer' />
                <Mensajes nombre='Anna' mensaje='Mensaje de ejemplo 6' hora='Ayer' />
                <Mensajes nombre='Luis' mensaje='Mensaje de ejemplo 6' hora='Hace 4 dias' />
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
        marginLeft: 20
    },
    mensajes:{
        marginBottom:60
    }
});
export default App;
