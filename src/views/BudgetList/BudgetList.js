import { StyleSheet, Text, View } from "react-native";
import MonthChanger from "./components/MonthChanger";

const BudgetList = () => {
    return(
        <View style={styles.budgetList}>
            <MonthChanger/>
            <Text>Budget List</Text>
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

