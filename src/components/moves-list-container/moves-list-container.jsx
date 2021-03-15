import React, {useEffect} from "react";
import MoviesList from "./movies-list/movies-list";
import {useDispatch, useSelector} from "react-redux";
import {fetchFilms} from "../../reducers/films-slice";

const MoviesListContainer = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.films.status)
    const filmsIds = useSelector(state => state.films.ids)

    useEffect(() => {
        dispatch(fetchFilms())
    }, [])

    return (
        isLoading === "loading" ?
            (<div>Loading...</div>) :
            (<MoviesList
                filmsIds={filmsIds}
            />)


    )
}

export default MoviesListContainer;