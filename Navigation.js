import react from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Buscar from "./Pantallas/Buscar";
import Cuenta from "./Pantallas/Cuenta";
import Inbox from "./Pantallas/Inbox";
import Inicio from "./Pantallas/Inicio";
import Detalles from "./Pantallas/Detalles"
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Buscar" component={Buscar}options={{
                    headerShown: false
                }} />
            <Stack.Screen name="Detalles" component={Detalles} options={{
                    headerShown: false
                }}/>
        </Stack.Navigator>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Inicio"
                component={Inicio}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    headerShown: false
                }} />
            <Tab.Screen
                name="Buscar"
                component={MyStack}
                options={{
                    tabBarLabel: 'Buscar',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={size} />
                    ),
                }} />

            <Tab.Screen
                name="Inbox"
                component={Inbox}
                options={{
                    tabBarLabel: 'Inbox',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="inbox" color={color} size={size} />
                    ),
                    tabBarBadge: 3,
                }} />
            <Tab.Screen
                name="Cuenta"
                component={Cuenta}
                options={{
                    tabBarLabel: 'Cuenta',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }} />
        </Tab.Navigator>
    )
}
export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}