import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RadioButtonText = (props) => {
    const {
        name,
        value,
        hanleChangeRadioButton
    } = props;
    return(
        <TouchableOpacity style = {styles.radioContainer} onPress={() => hanleChangeRadioButton}>
                <View style={styles.radioButton}>
                    <View style={value === "expense" && styles.radioButtonInnerSelected}></View>
                </View>
            <Text style ={styles.radioButtonText}>{name}</Text>
        </TouchableOpacity>
    )
}

export default RadioButtonText;

const styles = StyleSheet.create({
    radioContainer: {
        flexDirection: "row",
    },
    radioButton: {
        height: 15,
        width: 15,
        borderWidth: 1,
        borderRadius: "50%",
        marginRight: 5,
    },
    radioButtonInnerSelected: {
        height: 10,
        width: 10,
        margin: 1.5,
        borderRadius: "50%",
        backgroundColor: "black",
    },
    radioButtonText: {
        textTransform: "capitalize"
    }
})