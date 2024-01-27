import { Alert, StyleSheet, Text, TouchableWithoutFeedback } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { changeView } from "../../../features/viewSlice";
import { addBudget } from "../../../features/budgetSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from '@expo/vector-icons';


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
        //   dispatch(addBudgetToLocal())
        }
        
    }
    return(
        <>
            <TouchableWithoutFeedback onPress={() => handleChangeView("Budget")}>
                <Entypo name="back" size={24} color="black" />
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
    text: {
        fontFamily: "roboto-bold", 
        fontSize: 18
    }
})