import { configureStore, getDefaultMiddleWare } from "@reduxjs/toolkit";

import dateReducer from "./src/features/dateSlice"

export const store = configureStore({
    reducer:{
        date: dateReducer
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({
        serializableCheck: false
    })
})