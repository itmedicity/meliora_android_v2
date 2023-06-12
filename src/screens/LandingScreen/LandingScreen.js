import { View, Text, ImageBackground, Button, TouchableOpacity } from 'react-native'
import React, { memo, useCallback } from 'react'
// @ts-ignore
// @ts-ignore
import { StatusBar } from 'expo-status-bar';
// @ts-ignore
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from "expo-splash-screen";
import { Square3Stack3DIcon, ChevronDoubleRightIcon } from 'react-native-heroicons/outline'

import {
    useFonts,
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico"

SplashScreen.preventAutoHideAsync();

// @ts-ignore
import bgImage from '../../../assets/bgImage.png'
// @ts-ignore
import Svglogo from '../../../assets/tmcsvg.svg'
import { color } from '../../constant/AppColors';

const LandingScreen = () => {

    let [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_100Thin_Italic,
        Roboto_300Light,
        Roboto_300Light_Italic,
        Roboto_400Regular,
        Roboto_400Regular_Italic,
        Roboto_500Medium,
        Roboto_500Medium_Italic,
        Roboto_700Bold,
        Roboto_700Bold_Italic,
        Roboto_900Black,
        Roboto_900Black_Italic,
        Pacifico_400Regular
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View onLayout={onLayoutRootView} className='bg-indigo-100 flex-1' >
            <View className='h-1/3'>
                <ImageBackground source={bgImage} className='flex-auto h-screen'  >
                    <View className=' flex ml-8 mt-10' >
                        <Square3Stack3DIcon size={50} color='black' />
                    </View>
                </ImageBackground>
            </View>
            <View className='h-3/4' >
                <View className='flex-1' style={{ backgroundColor: '#dadbe0', borderTopEndRadius: 40, borderTopLeftRadius: 40 }}   >
                    <View className=' flex-1 justify-center items-center' >
                        <Svglogo width={300} height={300} />
                    </View>
                    <View className='flex-1 items-center justify-center' >
                        <Text className='' style={{ fontFamily: 'Pacifico_400Regular', fontSize: 40, color: color.mainColr }} >Meliora</Text>
                        <Text className='' style={{ fontSize: 12, fontFamily: 'Roboto_100Thin', color: color.fontColr }} >Version 2.0.0.0</Text>
                    </View>
                    <View className=' flex-1' >
                        <TouchableOpacity className='flex flex-row justify-center mx-5' style={{ backgroundColor: color.mainColr }} >
                            <Text>Get Started</Text>
                            <ChevronDoubleRightIcon size={20} color='black' />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <Text className="text-red-500 text-lg" >LandingScreen</Text>
                <Text className="text-red-500 text-lg" >LandingScreen</Text> */}
            </View>
        </View>
    )
}

export default memo(LandingScreen) 