import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './features/theme/theme-slice';
import controlsReducer from './features/controls/controls-slice';
import countriesReducer from "./features/countries/countries-slice";

import axios from "axios";
import * as api from './config';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        controls: controlsReducer,
        countries: countriesReducer,

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