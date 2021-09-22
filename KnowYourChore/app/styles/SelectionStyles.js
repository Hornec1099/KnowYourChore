import { StyleSheet } from "react-native"

export const selectionStyles = StyleSheet.create({
    view:{
        alignItems: 'center',
       justifyContent: "space-around",
       backgroundColor: 'white',
       flex: 1,
    //    borderWidth: 6, 
    //    borderColor: '#1c86ee',
    },
    text:{
        
        alignItems: "center",
        fontSize: 30,
        alignContent: "center",
        color: '#0044b4',
        padding: 20,
        fontWeight: '700',
        textAlign: 'center',
        fontFamily: 'sans-serif-condensed'
    },
    pickerView:{
        alignItems: "center",
        height: 50,
        width: 300,
        backgroundColor: '#e5e5e5',
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
        borderRadius: 25,
        elevation: 3,
        width:300,
        backgroundColor: '#0044b4',
    },
    buttonText: {
        alignItems: 'center',
        color: "#fff", 
        fontWeight: "bold",
        fontSize:20,
        fontFamily: 'notoserif'
    },
})