import { Platform, StyleSheet } from "react-native"
import { colors } from "../constants/colors"
export let globalStyles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.bgColor,
        padding: 20,
        paddingTop: Platform.OS === 'ios' ? 42 : 32,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    section:{
        marginBottom:16,
    },
    inputContainer:{
        backgroundColor: colors.gray,
        borderRadius: 12,
        paddingHorizontal: Platform.OS === "ios" ? 12 : 10,
        paddingVertical: Platform.OS === "ios" ? 12 : 10,
    },
    text:{
        fontSize:14,
        color: colors.text,
    },
    tag:{
        paddingHorizontal:20,
        paddingVertical: Platform.OS === 'ios' ? 6 : 4,
        borderRadius:100,
        backgroundColor: colors.blue,
    }

})