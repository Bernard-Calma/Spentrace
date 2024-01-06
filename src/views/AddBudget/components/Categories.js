import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
// import DateTimePicker from '@react-native-community/datetimepicker';

const Categories = (props) =>{
    const {
        name,
        type
    } = props

    const [selectedRadio, setSelectedRadio] = useState()
    const handleChangeRadioIncome = () => {
        setSelectedRadio("income")
    }
    const handleChangeRadioExpense = () => {
        setSelectedRadio("expense")
    }
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>{name}</Text>
            {
                type === "amount" 
                ? <TextInput
                    style = {styles.numberInput}
                    value={12}
                    inputMode="decimal"
                    maxLength={7}
                    clearButtonMode="while-editing"
                    textAlign="right"
                    placeholder="$0"
                />
                : type === "date"
                ? <TextInput 
                    style = {styles.dateInput}
                    inputMode = "url"
                    textAlign="right"
                    placeholder="mm-dd"
                />
                : type === "type"
                ? <View style={styles.choicesContainer}>
                    <TouchableOpacity style = {styles.radioContainer} onPress={() => handleChangeRadioIncome()}>
                        <View style={styles.radioButton}>
                            <View style={selectedRadio === "income" && styles.radioButtonInnerSelected}></View>
                        </View>
                        <Text>Income</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.radioContainer} onPress={() => handleChangeRadioExpense()}>
                        <View style={styles.radioButton}>
                            <View style={selectedRadio === "expense" && styles.radioButtonInnerSelected}></View>
                        </View>
                        <Text>Expense</Text>
                    </TouchableOpacity>
                </View>
                :<TextInput 
                    style = {styles.textInput}
                    textAlign="right"
                />
            }
        </View>
    )
}

export default Categories;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        height: 40,
        // borderWidth: 1,
        // borderColor: "red",
    },
    text: {
        fontFamily: "firaCode",
        fontSize: 16
    },
    dateInput: {
        width: 100,
        fontSize: 16,
        fontWeight: "bold",
        color: "#10f",
    },
    textInput: {
        width: "50%",
        fontSize: 16,
        color: "#10f",
    },
    numberInput: {
        width: 100,
        fontSize: 16,
        fontWeight: "bold",
        color: "#10f",
    },
    choicesContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 10,
        
    },
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
    }
})