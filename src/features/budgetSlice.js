import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    budgets: [],
    budgetToAdd: {
        accountName: "",
        amoung: 0,
        dueDate: "",
        type: ""
    },
    isLoading: false
}

const budgetSlice = createSlice({
    name: "budget",
    initialState,
    reducers: {
        setBudgetToAdd: (state, {payload}) => {
            console.log("setBudgetToAdd: ", payload)
            state.budgetToAdd = {...state.budgetToAdd, [payload.name]: payload.value};
            // console.log(state.budgetToAdd);
        },
        addBudget: (state, {payload}) => {
            console.log("Payload", payload)
            // state.budgetToAdd = {...state.budgetToAdd, payload};
            // console.log(state.budgetToAdd);
        },
        getBudgets:  (state) => {
            try{
                const jsonValue = AsyncStorage.getItem("budgets");
                // console.log("jsonValue: ", jsonValue)
                state.budgets = jsonValue != null ? JSON.parse(jsonValue) : null
            } catch(err) {
                // console.log(err)
            }
        }
    }
})

export const {
    setBudgetToAdd,
    addBudget,
    getBudgets
} = budgetSlice.actions;

export default budgetSlice.reducer;