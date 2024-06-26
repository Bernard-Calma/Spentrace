import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { setBudgetToAdd } from "../features/budgetSlice";
import RNDateTimePicker from "@react-native-community/datetimepicker";


const DateText = () => {
    const dispatch = useDispatch();
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
        // console.log("Date: ",selectedDate)
        // handleChangeBudgetToAdd("dueDate", selectedDate)
        handleChangeBudgetToAdd(selectedDate)
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const handleChangeBudgetToAdd = (value) => {
        // console.log("handleChangeBudgetToAdd: ", {name: "dueDate", value: value})
        dispatch(setBudgetToAdd({name: "dueDate", value: value}))
    }

    return(
        <View style = {styles.dateInputContainer}>
            <Button onPress={showDatepicker} title={date.toDateString()} />
            {/* <Button onPress={showTimepicker} title="Show time picker!" /> */}
            {/* <Text>selected: {date.toLocaleString()}</Text> */}
            {show && (
                <RNDateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                    textColor="white"
                />
            )}
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
        width: 40,
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        borderWidth: 1,
        borderColor: "black",
        // margin: 5
    },
})