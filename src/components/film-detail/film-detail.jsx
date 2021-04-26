import React from "react"
import {useSelector} from "react-redux"
import {
    getFilmsName,
    getFimlsBg,
    getFimlsBgColor,
    getFimlsGenre,
    getFimlsPoster, getFimlsReleased
} from "../../reducers/films-slice"
import VisuallyHidden from "../common/visually-hidden/visually-hidden";
import Tabs from "./tabs-titles/tabs-titles";
import PageFooter from "../common/page-footer/page-footer";
import Logo from "../common/logo/logo";
import Avatar from "../common/avatar/avatar";
import CatalogLikeThis from "../common/catalog-like-this/catalog-like-this";


const FilmDetail = ({id}) => {

    const filmsName = useSelector(getFilmsName(id))
    const filmsPoster = useSelector(getFimlsPoster(id))
    const filmsBg = useSelector(getFimlsBg(id))
    const filmsBgColor = useSelector(getFimlsBgColor(id))
    const filmsGenre = useSelector(getFimlsGenre(id))
    const filmsReleased = useSelector(getFimlsReleased(id))

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
                            <button className="btn btn--play movie-card__button" type="button">
                                <svg viewBox="0 0 19 19" width="19" height="19">
                                    <use xlinkHref="#play-s"></use>
                                </svg>
                                <span>Play</span>
                            </button>
                            <button className="btn btn--list movie-card__button" type="button">
                                <svg viewBox="0 0 19 20" width="19" height="20">
                                    <use xlinkHref="#add"></use>
                                </svg>
                                <span>My list</span>
                            </button>
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

export default FilmDetail;
