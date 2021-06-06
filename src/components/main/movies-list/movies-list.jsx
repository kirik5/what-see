import React from "react";
import SmallMovieCard from "./small-movie-card/small-movie-card";
import ErrorLoading from "../../common/error-loading/error-loading";

const MoviesList = ({filmsIds, isErrorLoadingFilmsList}) => {

    return (
        <>
            {isErrorLoadingFilmsList ?
                <ErrorLoading/> :
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

                </div>
            }
        </>
    )
}

export default MoviesList