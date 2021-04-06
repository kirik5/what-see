import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import getFilms from "../api";


const filmsAdapter = createEntityAdapter()

const initialState = filmsAdapter.getInitialState({
    status: 'idle',
    error: null,
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
                state.status = 'succeeded'
            })
            .addCase(fetchFilms.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
});

// export const {addActiveQuestionNumber, resetGame} = filmsSlice.actions;

export default filmsSlice.reducer;


const {
    selectById: selectFilmById
} = filmsAdapter.getSelectors(state => state.films)

export const getFilmsName = id => state => state.films.entities[id].name
export const getFilmsPreview = id => state => state.films.entities[id].preview_image
export const getFilmsPreviewVideo = id => state => state.films.entities[id].preview_video_link
export const getFimlsPoster = id => state => state.films.entities[id].poster_image
export const getFimlsBg = id => state => state.films.entities[id].background_image
export const getFimlsBgColor = id => state => state.films.entities[id].background_color
export const getFimlsDescription = id => state => state.films.entities[id].description
export const getFimlsRating = id => state => selectFilmById(state, id).rating
export const getFimlsGenre = id => state => selectFilmById(state, id).genre
export const getFimlsReleased = id => state => selectFilmById(state, id).released
export const getFimlsDirector = id => state => selectFilmById(state, id).director
export const getFimlsStarring = id => state => selectFilmById(state, id).starring
export const getFimlsRunTime = id => state => selectFilmById(state, id).run_time

export const isErrorLoadingFilms = state => state.films.error
export const getInicializationStatus = state => state.films.status