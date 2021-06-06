import React from "react";
import {useSelector} from "react-redux";
import {getFilmsIds, isErrorLoadingFilms} from "../../../reducers/films-slice";
import MoviesList from "./movies-list";

const GenreMoviesList = ({genreType}) => {
    const filmsIds = useSelector(getFilmsIds(genreType))
    const isErrorLoadingFilmsList = useSelector(isErrorLoadingFilms)


    return <MoviesList
            filmsIds={filmsIds}
            isErrorLoadingFilmsList={isErrorLoadingFilmsList}
    />
}

export default GenreMoviesList;