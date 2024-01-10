import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";

const DateText = ({setDateNum, dateNum, handleChangeBudgetToAdd}) => {
    const {
        dueDate
    } = useSelector(store => store.budget.budgetToAdd)

    const handleOnChangeDate = (day, inputNum, maxNum) => {
        if(inputNum > maxNum) {
            handleChangeBudgetToAdd("dueDate", {...dueDate, [day]: maxNum})
        }
        else handleChangeBudgetToAdd("dueDate", {...dueDate, [day]: inputNum})
    }
    const handleFixDate = (input) => {
        if(dueDate[input] == 0) handleChangeBudgetToAdd("dueDate", {...dueDate, [input]: 1})
        if(dueDate.day >= 30){
            if(dueDate.month == 2) handleChangeBudgetToAdd("dueDate", {...dueDate, day: 29})
            else if(dueDate.month % 2 == 0) {
                handleChangeBudgetToAdd("dueDate", {...dueDate, day: 30})
            } 
        }
    }
    return(
        <View style = {styles.dateInputContainer}>
            <Text>Month</Text>
            <TextInput 
                style = {styles.dateInput}
                textAlign="right"
                inputMode="numeric"
                maxLength={2}
                placeholder="mm"
                value = {dueDate.month.toString()}
                onChangeText={text => handleOnChangeDate("month", text, 12)}
                onEndEditing={() => handleFixDate("month")}
            />
            <Text>Date</Text>
            <TextInput 
                style = {styles.dateInput}
                textAlign="right"
                inputMode="numeric"
                maxLength={2}
                placeholder="dd"
                value = {dueDate.day.toString()}
                onChangeText={text => handleOnChangeDate("day", text, 31)}
                onEndEditing={() => handleFixDate("day")}
            />
        </View>
    )
}

export default DateText;


const styles = StyleSheet.create({
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
})