import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBudgets } from "../../features/budgetSlice";
import { Budget, MonthChanger, Title } from "./components";

const BudgetList = () => {
    const dispatch = useDispatch()
    const {
        budgets
    } = useSelector(store => store.budget)
    const {
        month
    } = useSelector(store => store.date)
    useEffect(()=>{
        console.log("budgets: ", budgets)
        dispatch(getBudgets())
        // console.log("budgets: ", budgets)
    },[])
    return(
        <View style={styles.budgetList}>
            {/* <MonthChanger/> */}
            <Title/>
            <ScrollView style = {styles.budgetsScrollView}>
            {
                budgets?.map(budget => budget.dueDate.month == month && <Budget budget = {budget}/>)
            }
            </ScrollView>
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
    },
    budgetsScrollView: {
        height: "85%"
    }
})

