import { StyleSheet, Text, View } from "react-native";
import MonthChanger from "./components/MonthChanger";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBudgets } from "../../features/budgetSlice";

const BudgetList = () => {
    const dispatch = useDispatch()
    const {
        budgets,
        budgetToAdd
    } = useSelector(store => store.budget)
    useEffect(()=>{
        console.log("budgets: ", budgets)
        dispatch(getBudgets())
        // console.log("budgets: ", budgets)
    },[])
    return(
        <View style={styles.budgetList}>
            <MonthChanger/>
            <Text>Budget List</Text>
            <Text>Budget to add: {budgetToAdd.accountName}</Text>
            {
                budgets?.map(budget => 
                    <View>
                        <Text>{budget.accountName}</Text>
                        <Text>{budget.amount}</Text>
                        <Text>{budget.dueDate.month}</Text>
                        <Text>{budget.dueDate.day}</Text>
                        <Text>{budget.type == 0 ? "Expense" : "Income" }</Text>
                    </View>    
                )
            }
        </View>
    )
}

export default BudgetList;

const styles = StyleSheet.create({
    budgetList: {
        width: "100%",
        border: "solid",
        // borderWidth: 2,
        // borderColor: "blue",
    }
})

