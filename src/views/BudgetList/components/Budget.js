import { StyleSheet, Text, TouchableHighlight, View } from "react-native"
import { useDispatch } from "react-redux";
import { showBudget } from "../../../features/viewSlice";

const Budget = ({budget, runningAmount}) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dispatch = useDispatch();
    return(
        <TouchableHighlight 
            underlayColor={"lightgray"}
            onPress={() => dispatch(showBudget(budget))
        }>
            <View style = {styles.budgetContainer}>
                <Text style = {styles.budgetText}>{months[parseInt(budget.dueDate.month) - 1].slice(0,3)} {parseInt(budget.dueDate.day)}</Text>
                <Text style = {styles.budgetText}>{budget.accountName}</Text>
                <Text style = {budget.type === 1 ? styles.budgetTextPositive : styles.budgetTextNegative}>${parseInt(budget.amount).toFixed(2)}</Text>
                <Text style = {runningAmount >= 0 ? styles.budgetTextPositive : styles.budgetTextNegative}>{(runningAmount >= 0 ? '$' : "-$") + Math.abs(runningAmount).toFixed(2)}</Text>
            </View>
        </TouchableHighlight>

    )
}

export default Budget;

const styles = StyleSheet.create({
    budgetContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    budgetText: {
        width: "25%",
        fontSize: 16,
        textAlign: "center",
        borderWidth: 1,
        borderBottomWidth: 1,
    },
    budgetTextNegative: {
        color: "red",
        width: "25%",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        borderWidth: 1,
    },
    budgetTextPositive: {
        color: "green",
        width: "25%",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        borderWidth: 1,
    }
})