import React from "react"
import {Route, Link, Redirect, Switch, useRouteMatch} from "react-router-dom"
import {useSelector} from "react-redux"
import {
    getFimlsDescription,
    getFimlsDirector, getFimlsGenre,
    getFimlsRating, getFimlsReleased,
    getFimlsRunTime, getFimlsStarring
} from "../../../reducers/films-slice";


const TabTitle = ({filmId, title}) => {
    const match = useRouteMatch({
        path: `/films/${filmId}/${title.toLowerCase()}`
    })

    const classes = [`movie-nav__item`]
    match && classes.push(`movie-nav__item--active`)
    return (
        <li className={classes.join(` `)}>
            <Link to={`/films/${filmId}/${title.toLowerCase()}`} className="movie-nav__link">{title}</Link>
        </li>
    )
}

const Overviews = ({filmsRating, filmsDescription, filmsDirector, filmsStarring}) => {
    return (
        <>
            <div className="movie-rating">
                <div className="movie-rating__score">{filmsRating}</div>
                <p className="movie-rating__meta">
                    <span className="movie-rating__level">Very good</span>
                    <span className="movie-rating__count">240 ratings</span>
                </p>
            </div>
            <div className="movie-card__text">
                <p>{filmsDescription}</p>

                <p className="movie-card__director"><strong>Director: {filmsDirector}</strong></p>

                <p className="movie-card__starring">
                    <strong>Starring: {filmsStarring.join(', ')}</strong></p>
            </div>
        </>
    )
}

const Details = ({filmsDirector, filmsStarring, filmsRunTime, filmsGenre, filmsReleased}) => {
    return (
        <div className="movie-card__text movie-card__row">
            <div className="movie-card__text-col">
                <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Director</strong>
                    <span className="movie-card__details-value">{filmsDirector}</span>
                </p>
                <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Starring</strong>
                    <span
                        className="movie-card__details-value">{filmsStarring.map((el, id) => <Actors
                        key={id} content={el}/>)}</span>
                </p>
            </div>

            <div className="movie-card__text-col">
                <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Run Time</strong>
                    <span className="movie-card__details-value">{filmsRunTime}</span>
                </p>
                <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Genre</strong>
                    <span className="movie-card__details-value">{filmsGenre}</span>
                </p>
                <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Released</strong>
                    <span className="movie-card__details-value">{filmsReleased}</span>
                </p>
            </div>
        </div>
    )
}

const Reviews = () => {
    return (
        <div className="movie-card__reviews movie-card__row">
            <div className="movie-card__reviews-col">
                <div className="review">
                    <blockquote className="review__quote">
                        <p className="review__text">Discerning travellers and Wes Anderson fans will
                            luxuriate in the
                            glorious Mittel-European kitsch of one of the director's funniest and
                            most exquisitely
                            designed movies in years.</p>

                        <footer className="review__details">
                            <cite className="review__author">Kate Muir</cite>
                            <time className="review__date" dateTime="2016-12-24">December 24, 2016
                            </time>
                        </footer>
                    </blockquote>

                    <div className="review__rating">8,9</div>
                </div>

                <div className="review">
                    <blockquote className="review__quote">
                        <p className="review__text">Anderson's films are too precious for some, but
                            for those of us
                            willing to lose ourselves in them, they're a delight. "The Grand
                            Budapest Hotel" is no
                            different, except that he has added a hint of gravitas to the mix,
                            improving the recipe.</p>

                        <footer className="review__details">
                            <cite className="review__author">Bill Goodykoontz</cite>
                            <time className="review__date" dateTime="2015-11-18">November 18, 2015
                            </time>
                        </footer>
                    </blockquote>

                    <div className="review__rating">8,0</div>
                </div>

                <div className="review">
                    <blockquote className="review__quote">
                        <p className="review__text">I didn't find it amusing, and while I can
                            appreciate the creativity,
                            it's an hour and 40 minutes I wish I could take back.</p>

                        <footer className="review__details">
                            <cite className="review__author">Amanda Greever</cite>
                            <time className="review__date" dateTime="2015-11-18">November 18, 2015
                            </time>
                        </footer>
                    </blockquote>

                    <div className="review__rating">8,0</div>
                </div>
            </div>
            <div className="movie-card__reviews-col">
                <div className="review">
                    <blockquote className="review__quote">
                        <p className="review__text">The mannered, madcap proceedings are often
                            delightful, occasionally
                            silly, and here and there, gruesome and/or heartbreaking.</p>

                        <footer className="review__details">
                            <cite className="review__author">Matthew Lickona</cite>
                            <time className="review__date" dateTime="2016-12-20">December 20, 2016
                            </time>
                        </footer>
                    </blockquote>

                    <div className="review__rating">7,2</div>
                </div>

                <div className="review">
                    <blockquote className="review__quote">
                        <p className="review__text">It is certainly a magical and childlike way of
                            storytelling, even if
                            the content is a little more adult.</p>

                        <footer className="review__details">
                            <cite className="review__author">Paula Fleri-Soler</cite>
                            <time className="review__date" dateTime="2016-12-20">December 20, 2016
                            </time>
                        </footer>
                    </blockquote>

                    <div className="review__rating">7,6</div>
                </div>

                <div className="review">
                    <blockquote className="review__quote">
                        <p className="review__text">It is certainly a magical and childlike way of
                            storytelling, even if
                            the content is a little more adult.</p>

                        <footer className="review__details">
                            <cite className="review__author">Paula Fleri-Soler</cite>
                            <time className="review__date" dateTime="2016-12-20">December 20, 2016
                            </time>
                        </footer>
                    </blockquote>

                    <div className="review__rating">7,0</div>
                </div>
            </div>
        </div>
    )
}

const Actors = ({content}) => {
    return (
        <>{content}<br/></>
    )
}


const Tabs = ({filmId}) => {
    const tabsTitle = ['Overviews', 'Details', 'Reviews']

    const filmsDescription = useSelector(getFimlsDescription(filmId))
    const filmsRating = useSelector(getFimlsRating(filmId))
    const filmsDirector = useSelector(getFimlsDirector(filmId))
    const filmsStarring = useSelector(getFimlsStarring(filmId))
    const filmsRunTime = useSelector(getFimlsRunTime(filmId))
    const filmsGenre = useSelector(getFimlsGenre(filmId))
    const filmsReleased = useSelector(getFimlsReleased(filmId))


    return (
        <>
            <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">

                    {tabsTitle.map((element, index) => (
                        <TabTitle
                            key={index}
                            title={element}
                            filmId={filmId}
                        />
                    ))}

                </ul>
            </nav>

            <Switch>
                <Route path="/films/:id/:title"
                    render={({match}) => (
                        <>
                           {match.params.title === tabsTitle[0].toLowerCase() &&
                           <Overviews
                               filmsRating={filmsRating}
                               filmsDescription={filmsDescription}
                               filmsDirector={filmsDirector}
                               filmsStarring={filmsStarring}/>}

                           {match.params.title === tabsTitle[1].toLowerCase() &&
                           <Details
                               filmsDirector={filmsDirector}
                               filmsGenre={filmsGenre}
                               filmsStarring={filmsStarring}
                               filmsRunTime={filmsRunTime}
                               filmsReleased={filmsReleased}/>}

                           {match.params.title === tabsTitle[2].toLowerCase() &&
                           <Reviews/>}
                        </>
                       )
                    }
                />

                <Route path="/films/:id">
                    <Redirect to={`/films/${filmId}/overviews`}/>
                </Route>
            </Switch>


        </>
    )
}

export default Tabs;