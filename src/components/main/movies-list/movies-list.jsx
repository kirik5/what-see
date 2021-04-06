import React from "react";
import {useSelector} from "react-redux";
import {isErrorLoadingFilms} from "../../../reducers/films-slice";
import SmallMovieCard from "./small-movie-card/small-movie-card";

const MoviesList = () => {

    const isLoading = useSelector(state => state.films.status)
    const filmsIds = useSelector(state => state.films.ids)
    const isErrorLoadingFilmsList = useSelector(isErrorLoadingFilms)

    return <>
        {isLoading === "loading" && <div>Loading...</div>}
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