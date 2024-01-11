import { StyleSheet, Text, View } from "react-native"

const Budget = ({budget}) => {
    return(
        <View style = {styles.budgetContainer}>
            <Text style = {styles.budgetText}>{budget.dueDate.month}-{budget.dueDate.day}</Text>
            <Text style = {styles.budgetText}>{budget.accountName}</Text>
            <Text style = {styles.budgetText}>${budget.amount}</Text>
            <Text style = {styles.budgetText}>{budget.type == 0 ? "Expense" : "Income" }</Text>
        </View>
    )
}

export default Budget;

const styles = StyleSheet.create({
    budgetContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        borderWidth: 1,
        borderColor: "black",
    },
    budgetText: {
        width: "25%",
        fontSize: 14,
        textAlign: "center",
        borderWidth: 1,
        borderColor: "black",
    }
})