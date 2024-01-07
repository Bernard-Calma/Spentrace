import { useState } from "react";
import { StyleSheet, View } from "react-native";

const DateText = () => {
    const [dateNum, setDateNum] = useState({month: 0, day: 0})

    const handleOnChangeDate = (day, inputNum, maxNum) => {
        if(inputNum > maxNum) setDateNum({...dateNum, [day]: maxNum})
        else setDateNum({...dateNum, [day]: inputNum})
        // console.log(text)
    }
    const handleFixDate = () => {
        if(dateNum.month == 0) setDateNum({...dateNum, month: 1})
        if(dateNum.day >= 30){
            if(dateNum.month == 2) setDateNum({...dateNum, day: 29})
            else if(dateNum.month % 2 == 0) {
                setDateNum({...dateNum, day: 30})
            } 
        }
    }
    return(
        <View>

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