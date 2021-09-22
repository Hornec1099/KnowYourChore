import { StyleSheet } from "react-native"

const homeStyle = StyleSheet.create({
    background:{
        flex:1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"white",
        width: 400,
        height: 260,
       
        
    },
    image: {
        alignItems: 'center',
        top: 60,
        
    },
    pressableButtons:{
        alignItems: 'center',
        alignSelf:'center',
        margin:10,
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 15,
        elevation: 3,
        backgroundColor: '#0044b4',
        // backgroundColor: '#1c86ee',
        position: "absolute",
        bottom: 200,
        height: 50,
        
        
    },
    buttonText: {
        alignItems: 'center',
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
        

    }
    
})

module.exports = homeStyle