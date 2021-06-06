import React from "react";
import VisuallyHidden from "../common/visually-hidden/visually-hidden";
import PageFooter from "../common/page-footer/page-footer";
import Logo from "../common/logo/logo";
import Avatar from "../common/avatar/avatar";
import MyFavoriteMoviesList from "../main/movies-list/my-favorite-movies-list";
import ShowMore from "../main/ShowMore/show-more";
import {canShowMoreOfFavorite} from "../../reducers/myfilmlist-slice";
import {useSelector} from "react-redux";
import withRedirectToLogin from "../../hoc/redirect-to-login";


const MyFilmList = (props) => {
    const canShowMore = useSelector(canShowMoreOfFavorite)

    return (
        <>
            <VisuallyHidden/>

            <div className="user-page">
                <header className="page-header user-page__head">

                    <Logo/>

                    <h1 className="page-title user-page__title">My list</h1>

                    <Avatar/>
                </header>

                <section className="catalog">
                    <h2 className="catalog__title visually-hidden">Catalog</h2>

                    <MyFavoriteMoviesList/>

                    {canShowMore && <ShowMore
                        from={'my-list'}
                    />}

                </section>

                <PageFooter/>

            </div>
        </>

    )
}

export default withRedirectToLogin(MyFilmList)