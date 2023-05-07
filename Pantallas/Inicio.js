import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Publicacion from './componentes/Publicacion';
import Historias from './componentes/Historias';

const Inicio = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Publicaciones</Text>
            <ScrollView>
            <View style={styles.historias}>
                <ScrollView style={styles.scroll} horizontal={true}>
                    <Historias titulo="Mio" />
                    <Historias titulo="Jenifer" />
                    <Historias titulo="Jose" />
                    <Historias titulo="Andrea" />
                    <Historias titulo="Miguel" />
                    <Historias titulo="Angela" />
                </ScrollView>
            </View>

            <Publicacion
                usuario="GaboSumi"
                likes={100}
                caption="Esta es una foto de ayes" />
            <Publicacion
                usuario=".fer"
                likes={'150k'}
                caption="#hola #que #tal" />
            <Publicacion
                usuario="JJ"
                likes={800}
                caption="Una leyenda inspiradora" />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        backgroundColor: '#f5f5f5',
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 20
    },
    historias: {
        flexDirection: 'row',
        marginLeft: 5,
    }

});

export default Inicio;
