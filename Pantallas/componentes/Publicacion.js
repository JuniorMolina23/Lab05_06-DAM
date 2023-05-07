import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const Publicacion = ({ usuario, likes, caption }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cabecera}>
        <Image source={{
                    uri: 'https://picsum.photos/200/300',
                }} style={styles.avatar} />
        <Text style={styles.nombreUsuario}>{usuario}</Text>
      </View>
      <Image source={{
                    uri: 'https://picsum.photos/200/300',
                }} style={styles.image} />
      <View style={styles.footer}>
        <Text style={styles.likes}>{likes} likes</Text>
        <Text style={styles.caption}>{caption}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
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
  },
  cabecera: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  nombreUsuario: {
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  footer: {
    padding: 10,
  },
  likes: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  caption: {
    fontSize: 14,
  },
});

export default Publicacion;
