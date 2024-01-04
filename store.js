import { configureStore, getDefaultMiddleWare } from "@reduxjs/toolkit";

import dateReducer from "./src/features/dateSlice"
import viewReducer from "./src/features/viewSlice";

export const store = configureStore({
    reducer:{
        date: dateReducer,
        view: viewReducer
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({
        serializableCheck: false
    })
})