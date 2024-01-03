import { createSlice } from "@reduxjs/toolkit";

const dateToday = new Date();

const initialState = {
    date: dateToday,
    month: dateToday.getMonth(),
    year: dateToday.getFullYear()
}

const dateSlice = createSlice({
    name: "date",
    initialState,
    reducers: {
        changeToNextMonth: state => {
            if(state.month === 11) {
                state.month = 0;
                state.year++;
            } else state.month++;
        },
        changeToPreviousMonth: (state) => {
            if(state.month === 0) {
                state.month = 11;
                state.year--;
            } else state.month--;
        }
    }
})

export const {
    changeToNextMonth,
    changeToPreviousMonth
} = dateSlice.actions;

export default dateSlice.reducer;