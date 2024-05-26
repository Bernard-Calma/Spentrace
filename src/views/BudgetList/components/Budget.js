import { StyleSheet, Text, TouchableHighlight, View } from "react-native"
import { useDispatch } from "react-redux";
import { showBudget } from "../../../features/viewSlice";
import { useState } from "react";

const Budget = ({budget, runningAmount}) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dispatch = useDispatch();
    // console.log("Budget: ", budget)
    return(
        <TouchableHighlight 
            underlayColor={"lightgray"}
            onPress={() => dispatch(showBudget(budget))
        }>
            <View style = {styles.budgetContainer}>
                <Text style = {new Date() <= budget.dueDate ? styles.budgetTextPositive : styles.budgetTextNegative}>{budget.dueDate.toLocaleString().slice(0, -13) || ""}</Text>
                <Text style = {styles.budgetText}>{budget.accountName}</Text>
                <Text style = {budget.type === 0 ? styles.budgetTextPositive : styles.budgetTextNegative}>${parseInt(budget.amount).toFixed(2)}</Text>
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