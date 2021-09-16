import React, { useEffect, useState } from "react";
import { Text, Image, SafeAreaView, ImageBackground, StyleSheet, Button} from "react-native";


function ListScreen ({navigation}) {

    const handlePress = () =>{
        navigation.navigation('Home')
    }

    return (
        <View> 
        <Text> The ListScreen Page </Text>
        <Button  style ={styles.button} title =" Go To Home " onPress={handlePress}/>
        </View>
    )
}

export default ListScreen;