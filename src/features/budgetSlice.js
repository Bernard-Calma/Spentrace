import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    budgets: [],
    budgetToAdd: {
        id: this.budgets?.length,
        accountName: "",
        amount: "",
        dueDate: new Date(),
        type: -1,
    },
    isLoading: false
}

export const getBudgets = createAsyncThunk("buget/getBudgets", async (payload, thunkAPI) => {
    try {
        const jsonValue = await AsyncStorage.getItem("budgetList");
        // console.log("Get Budgets - Async Thunk: ", jsonValue);
        return jsonValue != null ? JSON.parse(jsonValue) : {"budgets": []};
    } catch(err) {
        console.log(err)
        return thunkAPI.rejectWithValue("Error getting bills")
    }
})

export const addBudgetToLocal = createAsyncThunk("budget/addBudgetToLocal", async (state, thunkAPI) => {
    // console.log("addBudgetToLocal: ", state.budgets)
    try {
        const jsonValue = JSON.stringify(value);
        // console.log(jsonValue, "Added")
        await AsyncStorage.setItem('budgetList', jsonValue);
      } catch (e) {
        // saving error
        console.log(e)
      }
})

const modifyLocalStorage = (key, newValue) => {
    try {
        const jsonValue = JSON.stringify(newValue);
        AsyncStorage.setItem(key, jsonValue);
        // console.log(jsonValue, "Added")
    } catch (e) {
        // saving error
        console.log(e)
    }
}

const budgetSlice = createSlice({
    name: "budget",
    initialState,
    reducers: {
        setBudgetToAdd: (state, {payload}) => {
            // console.log("payload: ", payload)
            state.budgetToAdd = {...state.budgetToAdd, [payload.name]: payload.value};
            // console.log(state.budgetToAdd);
            // console.log(state.budgetToAdd.dueDate)
        },
        addBudget: (state) => {
            // console.log("Adding Budget: ", {...state.budgetToAdd, id: state.budgets?.length || 0})
            state.budgets = [...state.budgets, {
                ...state.budgetToAdd, 
                id: state.budgets?.length || 0,
                dueDate: state.budgetToAdd.dueDate,
                amount: state.budgetToAdd.amount * 1
            }].sort((a,b) => (a.dueDate > b.dueDate) ? 1 : -1);
            state.budgetToAdd = {
                accountName: "",
                amount: 0,
                dueDate: new Date(),
                type: "",
            };

            // console.log("State budgets after adding", state.budgets);
            // console.log("addBudgetToLocal: ", state.budgets)
            modifyLocalStorage("budgetList",{budgets: state.budgets})
            
        },
        deleteBudget: (state, {payload}) => {
            // console.log("Delete budget: ", payload)
            state.budgets = state.budgets.filter(budget => budget.accountName !== payload.accountName)
            // console.log("Budgets after delete: ", state.budgets)
            modifyLocalStorage("budgetList",{budgets: state.budgets})
        }
    },
    extraReducers: builder => {
        builder
        .addCase(getBudgets.pending, state => {
            state.isLoading = true;
        })
        .addCase(getBudgets.rejected, (state, {payload}) => {
            state.isLoading = false;
            // console.log("rejected payload: ", payload)
        })
        .addCase(getBudgets.fulfilled, (state, {payload}) => {
            const budgets = payload.budgets
            // console.log("Budgets Before: ", budgets)
            // Change budget due date from text to date object before passing to APP
            budgets.sort((a,b) => (a.dueDate > b.dueDate) ? 1 : -1).map(budget => budget.dueDate = new Date(budget.dueDate))
            // console.log("Budgets After: ", budgets)
            
            if (!budgets) {
                state.budgets = []
            } else {
                state.budgets = budgets != null ? budgets : [];
            }
            state.isLoading = false;
        })
        .addCase(addBudgetToLocal.pending, state => {
            state.isLoading = true;
        })
        .addCase(addBudgetToLocal.rejected, (state, {payload}) => {
            state.isLoading = false;
            // console.log("rejected payload: ", payload)
        })
        .addCase(addBudgetToLocal.fulfilled, (state, {payload}) => {
            // console.log("addBudgetToLocal payload: ", payload)
            // state.budgets = [...state.budgets, payload]
            // state.isLoading = false;
        })
    }
})

export const {
    setBudgetToAdd,
    addBudget,
    deleteBudget
} = budgetSlice.actions;

export default budgetSlice.reducer;

// const getData = async () => {
    //     console.log("getData")
    //     try {
    //         console.log("getData 2")
    //         const value = await AsyncStorage.getItem("budgetList");
    //         if(value != null) {
    //             console.log("Value: ", value)
    //         } else {
    //             console.log("null value")
    //         }
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }