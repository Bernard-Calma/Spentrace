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
        paddingLeft: 5,
        color: "black",
        fontFamily: "firaCode-bold",
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 2.5,
        borderRadius: 5,
        shadowColor: "black",
        elevation: 7,
    },
    textValue: {
        fontSize: 20,
    }
})