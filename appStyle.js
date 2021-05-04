import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    appHeader:{
        backgroundColor:"#075E54"
    },
    appTitle:{
        fontSize:22,
        color:"snow"
    },
    tabBarUnderLine:{
        height:2
    },
    tabText:{
        fontSize:14,
        fontWeight:"bold"
    },
    badge:{
        height:24,
        backgroundColor:"#ECE5DD",
        justifyContent:"center",
        alignSelf:"center",
        textAlign:"center"
    },
    badgeText:{
        fontSize:12,
        color:'#075E54'
        },

        // chart page Style
    badgechart:{
        backgroundColor:"#25D366",
        justifyContent:"center",
        textAlign:"center",
        alignSelf:"center",
        height:24,
        marginTop:4
    },
    badgeTextChart:{
        fontSize:12,
    color:"snow"    },
    fabColor:{
        backgroundColor:"#25D366"
    },
    // for status screen
    addStatusIcon:{
        color:"#25D366",
        alignSelf:"flex-end",
        position:"absolute",
        marginLeft:40,
        bottom:-5,
        width:20,
        fontSize:20
    },
    listItemDiver:{
        marginTop:10,
        height:10
    }
})