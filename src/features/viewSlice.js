import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    view: "Budget",
    isLoading: false
}

const viewSlice = createSlice({
    name: "View",
    initialState,
    reducers: {
        changeView: (state, {payload}) => {
            state.view = payload;
        }
    }
})

export const {
    changeView
} = viewSlice.actions;

export default viewSlice.reducer; 