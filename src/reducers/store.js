import {configureStore} from "@reduxjs/toolkit"
import filmsReducer from "./films-slice"
import autorizationReducer from "./autorization-slice"
import {reducer as formReducer} from "redux-form"


const store = configureStore({
    reducer: {
        films: filmsReducer,
        authorization: autorizationReducer,
        form: formReducer,
    }
})

export default store