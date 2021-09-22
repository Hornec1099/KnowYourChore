import React, { useEffect, useState } from "react";
import { Text, ImageBackground, StyleSheet, Pressable} from "react-native";

const logo = require('../assets/logo.png')


function HomePage ({navigation}) {
    
    const logo = require('../assets/logo.png')

    return (
            <ImageBackground resizeMode ="contain" style ={styles.background} source ={logo}>
                
                <Pressable style = {styles.pressableButtons} onPress={() => {navigation.push('Selection')}}>
                    <Text style = {styles.buttonText}> Enter </Text>
                </Pressable>
                
            </ImageBackground>
    )
}


const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        backgroundColor:"white"
        },
    pressableButtons:{
        alignItems: 'center',
        alignSelf:'center',
        margin:10,
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 15,
        elevation: 3,
        backgroundColor: '#7fcef0',
        
        
    },
    buttonText: {
        color: "#b15e42",
        fontSize: 15,
        fontWeight: "bold"
        

    }
    
})

export default HomePage