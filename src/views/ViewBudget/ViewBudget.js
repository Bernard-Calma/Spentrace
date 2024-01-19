import { StyleSheet, View } from "react-native"
import { TextValue } from "./components";
import { useSelector } from "react-redux";

const ViewBudget = () =>{
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const {
        dueDate,
        accountName,
        amount,
        type
    } = useSelector(store => store.view.budgetView)
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
                value = {amount}
            />
            <TextValue 
                name = {"Type"}
                value = {type === 0 ? "Expense" : "Income"}
            />
        </View>
    )
}


export default ViewBudget;

const styles = StyleSheet.create({
    viewBudgetContainer: {
        height: 400,
        justifyContent: "space-around",
        // borderColor: "green", 
        // borderWidth: 1,
    }
})