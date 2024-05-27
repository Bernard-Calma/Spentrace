import { ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { Budget, Title } from "./components";

const BudgetList = () => {
    let runningAmount = 0
    const {
        budgets
    } = useSelector(store => store.budget)
    return(
        <View style={styles.budgetList}>
            <Title/>
            <ScrollView style = {styles.budgetsScrollView}>
            {
                budgets?.map((budget, index) => {
                    if(budget.type === 0) runningAmount += parseInt(budget.amount)
                    else runningAmount -= parseInt(budget.amount)
                    return budgets.length && <Budget 
                        key = {index}
                        budget = {budget}
                        runningAmount = {runningAmount}
                    />})
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

