import { Alert, Button, Image, StyleSheet, Text, TouchableWithoutFeedback } from "react-native"
import { leftArrow } from "../../../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { changeView } from "../../../features/viewSlice";
import { addBudget, addBudgetToLocal } from "../../../features/budgetSlice";
import { useState } from "react";

import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from "@react-native-async-storage/async-storage";


const NavAddBudget = () => {
    const dispatch = useDispatch()
    const {
        budgetToAdd
    } = useSelector(store => store.budget)
    const handleChangeView = (view) => {
        dispatch(changeView(view))
    }
    const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value);
        // console.log(jsonValue, "Added")
        await AsyncStorage.setItem('budgetList', jsonValue);
      } catch (e) {
        // saving error
        console.log(e)
      }
    };
    const handleSave = () => {
        if(budgetToAdd.accountName === "" 
            || budgetToAdd.amount === 0 
            || budgetToAdd.dueDate.day === 0 
            || budgetToAdd.dueDate.month === 0 
            || budgetToAdd.type === -1) {
          Alert.alert("Fill up all information")
        } else {
          dispatch(addBudget(budgetToAdd));
          dispatch(addBudgetToLocal())
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