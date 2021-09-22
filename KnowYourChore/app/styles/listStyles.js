import { StyleSheet } from "react-native";

export const listStyle = StyleSheet.create({
    all:{
        backgroundColor:'#ffff',
        flex:1,
        fontSize:200
    },
    header:{
        fontSize:35,
        color:"black",
        textDecorationLine:"underline",
        textAlign:"center"
    },
    individualTaskContainer:{
        flexDirection:"row",
        margin:5,

    },
    taskPressableCont:{
        width: 170
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
    pressableDelete:{
        alignItems:'flex-end',
        justifyContent: 'flex-end',
        marginLeft:75,
        marginTop:2,
        paddingVertical:5,
        paddingHorizontal: 15,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: '#cc3300',
    },
    pressableTasks:{
        justifyContent: 'center',
        borderRadius: 25,
        elevation: 3,
        backgroundColor: '#1c86ee',
        width:200,
        height:30,
        marginTop:2
    },
    buttonText: {
        alignItems: 'center',
        color: "#fff", 
        fontWeight: "bold",
        fontSize:20
    },
    buttonTextTask: {
        alignItems: 'center',
        color: "#fff", 
        fontWeight: "bold",
        paddingLeft:20
    },
    buttonTextDelete: {
        alignItems: 'center',
        color: "#fff", 
        fontWeight: "bold",
        
    },
    
})