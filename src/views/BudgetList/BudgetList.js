import { ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { Budget, Title } from "./components";

const BudgetList = () => {
    const {
        budgets
    } = useSelector(store => store.budget)
    return(
        <View style={styles.budgetList}>
            <Title/>
            <ScrollView style = {styles.budgetsScrollView}>
            {
                budgets?.map((budget, index) => 
                    budgets.lenght && <Budget 
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

