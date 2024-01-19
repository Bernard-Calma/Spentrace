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
        padding: 10
    },
    textName: {
        fontSize: 24,
        fontFamily: "firaCode-bold"
    },
    textValue: {
        fontSize: 20,
    }
})