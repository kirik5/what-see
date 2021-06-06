import {createSelector, createSlice} from "@reduxjs/toolkit";

const initialState = {
    favoriteFilms: [],
    countOfFilmsInPage: 8,
}


const myFilmListSlice = createSlice({
    name: 'myFilmList',
    initialState,
    reducers: {
        addFilm(state, action) {
            state.favoriteFilms.push(Number(action.payload))
        },
        removeFilm(state, action) {
            const elementIndex = state.favoriteFilms.indexOf(action.payload)
            state.favoriteFilms.splice(elementIndex, 1)
        },
        clearFavoriteFilms(state) {
            state = initialState
        },
        addCountOfFavoriteFilmsInPage(state) {
            state.countOfFilmsInPage += 8;
        },
        resetCountOfFavoriteFilmsInPage(state) {
            state.countOfFilmsInPage = 8;
        }
    },
})

export const {addFilm, removeFilm, clearFavoriteFilms, addCountOfFavoriteFilmsInPage, resetCountOfFavoriteFilmsInPage} = myFilmListSlice.actions;

export default myFilmListSlice.reducer


export const addRemoveFilmInList = (id) => (dispatch, getState) => {
    const setOfFavoriteFilms = new Set(getState().myFilmList.favoriteFilms)
    const numberId = Number(id)
    if (setOfFavoriteFilms.has(numberId)) {
        dispatch(removeFilm(numberId))
    } else {
        dispatch(addFilm(numberId))
    }
}

export const allFavoriteFilmsIds = state => state.myFilmList.favoriteFilms
const setOfFavoriteFilms = state => new Set(state.myFilmList.favoriteFilms)
export const isFilmInFavoriteList = (id) => createSelector(
    setOfFavoriteFilms,
    set => set.has(Number(id))
)

export const canShowMoreOfFavorite = createSelector(
    state => state.myFilmList.favoriteFilms.length,
    state => state.myFilmList.countOfFilmsInPage,
    (favoriteFilmsIdsLength, countOfFilmsInPage) => {
        return (countOfFilmsInPage < favoriteFilmsIdsLength)
    }
)

export const getFavoriteFilmsIds = createSelector(
    allFavoriteFilmsIds,
    state => state.myFilmList.countOfFilmsInPage,
    (favoriteFilmsIds, countOfFilmsInPage) => {
        const filmsLength = favoriteFilmsIds.length
        if (countOfFilmsInPage < filmsLength) {
            return favoriteFilmsIds.slice(0, countOfFilmsInPage)
        } else {
            return favoriteFilmsIds
        }
    }
)