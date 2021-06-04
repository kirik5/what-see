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
import ButtonMyList from "../common/button-my-list/button-my-list"
import {Redirect} from "react-router-dom";
import {isAuthorized} from "../../reducers/autorization-slice";
import withRedirectToLogin from "../../hoc/redirect-to-login";



const FilmDetail = ({id}) => {
    const filmsName = useSelector(getFilmsName(id))
    const filmsPoster = useSelector(getFimlsPoster(id))
    const filmsBg = useSelector(getFimlsBg(id))
    const filmsBgColor = useSelector(getFimlsBgColor(id))
    const filmsGenre = useSelector(getFimlsGenre(id))
    const filmsReleased = useSelector(getFimlsReleased(id))
    const isUserAuthorized = useSelector(isAuthorized)

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

                            <ButtonMyList
                            />

                            <a href="add-review.html" className="btn movie-card__button">Add review</a>
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
            <CatalogLikeThis/>

            <PageFooter/>
        </div>
    </>
}

export default withRedirectToLogin(FilmDetail);
