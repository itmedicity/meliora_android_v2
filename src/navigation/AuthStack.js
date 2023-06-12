import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LandingScreen from '../screens/LandingScreen/LandingScreen'
import Login from '../screens/login/Login'

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name='LandinPage' component={LandingScreen} />
            <Stack.Screen name='LoginPage' component={Login} />
        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})