import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { RadioButtonText } from "../../../components"
// import DateTimePicker from '@react-native-community/datetimepicker';

const Categories = (props) =>{
    const {
        name,
        type
    } = props

    const [selectedRadio, setSelectedRadio] = useState()
    const [dateNum, setDateNum] = useState({month: 0, day: 0})
    const handleChangeRadioIncome = () => {
        setSelectedRadio("Income")
    }
    const handleChangeRadioExpense = () => {
        setSelectedRadio("Expense")
    }

    const handleOnChangeDate = (day, inputNum, maxNum) => {
        if(inputNum > maxNum) setDateNum({...dateNum, [day]: maxNum})
        else setDateNum({...dateNum, [day]: inputNum})
        // console.log(text)
    }
    const handleFixDate = () => {
        if(dateNum.month == 0) setDateNum({...dateNum, month: 1})
        if(dateNum.month % 2 !== 0) {

       }
    }
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>{name}{dateNum.month}{dateNum.day}</Text>
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
                ? <View style = {styles.dateInputContainer}>
                    <Text>Month</Text>
                    <TextInput 
                        style = {styles.dateInput}
                        textAlign="right"
                        inputMode="numeric"
                        maxLength={2}
                        placeholder="mm"
                        onChangeText={text => handleOnChangeDate("month", text, 12)}
                        onEndEditing={handleFixDate}
                        defaultValue={dateNum.month.toString()}
                        value = {dateNum.month}
                    />
                    <Text>Date</Text>
                    <TextInput 
                        style = {styles.dateInput}
                        textAlign="right"
                        inputMode="numeric"
                        maxLength={2}
                        placeholder="dd"
                        onChangeText={text => handleOnChangeDate("day", text, 31)}
                        value = {dateNum.day}
                    />
                </View>
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
                    <RadioButtonText 
                        name = {"income"}
                        value = {selectedRadio}
                        hanleChangeRadioButton = {()=>handleChangeRadioIncome}
                    />
                    <RadioButtonText 
                        name = {"expense"}
                        value = {selectedRadio}
                    />
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
    dateInputContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    dateInput: {
        width: 30,
        fontSize: 16,
        fontWeight: "bold",
        color: "#10f",
        borderWidth: 1,
        borderColor: "black",
        margin: 5
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