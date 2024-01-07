import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const DateText = ({setDateNum, dateNum}) => {
    console.log(dateNum)

    const handleOnChangeDate = (day, inputNum, maxNum) => {
        if(inputNum > maxNum) setDateNum({...dateNum, [day]: maxNum})
        else setDateNum({...dateNum, [day]: inputNum})
        // console.log(text)
    }
    const handleFixDate = (input) => {
        if(dateNum[input] == 0) setDateNum({...dateNum, [input]: 1})
        if(dateNum.day >= 30){
            if(dateNum.month == 2) setDateNum({...dateNum, day: 29})
            else if(dateNum.month % 2 == 0) {
                setDateNum({...dateNum, day: 30})
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
                onChangeText={text => handleOnChangeDate("month", text, 12)}
                onEndEditing={() => handleFixDate("month")}
                defaultValue={dateNum.month.toString()}
                value = {dateNum.month.toString()}
            />
            <Text>Date</Text>
            <TextInput 
                style = {styles.dateInput}
                textAlign="right"
                inputMode="numeric"
                maxLength={2}
                placeholder="dd"
                onChangeText={text => handleOnChangeDate("day", text, 31)}
                onEndEditing={() => handleFixDate("day")}
                defaultValue={dateNum.day.toString().toString()}
                value = {dateNum.day}
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