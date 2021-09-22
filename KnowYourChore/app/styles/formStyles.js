import { StyleSheet } from "react-native"

export const formStyles = StyleSheet.create({
    background: {
        alignItems: "center",
        flex: 1,
        justifyContent: "space-evenly",
        backgroundColor: 'white'
    },
    formBackground: {
        alignItems: "center",
        justifyContent: "space-evenly",
        // backgroundColor: "blue",
        height: 500
    },
    headings:{
        alignItems: "center",
        fontSize: 30,
        alignContent: "center",
        color: '#0044B4',
        padding: 20,
        fontWeight: '700',
        textAlign: 'center',
        fontFamily: 'sans-serif-condensed',
        
    },
    input: {
        backgroundColor: '#ededed',
        alignItems: "center",
        height:50,
        width: 300,
        borderColor: "black",
        borderWidth: 2,
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 15
    },
    button: {
        backgroundColor: '#0044B4',
        borderRadius: 25,
        height: 50,
        width: 200,
        alignItems: "center",
        paddingVertical: 10
    },
    textbutton: {
        fontSize: 20,
        color: "#fff",
       
    }
})