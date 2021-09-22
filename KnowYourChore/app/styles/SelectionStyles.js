import { StyleSheet } from "react-native"

export const selectionStyles = StyleSheet.create({
    view:{
        alignItems: 'center',
       justifyContent: "space-around",
       backgroundColor: 'white',
       flex: 1,
       borderWidth: 10, 
       borderColor: '#0044b4',
    },
    text:{
        
        alignItems: "center",
        fontSize: 30,
        alignContent: "center",
        color: '#0044b4',
        padding: 20,
        fontWeight: '600',
        textAlign: 'center',
        fontFamily: 'sans-serif-condensed'
    },
    pickerView:{
        alignItems: "center",
        height: 50,
        width: 300,
        backgroundColor: 'lightgrey',
        borderColor: '#0044b4',
        borderWidth: 2,
        borderRadius: 25,
        
       
    },
    pressableButtons:{
        alignItems: 'center',
        alignSelf:'center',
        margin:10,
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 15,
        elevation: 3,
        backgroundColor: '#0044b4',
        bottom: 20,
        height: 50,
        
    },
    buttonText: {
        color:"#fff",
        fontWeight: "bold",
        textAlign: 'center',
        fontFamily: 'notoserif'
    }
})