import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    budgets: [],
    isLoading: false
}

const budgetSlice = createSlice({
    name: "budget",
    initialState,
    reducers: {

    }
})

export default budgetSlice.reducer;