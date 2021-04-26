import React from "react";
import {useSelector} from "react-redux";
import {getFilmsIds, isErrorLoadingFilms} from "../../../reducers/films-slice";
import SmallMovieCard from "./small-movie-card/small-movie-card";

const MoviesList = ({genreType}) => {

    const filmsIds = useSelector(getFilmsIds(genreType))
    const isErrorLoadingFilmsList = useSelector(isErrorLoadingFilms)


    return <>
        {isErrorLoadingFilmsList ?
            <div>isErrorLoadingFilmsList</div> :
            <div className="catalog__movies-list">

                {filmsIds.map((id) => {
                    return (
                        <SmallMovieCard
                            key={id}
                            id={id}
                        />
                    )
                })
                }

            </div>}
    </>
}

export default MoviesList;