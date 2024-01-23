import { ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { Budget, Title } from "./components";

const BudgetList = () => {
    const {
        budgets
    } = useSelector(store => store.budget)
    // console.log("BudgetList - Budget: ", budgets)
    // console.log("BudgetList - Budget - Length: ", budgets.length)
    return(
        <View style={styles.budgetList}>
            <Title/>
            <ScrollView style = {styles.budgetsScrollView}>
            {
                budgets?.map((budget, index) => 
                    budgets.length && <Budget 
                        key = {index}
                        budget = {budget}
                    />)
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

