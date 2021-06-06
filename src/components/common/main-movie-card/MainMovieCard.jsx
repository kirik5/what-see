import React from "react"
import Logo from "../logo/logo";
import ButtonViewMyList from "../button-view-my-list/button-view-my-list";
import Avatar from "../avatar/avatar";
import {useSelector} from "react-redux";
import {
    getFilmsName,
    getFimlsBg,
    getFimlsGenre,
    getFimlsPoster,
    getFimlsReleased
} from "../../../reducers/films-slice";
import ButtonPlay from "../button-play/button-play";
import ButtonAddToMyList from "../button-add-to-my-list/button-add-to-my-list";


const MainMovieCard = ({id}) => {
    const filmsName = useSelector(getFilmsName(id))
    const filmsPoster = useSelector(getFimlsPoster(id))
    const filmsBg = useSelector(getFimlsBg(id))
    const filmsGenre = useSelector(getFimlsGenre(id))
    const filmsReleased = useSelector(getFimlsReleased(id))

    return (
        <section className="movie-card">
            <div className="movie-card__bg">
                <img src={filmsBg} alt={filmsName}/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">

                <Logo/>

                <Avatar/>
            </header>

            <div className="movie-card__wrap">
                <div className="movie-card__info">
                    <div className="movie-card__poster">
                        <img src={filmsPoster} alt={filmsName} width="218"
                             height="327"/>
                    </div>

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

                            <a href="add-review.html" className="btn movie-card__button">Add review</a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainMovieCard