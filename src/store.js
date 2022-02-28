import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './features/theme/theme-slice';
import axios from "axios";
import * as api from './config';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                client: axios,
                api
            },
        },
        serializableCheck: false,
    })
});