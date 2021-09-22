import React, { useEffect, useState } from "react";
import { Text, Image, StyleSheet, Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { homeStyle } from "../styles/homeStyles";

const logo = require('../assets/logo.png')


function HomePage ({navigation}) {
    
    const logo = require('../assets/logo.png')

    return (
        <SafeAreaView style ={homeStyle.background}>
            <Image style = {homeStyle.image} source ={logo}/>
                
                <Pressable style = {homeStyle.pressableButtons} onPress={() => {navigation.push('Selection')}}>
                    <Text style = {homeStyle.buttonText}> Enter </Text>
                </Pressable>
        </SafeAreaView>
            
    )
}


export default HomePage