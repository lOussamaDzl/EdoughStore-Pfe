import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "../api/apiSlice";
import authReducer from "../features/auth/authSlice"
//import favoritesReducer from "../redux/features/favorites/favoriteSlice"
import favoriteSlice from "./favorites/favoriteSlice";
import cartSlice from "./cart/cartSlice";
import shopSlice from "./shop/shopSlice";
import { getFavoritesFromLocalStorage } from "../../src/Utils/localStorage";

const initialFavorites = getFavoritesFromLocalStorage() || []


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        favorites: favoriteSlice,
        cart: cartSlice,
        shop: shopSlice,
    },

    preloadedState: {
        favorites: initialFavorites
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})

setupListeners(store.dispatch);

export default store;