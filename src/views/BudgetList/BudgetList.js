import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getBudgets } from "../../features/budgetSlice";
import { Budget, Title } from "./components";

import AsyncStorage from "@react-native-async-storage/async-storage";

const BudgetList = () => {
    const dispatch = useDispatch()
    const {
        budgets
    } = useSelector(store => store.budget)
    const [data, setData] = useState()
    useEffect(()=>{
        // // console.log("budgets: ", budgets)
        // dispatch(getBudgets())
        // // console.log("budgets: ", budgets)
        const getData = async () => {
            console.log("getData")
            try {
                console.log("getData 2")
                const value = await AsyncStorage.getItem("budgetList");
                if(value != null) {
                    console.log("Value: ", value)
                } else {
                    console.log("null value")
                }
            } catch (err) {
                console.log(err)
            }
        }

        getData();
    },[])
    return(
        <View style={styles.budgetList}>
            <Title/>
            <ScrollView style = {styles.budgetsScrollView}>
            {
                budgets?.map(budget => <Budget budget = {budget}/>)
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

