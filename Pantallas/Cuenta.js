import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Personas from './componentes/Personas';
import { Ionicons } from '@expo/vector-icons';
const Profile = ({ avatar, name, bio, followers, following }) => {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image source={{ uri: 'https://picsum.photos/200/300', }} style={styles.avatar} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>JJ</Text>
                    <Text style={styles.bio}>Hola Amigo</Text>
                    <View style={styles.followersContainer}>
                        <Text style={styles.followersText}>1M Seguidores</Text>
                        <Text style={styles.followingText}> 510 Siguiendo</Text>
                    </View>
                </View>
            </View>
            <View style={styles.navigationContainer}>
                <TouchableOpacity style={styles.navigationButton}>
                    <Text style={styles.navigationButtonText}>Editar Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navigationButton}>
                    <Text style={styles.navigationButtonText}>Compartir Perfil</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.personas}>
                    <ScrollView style={styles.scroll} horizontal={true}>
                        <Personas titulo="Karla" />
                        <Personas titulo="Arnold" />
                        <Personas titulo="Merma" />
                        <Personas titulo="Manuel" />
                        <Personas titulo="Joel" />
                        <Personas titulo="Luis Angel" />
                    </ScrollView>
                </View>
                <View style={styles.iconos}>
                    <Ionicons name="apps" style={styles.icono} />
                    <Ionicons name="person-add" style={styles.icono} />
                </View>
                <View style={styles.line}></View>
                <View style={styles.publicaciones}>
                    <Text>Aun no tienes publicaciones</Text>
                </View>
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 5,
    },
    bio: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    followersContainer: {
        flexDirection: 'row',
    },
    followersText: {
        marginRight: 10,
        fontWeight: 'bold',
        fontSize: 16,
    },
    followingText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    navigationButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#ECECEC'
    },
    navigationButtonText: {
        fontSize: 16,
    },
    personas: {
        flexDirection: 'row',
        marginLeft: 5,
    },
    line: {
        height: 2,
        marginTop: 8,
        width: '50%',
        backgroundColor: 'gray',
    },
    icono: {
        textAlign: 'center',
        width: '50%',
        fontSize:20
    },
    iconos: {
        marginTop: 10,
        flexDirection: 'row',
        marginLeft: 5,
    },
    publicaciones: {
        flex:1,
        alignItems:'center',
        marginTop:150,
        height:'100%'
    }
});

export default Profile;
