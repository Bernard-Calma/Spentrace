import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import DateTimePicker from '@react-native-community/datetimepicker';

const DateText = ({handleChangeBudgetToAdd}) => {
    const {
        dueDate
    } = useSelector(store => store.budget.budgetToAdd)

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
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

    return(
        <View style = {styles.dateInputContainer}>
            <Button onPress={showDatepicker} title={date.toDateString()} />
            {/* <Button onPress={showTimepicker} title="Show time picker!" /> */}
            {/* <Text>selected: {date.toLocaleString()}</Text> */}
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
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
        width: 30,
        fontSize: 16,
        fontWeight: "bold",
        color: "#10f",
        borderWidth: 1,
        borderColor: "black",
        margin: 5
    },
})