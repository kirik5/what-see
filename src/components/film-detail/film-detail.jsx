import React, {useEffect} from "react"
import {useSelector} from "react-redux"
import {
    getFilmsName,
    getFimlsBg,
    getFimlsBgColor,
    getFimlsGenre,
    getFimlsPoster, getFimlsReleased
} from "../../reducers/films-slice"
import VisuallyHidden from "../common/visually-hidden/visually-hidden"
import Tabs from "./tabs/tabs"
import PageFooter from "../common/page-footer/page-footer"
import Logo from "../common/logo/logo"
import Avatar from "../common/avatar/avatar"
import CatalogLikeThis from "../common/catalog-like-this/catalog-like-this"
import ButtonPlay from "../common/button-play/button-play"
import ButtonAddToMyList from "../common/button-add-to-my-list/button-add-to-my-list"
import ButtonViewMyList from "../common/button-view-my-list/button-view-my-list";


const FilmDetail = ({id}) => {
    const filmsName = useSelector(getFilmsName(id))
    const filmsPoster = useSelector(getFimlsPoster(id))
    const filmsBg = useSelector(getFimlsBg(id))
    const filmsBgColor = useSelector(getFimlsBgColor(id))
    const filmsGenre = useSelector(getFimlsGenre(id))
    const filmsReleased = useSelector(getFimlsReleased(id))

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])


    return <>
        <VisuallyHidden/>

        <section className="movie-card movie-card--full" style={{backgroundColor: filmsBgColor}}>
            <div className="movie-card__hero">
                <div className="movie-card__bg">
                    <img src={filmsBg} alt={filmsName}/>
                </div>

                <h1 className="visually-hidden">WTW</h1>

                <header className="page-header movie-card__head">

                    <Logo/>

                    <Avatar/>
                </header>

                <div className="movie-card__wrap">
                    <div className="movie-card__desc">
                        <h2 className="movie-card__title">{filmsName}</h2>
                        <p className="movie-card__meta">
                            <span className="movie-card__genre">{filmsGenre}</span>
                            <span className="movie-card__year">{filmsReleased}</span>
                        </p>

                        <div className="movie-card__buttons">

                            <ButtonPlay
                                filmId={id}
                            />

                            <ButtonAddToMyList
                                id={id}
                            />

                            <ButtonViewMyList/>

                        </div>
                    </div>
                </div>
            </div>

            <div className="movie-card__wrap movie-card__translate-top">
                <div className="movie-card__info">
                    <div className="movie-card__poster movie-card__poster--big">
                        <img src={filmsPoster} alt="The Grand Budapest Hotel poster"
                             width="218"
                             height="327"/>
                    </div>

                    <div className="movie-card__desc">

                        <Tabs filmId={id}/>

                    </div>
                </div>
            </div>
        </section>

        <div className="page-content">

            <CatalogLikeThis
                filmsGenre={filmsGenre}
            />

            <PageFooter/>
        </div>
    </>
}

export default FilmDetail;
