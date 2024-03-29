import { Alert, StyleSheet, TouchableHighlight, View } from "react-native"
import { TextValue } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { deleteBudget } from "../../features/budgetSlice";
import { AntDesign } from '@expo/vector-icons';

const ViewBudget = () =>{
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dispatch = useDispatch();
    const { budgetView } = useSelector(store => store.view)
    const {
        dueDate,
        accountName,
        amount,
        type
    } = budgetView;

    const handleDelete = () => {
        Alert.alert("Delete", "Are you sure you weant to delete?",
        [{
            text: "No",
            style: "cancel"
        },
        {
            text: "Yes",
            onPress: () => dispatch(deleteBudget(budgetView))

        }]
        )
    }
    return(
        <View style = {styles.viewBudgetContainer}>
            <TextValue 
                name = {"Date"}
                value = {months[dueDate.month - 1] + " " + dueDate.day}
            />
            <TextValue 
                name = {"Name"}
                value = {accountName}
            />
            <TextValue 
                name = {"Amount"}
                value = {parseInt(amount).toFixed(2)}
            />
            <TextValue 
                name = {"Type"}
                value = {type === 0 ? "Expense" : "Income"}
            />
            <TouchableHighlight
                onPress={() => handleDelete()} 
                style={styles.deleteContainer}
            >
                <AntDesign name="delete" size={24} color="red" />
            </TouchableHighlight>
            
            
        </View>
    )
}


export default ViewBudget;

const styles = StyleSheet.create({
    viewBudgetContainer: {
        height: 300,
        justifyContent: "space-around",
        // borderColor: "green", 
        // borderWidth: 1,
    },
    deleteContainer: {
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "red",
        borderRadius: "10",
        alignSelf: "center",
    }
})
