import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    view: "Budget",
    budgetView: {},
    isLoading: false
}

const viewSlice = createSlice({
    name: "View",
    initialState,
    reducers: {
        changeView: (state, {payload}) => {
            state.view = payload;
        },
        showBudget: (state, {payload}) => {
            state.view = "ViewBudget",
            state.budgetView = payload;
        }
    }
})

export const {
    changeView,
    showBudget
} = viewSlice.actions;

export default viewSlice.reducer; 