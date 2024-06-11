import { StyleSheet, Text, View } from "react-native"

const TextValue = ({name, value}) => {
    return(
        <View style = {styles.textValueContainer}>
            <Text style = {styles.textName}>{name}</Text>
            <Text style = {styles.textValue}>{value}</Text>
        </View>
    )
}

export default TextValue;

const styles = StyleSheet.create({
    textValueContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 5,
    },
    textName: {
        fontSize: 24,
        padding: 5,
        color: "white",
        fontFamily: "FiraCode-bold",
        backgroundColor: "#141414",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 5,
        shadowColor: "white",
        elevation: 3,
    },
    textValue: {
        fontSize: 20,
        color: "#B0B7C4"
    }
})