import {configureStore} from "@reduxjs/toolkit"
import filmsReducer from "./films-slice"
import authorizationReducer from "./authorization-slice"
import myFilmListSliceReducer from "./myfilmlist-slice"
import {reducer as formReducer} from "redux-form"


const store = configureStore({
    reducer: {
        films: filmsReducer,
        authorization: authorizationReducer,
        myFilmList: myFilmListSliceReducer,
        form: formReducer,
    }
})

export default store