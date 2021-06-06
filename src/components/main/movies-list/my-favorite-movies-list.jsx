import React from "react";
import {useSelector} from "react-redux";
import {isErrorLoadingFilms} from "../../../reducers/films-slice";
import MoviesList from "./movies-list";
import {getFavoriteFilmsIds} from "../../../reducers/myfilmlist-slice";

const MyFavoriteMoviesList = () => {
    const filmsIds = useSelector(getFavoriteFilmsIds)
    const isErrorLoadingFilmsList = useSelector(isErrorLoadingFilms)

    if (filmsIds.length === 0) {
        return (
            <div>Your favorite films list is clear!</div>
        )
    }
    return <MoviesList
        filmsIds={filmsIds}
        isErrorLoadingFilmsList={isErrorLoadingFilmsList}
    />
}

export default MyFavoriteMoviesList;