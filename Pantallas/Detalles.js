import React from 'react';
import {Image, View, Text, StyleSheet } from 'react-native';

export default function Detalles({ route }) {
  const { titulo, descripcion} = route.params.datos;
  return (
    <View style={styles.container}>
      <Image style={styles.imagen} source={{ uri: 'https://picsum.photos/200/300', }} />
      <View style={styles.textoContenedor}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.descripcion}>{descripcion}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  imagen: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  textoContenedor: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  descripcion: {
    fontSize: 18,
    textAlign: "center",
  },
});

