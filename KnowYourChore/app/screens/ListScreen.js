import React, { useEffect, useState } from "react";
import { Text, Image, SafeAreaView, ImageBackground, StyleSheet, Button, View} from "react-native";
import {globalStyles} from '../styles/global';


function ListScreen ({navigation}) {

    

    return (
        <View style={globalStyles.background}> 
        <Text style={globalStyles.headings}> The ListScreen Page </Text>
        <Button style={globalStyles.button} title =" Go To Home " onPress={() => {navigation.push("Home")}}/>
        {/* <Button title =" Go To Selected Task" onPress={() => {navigation.push("IndividualTaskScreen")}}/> */}
        <Button style={globalStyles.button} title =" Go To Selected Task" onPress={() => {navigation.push("IndividualTaskScreen1")}}/>
        </View>
    )
}

export default ListScreen;