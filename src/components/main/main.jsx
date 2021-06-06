import React from 'react'
import VisuallyHidden from "../common/visually-hidden/visually-hidden"
import MainMovieCard from "../common/main-movie-card/MainMovieCard"
import FilmsFilter from "./films-filter/films-filter"
import PageFooter from "../common/page-footer/page-footer"
import ShowMore from "./ShowMore/show-more"
import {useSelector} from "react-redux"
import {canShowMore, getInitializingStatus} from "../../reducers/films-slice"
import GenreMoviesList from "./movies-list/genre-movies-list";


const Main = ({genreType}) => {
    const canShow = useSelector(canShowMore(genreType))
    const initializationStatus = useSelector(getInitializingStatus)

    return <>
        <VisuallyHidden/>

        {initializationStatus === 'succeeded' && (
            <MainMovieCard
                id={15}
            />
        )}


        <div className="page-content">
            <section className="catalog">
                <h2 className="catalog__title visually-hidden">Catalog</h2>

                <FilmsFilter
                    genreType={genreType}
                />

                <GenreMoviesList
                    genreType={genreType}
                />

                {canShow && <ShowMore
                    from={'main'}
                />}

            </section>

            <PageFooter/>
        </div>
    </>
};

export default Main
