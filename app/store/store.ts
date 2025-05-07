import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice";
import regionReducer from './regionSlice';



export const store = configureStore( {
    reducer : {
        user : userReducer,
        region: regionReducer,
    }
})

export type RootState =  ReturnType<typeof store.getState>;
export type AppDispatch = typeof  store.dispatch;