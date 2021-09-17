import React from "react";
import { Dropdown } from "react-native-material-dropdown";
import { Text , Button, View} from "react-native";

function SelectionScreen({navigation}){
    
    
    let data = [{
        value: "TaskList1"
    },
    {
        value: "TaskList2"
    }]
    
    return (

        <View>
            <Text> Choose Your Chores </Text>
            {/* dropdown list button goes here */}
            
            <Button title="Open List" onPress ={() => { navigation.PushManager('ListScreen')}}/>
            <Button title="Start New List" onPress = {() => {navigation.navigate('Home')}}/>
        </View>

    )
}

export default SelectionScreen;