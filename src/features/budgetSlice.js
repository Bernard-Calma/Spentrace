import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    budgets: [],
    budgetToAdd: {
        id: this.budgets?.length,
        accountName: "",
        amount: 0,
        dueDate: {
            month: 0,
            day: 0
        },
        type: -1,
    },
    isLoading: false
}

export const getBudgets = createAsyncThunk("buget/getBudgets", async (payload, thunkAPI) => {
    try {
        const jsonValue = await AsyncStorage.getItem("budgetList");
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(err) {
        console.log(err)
        return thunkAPI.rejectWithValue("Error getting bills")
    }
})

const budgetSlice = createSlice({
    name: "budget",
    initialState,
    reducers: {
        setBudgetToAdd: (state, {payload}) => {
            state.budgetToAdd = {...state.budgetToAdd, [payload.name]: payload.value};
            // console.log(state.budgetToAdd);
        },
        addBudget: (state) => {
            console.log("Adding Budget: ", {...state.budgetToAdd, id: state.budgets?.length || 0})
            state.budgets = [...state.budgets, {...state.budgetToAdd, id: state.budgets?.length || 0}];
            state.budgetToAdd = {
                accountName: "",
                amount: 0,
                dueDate: {
                    month: 0,
                    day: 0
                },
                type: "",
            };
            console.log("State budgets after adding", state.budgets);
        },
        deleteBudget: (state, {payload}) => {
            console.log("Delete budget: ", payload)
            state.budgets = state.budgets.filter(budget => !budget.accountName === payload.accountName)
            console.log("Budgets after delete: ", state.budgets)
        }
    },
    extraReducers: builder => {
        builder
        .addCase(getBudgets.pending, state => {
            state.isLoading = true;
        })
        .addCase(getBudgets.rejected, (state, {payload}) => {
            state.isLoading = false;
            console.log("rejected payload: ", payload)
        })
        .addCase(getBudgets.fulfilled, (state, {payload}) => {
            console.log(payload)
            state.budgets = [...state.budgets, payload]
            state.isLoading = false;
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