import { StyleSheet, View } from "react-native"
import AddBudget from "./AddBudget/AddBudget";
import { useDispatch, useSelector } from "react-redux";
import BudgetList from "../views/BudgetList/BudgetList";
import { useEffect } from "react";
import { getBudgets } from "../features/budgetSlice";
import ViewBudget from "./ViewBudget/ViewBudget";

const LandingPage = () => {
    const dispatch = useDispatch();
    const {view} = useSelector(store => store.view);
    useEffect(()=>{
        dispatch(getBudgets())
      },[])
    return(
        <View style = {styles.LandingPage}>
            {
                view === "Budget" ? <BudgetList />
                : view === "ViewBudget" ? <ViewBudget />
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
