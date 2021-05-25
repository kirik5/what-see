import React from "react"
import {useLocation} from "react-router-dom"
import {useSelector} from "react-redux"
import {getFilmsFullLink, getFilmsName, getFilmsPreview} from "../../reducers/films-slice"
import VisuallyHidden from "../common/visually-hidden/visually-hidden";
import VideoPlayer from "./video-player/video-player";
import ExitButton from "./exit-button/exit-button";


const FullVideoPlayer = () => {
    const location = useLocation()
    const filmId = new URLSearchParams(location.search).get('filmId')

    const filmFullLink = useSelector(getFilmsFullLink(filmId))
    const filmPoster = useSelector(getFilmsPreview(filmId))
    const filmName = useSelector(getFilmsName(filmId))


    return (
        <>
            <VisuallyHidden/>

            <div className="player">

                <VideoPlayer
                    videoLink={filmFullLink}
                    posterLink={filmPoster}
                    filmName={filmName}
                />

                <ExitButton/>
                
            </div>
        </>
    )
}

export default FullVideoPlayer