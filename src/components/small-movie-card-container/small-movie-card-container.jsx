import React, {useState} from "react";
import {useSelector} from "react-redux";
import {getFilmsName, getFilmsPreview, getFilmsPreviewVideo} from "../../reducers/films-slice";
import SmallMovieCard from "./small-movie-card/small-movie-card";

const SmallMovieCardContainer = ({id}) => {
    const name = useSelector(getFilmsName(id))
    const previewImage = useSelector(getFilmsPreview(id))
    const previewVideoLink = useSelector(getFilmsPreviewVideo(id))

    const [activeFilm, setActiveFilm] = useState(false)
    const [timerId, setTimerId] = useState(null)

    const setActiveFilmHandler = () => {
        setTimerId(setTimeout(() => {
            setActiveFilm(true)
            setTimerId(null)
        }, 1000))
    }
    const removeActiveFilmHandler = () => {

        if (!timerId) {
            setActiveFilm(false)
        } else {
            clearTimeout(timerId)
            setTimerId(null)
        }
    }

    return <SmallMovieCard
        name={name}
        previewImage={previewImage}
        previewVideoLink={previewVideoLink}
        activeFilm={activeFilm}
        setActiveFilm={setActiveFilmHandler}
        removeActiveFilm={removeActiveFilmHandler}
    />
}

export default SmallMovieCardContainer