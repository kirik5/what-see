import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import getFilms from "../api";


const filmsAdapter = createEntityAdapter()

const initialState = filmsAdapter.getInitialState({
    status: 'idle'
})

export const fetchFilms = createAsyncThunk('films/fetchFilms', async () => {
    return await getFilms();
});

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    // reducers: {
    //     addActiveQuestionNumber(state) {
    //         state.numberOfActiveQuestion += 1;
    //     },
    //     resetGame() {
    //         return initialState;
    //     },
    // },
    extraReducers: builder => {
        builder
            .addCase(fetchFilms.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchFilms.fulfilled, (state, action) => {
                filmsAdapter.setAll(state, action.payload)
                state.status = 'idle';
            })
    },
});

// export const {addActiveQuestionNumber, resetGame} = filmsSlice.actions;

export default filmsSlice.reducer;

export const getFilmsName = id => state => state.films.entities[id].name
export const getFilmsPreview = id => state => state.films.entities[id].preview_image
export const getFilmsPreviewVideo = id => state => state.films.entities[id].preview_video_link