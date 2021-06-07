import {createAsyncThunk, createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";
import serverAPI from "../api-mock";


const filmsAdapter = createEntityAdapter()

const initialState = filmsAdapter.getInitialState({
    status: 'idle',
    error: null,
    countOfFilmsInPage: 8,
    countOfFilmsInLikePage: 8,
    genre: 'all genres',
})

export const fetchFilms = createAsyncThunk('films/fetchFilms', async () => {
    return await serverAPI.getFilms();
});

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        addCountOfFilmsInPage(state) {
            state.countOfFilmsInPage += 8;
        },
        addCountOfFilmsInLikePage(state) {
            state.countOfFilmsInLikePage += 8;
        },
        resetCountOfFilmsInPage(state) {
            state.countOfFilmsInPage = 8;
        },
        resetCountOfFilmsInLikePage(state) {
            state.countOfFilmsInLikePage = 8;
        }
    },
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

export const {addCountOfFilmsInPage, resetCountOfFilmsInPage, addCountOfFilmsInLikePage, resetCountOfFilmsInLikePage} = filmsSlice.actions;

export default filmsSlice.reducer;


const {
    selectAll: selectFilms,
    selectById: selectFilmById
} = filmsAdapter.getSelectors(state => state.films)

export const getFilmsIds = (genreType) => createSelector(
    state => state.films.ids,
    selectFilms,
    state => state.films.countOfFilmsInPage,
    (allFilmsIds, allFilms, countOfFilmsInPage) => {
        let selectedFilmsIds
        if (!genreType) {
            selectedFilmsIds = allFilmsIds
        } else {
            selectedFilmsIds = allFilms.filter(film => film.genre.toLowerCase() === genreType.toLowerCase()).map(film => film.id)
        }

        const filmsLength = selectedFilmsIds.length
        if (countOfFilmsInPage < filmsLength) {
            return selectedFilmsIds.slice(0, countOfFilmsInPage)
        } else {
            return selectedFilmsIds
        }
    }
)

export const getLikeFilmsIds = (genreType) => createSelector(
    state => state.films.ids,
    selectFilms,
    state => state.films.countOfFilmsInLikePage,
    (allFilmsIds, allFilms, countOfFilmsInLikePage) => {
        let selectedFilmsIds
        if (!genreType) {
            selectedFilmsIds = allFilmsIds
        } else {
            selectedFilmsIds = allFilms.filter(film => film.genre.toLowerCase() === genreType.toLowerCase()).map(film => film.id)
        }

        const filmsLength = selectedFilmsIds.length
        if (countOfFilmsInLikePage < filmsLength) {
            return selectedFilmsIds.slice(0, countOfFilmsInLikePage)
        } else {
            return selectedFilmsIds
        }
    }
)

export const getAllFilmsIdsLength = (genreType) => createSelector(
    state => state.films.ids,
    selectFilms,
    (allFilmsIds, allFilms) => {
        let selectedFilmsIds
        if (!genreType) {
            selectedFilmsIds = allFilmsIds
        } else {
            selectedFilmsIds = allFilms.filter(film => film.genre.toLowerCase() === genreType.toLowerCase()).map(film => film.id)
        }

        return selectedFilmsIds.length
    }
)

export const canShowMore = (genreType) => createSelector(
    getAllFilmsIdsLength(genreType),
    state => state.films.countOfFilmsInPage,
    (allSelectedFilmsIdsLength, countOfFilmsInPage) => {
        return (countOfFilmsInPage < allSelectedFilmsIdsLength)
    }
)

export const canShowMoreOfLike = (genreType) => createSelector(
    getAllFilmsIdsLength(genreType),
    state => state.films.countOfFilmsInLikePage,
    (allSelectedFilmsIdsLength, countOfFilmsInLikePage) => {
        return (countOfFilmsInLikePage < allSelectedFilmsIdsLength)
    }
)


export const getAllGenres = createSelector(
    state => Object.values(state.films.entities),
    filmsArray => {
        let allGenres = new Set()
        filmsArray.forEach(film => {
            allGenres.add(film.genre)
        })
        allGenres = [...allGenres].sort((a, b) => a > b ? 1 : -1)
        allGenres.unshift('All genres')
        return allGenres
    }
)

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
export const getFilmsFullLink = id => state => selectFilmById(state, id).video_link
export const isErrorLoadingFilms = state => state.films.error
export const getInitializingStatus = state => state.films.status
// export const isAutorizationRequired = state => state.films.isAuthorizationRequired

