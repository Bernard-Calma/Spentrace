import { StyleSheet, Text, TouchableHighlight, View } from "react-native"
import { useDispatch } from "react-redux";
import { showBudget } from "../../../features/viewSlice";
import { useState } from "react";

const Budget = ({budget, runningAmount}) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dispatch = useDispatch();
    // console.log("Budget: ", budget)
    const [date, setDate] = useState(budget.dueDate)
    // console.log(date.getDate())
    return(
        <TouchableHighlight 
            underlayColor={"lightgray"}
            onPress={() => dispatch(showBudget(budget))
        }>
            <View style = {styles.budgetContainer}>
                <Text style = {new Date() <= budget.dueDate ? styles.budgetTextPositive : styles.budgetTextNegative}>{`${months[date.getMonth()].slice(0,3)} ${date.getDate()}` || ""}</Text>
                <Text style = {styles.budgetTextName}>{budget.accountName}</Text>
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
        borderWidth: 1.5,
        borderBottomWidth: 1.5,
        color: "#B0B7C4",
    },
    budgetTextName: {
        width: "25%",
        paddingLeft: 10,
        fontSize: 16,
        borderWidth: 1.5,
        borderBottomWidth: 1.5,
        color: "#B0B7C4",
    },
    budgetTextNegative: {
        color: "red",
        width: "25%",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        borderWidth: 1.5,
        textShadowColor: 'red',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 10
    },
    budgetTextPositive: {
        color: "green",
        width: "25%",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        borderWidth: 1.5,
        textShadowColor: 'green',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 10
    }
})