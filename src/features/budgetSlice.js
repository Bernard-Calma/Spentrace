import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
            state.budgets = [...state.budgets, payload]
            state.isLoading = false;
        })
    }
})

export const {
    setBudgetToAdd,
    addBudget,
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