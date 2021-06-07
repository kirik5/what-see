import React from "react"
import {useSelector} from "react-redux";
import {canShowMoreOfLike, getLikeFilmsIds, isErrorLoadingFilms} from "../../../reducers/films-slice";
import MoviesList from "../../main/movies-list/movies-list";
import ShowMore from "../../main/ShowMore/show-more";

const CatalogLikeThis = ({filmsGenre}) => {
    const filmsIds = useSelector(getLikeFilmsIds(filmsGenre))
    const isErrorLoadingFilmsList = useSelector(isErrorLoadingFilms)
    const canShow = useSelector(canShowMoreOfLike(filmsGenre))

    return (
        <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <MoviesList
                filmsIds={filmsIds}
                isErrorLoadingFilmsList={isErrorLoadingFilmsList}
            />

            {canShow && <ShowMore
                from={'like'}
            />}

        </section>
    )
}

export default CatalogLikeThis