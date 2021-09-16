import React, { useEffect, useState } from "react";
import { Text, Image, SafeAreaView, ImageBackground, StyleSheet, Button, View} from "react-native";


function ListScreen ({navigation}) {

    

    return (
        <View> 
        <Text> The ListScreen Page </Text>
        <Button title =" Go To Home " onPress={() => {navigation.navigate("Home")}}/>
        </View>
    )
}

export default ListScreen;