import { Platform, StatusBar, StyleSheet } from "react-native"

export const globalStyle = StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    bgWhite: {
        backgroundColor: "white",
    }
})