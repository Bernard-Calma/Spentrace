import { StyleSheet, View } from "react-native"
import AddBudget from "./AddBudget/AddBudget";
import { useSelector } from "react-redux";
import BudgetList from "../views/BudgetList/BudgetList";

const LandingPage = () => {
    const {view} = useSelector(store => store.view);
    return(
        <View style = {styles.LandingPage}>
            {
                view === "Budget" ? <BudgetList />
                : <AddBudget />
            }
        </View>
    )
}

export default LandingPage;

const styles = StyleSheet.create({
    LandingPage: {
        width: "100%",
        display: "flex",
        // borderWidth: 1,
        // borderColor: "red"
    }
})
