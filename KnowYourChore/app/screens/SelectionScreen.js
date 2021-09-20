import React from "react";
import { Text , Button, View} from "react-native";

function SelectionScreen({navigation}){
    
    
    let data = [{
        value: "TaskList1"
    },
    {
        value: "TaskList2"
    }]
    
    return (

<<<<<<< HEAD
        <View style={globalStyles.background}>
            <Text style={globalStyles.headings}> Choose Your Chores </Text>
            {/* dropdown list button goes here */}
            
            <Button style={globalStyles.button} title="Open List" onPress ={() => { navigation.PushManager('ListScreen')}}/>
            <Button style={globalStyles.button} title="Start New List" onPress = {() => {navigation.navigate('Home')}}/>
=======
        <View>
            <Text> Choose Your Chores </Text>
            {/* dropdown list button goes here */}
            
            <Button title="Open List" onPress ={() => { navigation.PushManager('ListScreen')}}/>
            <Button title="Start New List" onPress = {() => {navigation.navigate('Home')}}/>
>>>>>>> 242c352a743d5409f02755a77b1e34949522471f
        </View>

    )
}

export default SelectionScreen;