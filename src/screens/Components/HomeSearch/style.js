import { StyleSheet } from "react-native";
const HomeSearchstyles = StyleSheet.create({
    Inputbox:{backgroundColor:"#b0b0b0",
    margin: 10,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    padding:10
    },
    InputText:{
        fontSize:20,
fontWeight:"600",
color:"#6e6e6e"
    },
    timer:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:100,
        padding:10,
        backgroundColor:"#fff",borderRadius:50
    },
    row:{
        flexDirection:"row"
        ,alignItems:"center",
        padding:15,
        borderBottomWidth:1,
        borderBottomColor:"#dbdbdb"
    }
    ,iconContainer:{        
        backgroundColor:"#ddd",
        padding:10,
        borderRadius:25,
    },
    destinationText:{
        marginLeft:10,fontWeight:"500",
        fontSize:16
    }

});
export default HomeSearchstyles;