import { configureStore } from "@reduxjs/toolkit";
import { cryptoAPI } from "../services/cryptoAPI";
import { cryptoNewsApi } from "../services/cryptoNewsAPI";

export default configureStore({
    reducer:{
        [cryptoAPI.reducerPath]:cryptoAPI.reducer,
        [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,
    },
})
