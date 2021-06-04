import React from "react"

import bgGrandBudapest from "../../../images/bg-the-grand-budapest-hotel.jpg"
import posterGrandBudapest from "../../../images/the-grand-budapest-hotel-poster.jpg"
import avatar from "../../../images/avatar.jpg"
import Logo from "../logo/logo";

const MainMovieCard = () => {
    return (
        <section className="movie-card">
            <div className="movie-card__bg">
                <img src={bgGrandBudapest} alt="The Grand Budapest Hotel"/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">

                <Logo/>

                <div className="user-block">
                    <div className="user-block__avatar">
                        <img src={avatar} alt="User avatar" width="63" height="63"/>
                    </div>
                </div>
            </header>

            <div className="movie-card__wrap">
                <div className="movie-card__info">
                    <div className="movie-card__poster">
                        <img src={posterGrandBudapest} alt="The Grand Budapest Hotel poster" width="218"
                             height="327"/>
                    </div>

                    <div className="movie-card__desc">
                        <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
                        <p className="movie-card__meta">
                            <span className="movie-card__genre">Drama</span>
                            <span className="movie-card__year">2014</span>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainMovieCard