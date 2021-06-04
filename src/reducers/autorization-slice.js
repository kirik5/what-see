import {createSlice} from "@reduxjs/toolkit";
import serverAPI from "../api-mock";
import {stopSubmit} from "redux-form";
import {fetchFilms} from "./films-slice";

const initialState = {
    status: 'idle',
    error: null,
    user: null,
}


export const login = (mailPass) => async (dispatch, getState) => {
    dispatch(loading())
    try {
        const response = await serverAPI.authorizing(mailPass)
        dispatch(fulfilled(response))
        dispatch(fetchFilms())
    } catch (err) {
        dispatch(stopSubmit('authorisingUser', {
            _error: err,
        }))
        dispatch(failed(err))
    }
}

const autorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        loading(state) {
            state.status = 'loading'
        },
        fulfilled(state, action) {
            state.user = action.payload.user
            state.status = 'succeeded'
        },
        failed(state, action) {
            state.status = 'failed'
            state.error = action.payload
        },
    },
})

export const {loading, fulfilled, failed} = autorizationSlice.actions;

export default autorizationSlice.reducer


export const isAuthorized = state => !!state.authorization.user