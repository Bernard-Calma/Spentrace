import { Alert, Button, Image, StyleSheet, Text, TouchableWithoutFeedback } from "react-native"
import { leftArrow } from "../../../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { changeView } from "../../../features/viewSlice";
import { addBudget } from "../../../features/budgetSlice";
import { useState } from "react";

import DateTimePicker from '@react-native-community/datetimepicker';

const NavAddBudget = () => {
    const dispatch = useDispatch()
    const {
        budgetToAdd
    } = useSelector(store => store.budget)
    const handleChangeView = (view) => {
        dispatch(changeView(view))
    }
    const handleSave = () => {
        console.log(budgetToAdd)
        if(budgetToAdd.accountName === "" 
            || budgetToAdd.amount === 0 
            || budgetToAdd.dueDate.day === 0 
            || budgetToAdd.dueDate.month === 0 
            || !budgetToAdd.type) {
          Alert.alert("Fill up all information")
        } else {
          dispatch(addBudget(budgetToAdd))
        }
        
    }
    return(
        <>
            <TouchableWithoutFeedback onPress={() => handleChangeView("Budget")}>
                <Image 
                    source={leftArrow}
                    style={styles.back}
                />
            </TouchableWithoutFeedback>  
            <Text style={ styles.text }>Add</Text>
            <TouchableWithoutFeedback onPress={handleSave}>
                <Text style={ styles.text }>Save</Text>
            </TouchableWithoutFeedback>  
        </>
    )
}

export default NavAddBudget;

const styles = StyleSheet.create({
    back: {
        height: 15,
        width: 15,
    },
    text: {
        fontFamily: "roboto-bold", 
        fontSize: 18
    }
})