import {configureStore} from "@reduxjs/toolkit"
import filmsReducer from "./films-slice"


const store = configureStore({
    reducer: {
        films: filmsReducer,
    }
})

export default store