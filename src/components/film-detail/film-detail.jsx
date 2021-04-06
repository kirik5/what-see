import React from "react"
import {useSelector} from "react-redux"
import {
    getFilmsName,
    getFimlsBg,
    getFimlsBgColor,
    getFimlsGenre,
    getFimlsPoster, getFimlsReleased
} from "../../reducers/films-slice"
import avatar from "../../images/avatar.jpg"
import VisuallyHidden from "../common/visually-hidden/visually-hidden";
import Tabs from "./tabs-titles/tabs-titles";


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
                    <div className="logo">
                        <a href="main.html" className="logo__link">
                            <span className="logo__letter logo__letter--1">W</span>
                            <span className="logo__letter logo__letter--2">T</span>
                            <span className="logo__letter logo__letter--3">W</span>
                        </a>
                    </div>

                    <div className="user-block">
                        <div className="user-block__avatar">
                            <img src={avatar} alt="User avatar" width="63" height="63"/>
                        </div>
                    </div>
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

                        <Tabs filmId={id} />

                    </div>
                </div>
            </div>
        </section>

        <div className="page-content">
            <section className="catalog catalog--like-this">
                <h2 className="catalog__title">More like this</h2>

                <div className="catalog__movies-list">
                    <article className="small-movie-card catalog__movies-card">
                        <div className="small-movie-card__image">
                            <img src="/img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
                                 alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
                        </div>
                        <h3 className="small-movie-card__title">
                            <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of
                                Grindelwald</a>
                        </h3>
                    </article>

                    <article className="small-movie-card catalog__movies-card">
                        <div className="small-movie-card__image">
                            <img src="/img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175"/>
                        </div>
                        <h3 className="small-movie-card__title">
                            <a className="small-movie-card__link" href="movie-page.html">Bohemian Rhapsody</a>
                        </h3>
                    </article>

                    <article className="small-movie-card catalog__movies-card">
                        <div className="small-movie-card__image">
                            <img src="/img/macbeth.jpg" alt="Macbeth" width="280" height="175"/>
                        </div>
                        <h3 className="small-movie-card__title">
                            <a className="small-movie-card__link" href="movie-page.html">Macbeth</a>
                        </h3>
                    </article>

                    <article className="small-movie-card catalog__movies-card">
                        <div className="small-movie-card__image">
                            <img src="/img/aviator.jpg" alt="Aviator" width="280" height="175"/>
                        </div>
                        <h3 className="small-movie-card__title">
                            <a className="small-movie-card__link" href="movie-page.html">Aviator</a>
                        </h3>
                    </article>
                </div>
            </section>

            <footer className="page-footer">
                <div className="logo">
                    <a href="main.html" className="logo__link logo__link--light">
                        <span className="logo__letter logo__letter--1">W</span>
                        <span className="logo__letter logo__letter--2">T</span>
                        <span className="logo__letter logo__letter--3">W</span>
                    </a>
                </div>

                <div className="copyright">
                    <p>© 2019 What to watch Ltd.</p>
                </div>
            </footer>
        </div>
    </>
}

export default FilmDetail;