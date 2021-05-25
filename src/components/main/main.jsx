import React from 'react'

import MoviesList from "./movies-list/movies-list"
import VisuallyHidden from "../common/visually-hidden/visually-hidden"
import MainMovieCard from "../common/main-movie-card/MainMovieCard"
import FilmsFilter from "./films-filter/films-filter"
import PageFooter from "../common/page-footer/page-footer"
import ShowMore from "./ShowMore/show-more"
import {useSelector} from "react-redux"
import {canShowMore} from "../../reducers/films-slice"

const Main = ({genreType}) => {

    const canShow = useSelector(canShowMore(genreType))


    return <>
        <VisuallyHidden/>
        <MainMovieCard/>

        <div className="page-content">
            <section className="catalog">
                <h2 className="catalog__title visually-hidden">Catalog</h2>

                <FilmsFilter
                    genreType={genreType}
                />

                <MoviesList
                    genreType={genreType}
                />

                {canShow && <ShowMore/>}

            </section>

            <PageFooter/>
        </div>
    </>
};

export default Main;
