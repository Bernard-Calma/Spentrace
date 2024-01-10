import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    budgets: [],
    budgetToAdd: {
        accountName: "",
        amount: 0,
        dueDate: {
            month: 0,
            day: 0
        },
        type: "",
    },
    isLoading: false
}

const budgetSlice = createSlice({
    name: "budget",
    initialState,
    reducers: {
        setBudgetToAdd: (state, {payload}) => {
            state.budgetToAdd = {...state.budgetToAdd, [payload.name]: payload.value};
            console.log(state.budgetToAdd);
        },
        addBudget: (state) => {
            state.budgets = [...state.budgets, state.budgetToAdd];
            state.budgetToAdd = {
                accountName: "",
                amount: 0,
                dueDate: {
                    month: 0,
                    day: 0
                },
                type: "",
            };
            console.log(state.budgets);
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