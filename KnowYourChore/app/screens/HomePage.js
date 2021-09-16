import React, { useEffect, useState } from "react";
import { Text, Image, SafeAreaView, ImageBackground, StyleSheet, Button} from "react-native";




function HomePage () {
    
    const logo = require('../assets/logo.png')

    return (

            <ImageBackground resizeMode ="contain" style ={styles.background} source ={logo}>
                <Button title =" Go To App "/>
            </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        },
    
})

export default HomePage