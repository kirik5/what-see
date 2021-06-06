import {createSlice} from "@reduxjs/toolkit";
import serverAPI from "../api-mock";
import {stopSubmit} from "redux-form";

const initialState = {
    status: 'idle',
    error: null,
    user: null,
}


export const login = (mailPass) => async (dispatch) => {
    dispatch(loading())
    try {
        const response = await serverAPI.authorizing(mailPass)
        dispatch(fulfilled(response))
        window.history.back()
    } catch (err) {
        dispatch(stopSubmit('authorisingUser', {
            _error: err,
        }))
        dispatch(failed(err))
    }
}

const authorizationSlice = createSlice({
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
        logout(state) {
            state.status = 'idle'
            state.error = null
            state.user = null
        }
    },
})

export const {loading, fulfilled, failed, logout} = authorizationSlice.actions;

export default authorizationSlice.reducer


export const isAuthorized = state => !!state.authorization.user