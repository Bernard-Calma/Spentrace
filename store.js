import { configureStore, getDefaultMiddleWare } from "@reduxjs/toolkit";

import dateReducer from "./src/features/dateSlice";
import viewReducer from "./src/features/viewSlice";
import budgetReducer from "./src/features/budgetSlice";

export const store = configureStore({
    reducer:{
        date: dateReducer,
        view: viewReducer,
        budget: budgetReducer
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({
        serializableCheck: false
    })
})