import React, {useState, useEffect} from "react"
import {useSelector} from "react-redux"
import {getFilmsName, getFilmsPreview, getFilmsPreviewVideo} from "../../../../reducers/films-slice"
import VideoPlayer from "./video-player/video-player"
import {useHistory} from "react-router-dom"

const SmallMovieCard = ({id}) => {
    const filmsName = useSelector(getFilmsName(id))
    const previewImage = useSelector(getFilmsPreview(id))
    const previewVideoLink = useSelector(getFilmsPreviewVideo(id))

    let history = useHistory()

    const [activeFilm, setActiveFilm] = useState(false)
    const [timerId, setTimerId] = useState(null)

    useEffect(() => {
        return () => {
            if (timerId) clearTimeout(timerId)
        }
    }, [timerId])

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

    const viewFilmDetailsHandler = () => {
        history.push('/films/' + id)
    }

    return (
        <article className="small-movie-card catalog__movies-card"
                 onMouseEnter={setActiveFilmHandler}
                 onMouseLeave={removeActiveFilmHandler}
                 onClick={viewFilmDetailsHandler}
        >

            {activeFilm ?
                <VideoPlayer
                    previewVideoLink={previewVideoLink}
                /> :
                (<div className="small-movie-card__image">
                    <img src={previewImage} alt={filmsName} width="280" height="175"/>
                </div>)
            }

            <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">{filmsName}</a>
            </h3>
        </article>
    )
}

export default SmallMovieCard