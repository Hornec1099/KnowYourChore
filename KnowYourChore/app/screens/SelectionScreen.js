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

        <View style={globalStyles.background}>
            <Text style={globalStyles.headings}> Choose Your Chores </Text>
            {/* dropdown list button goes here */}
            
            <Button style={globalStyles.button} title="Open List" onPress ={() => { navigation.PushManager('ListScreen')}}/>
            <Button style={globalStyles.button} title="Start New List" onPress = {() => {navigation.navigate('Home')}}/>
        </View>
            
    )
}

export default SelectionScreen;