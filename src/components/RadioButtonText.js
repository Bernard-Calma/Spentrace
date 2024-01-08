import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RadioButtonText = (props) => {
    const {
        names,
        selectedRadio,
        setSelectedRadio
    } = props;

    const handleChangeRadio = (index) => {
        setSelectedRadio(index);
    }
    return(
        <>
        {
            names?.map((name, index) => 
                <TouchableOpacity 
                    key = {index}
                    style = {styles.radioContainer} 
                    onPress={() => handleChangeRadio(index)}>
                        <View style={styles.radioButton}>
                            <View style={selectedRadio == index && styles.radioButtonInnerSelected}></View>
                        </View>
                    <Text style ={styles.radioButtonText}>{name}</Text>
                </TouchableOpacity>
            )
        }
        </>
        
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