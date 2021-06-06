import React, {useEffect} from 'react';
import Main from '../main/main.jsx';
import FilmDetail from '../film-detail/film-detail.jsx';
import {Switch, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchFilms, getInitializingStatus} from "../../reducers/films-slice";
import Loading from "../common/loading/loading";
import ErrorLoading from "../common/error-loading/error-loading";
import FullVideoPlayer from "../full-video-player/full-video-player";
import SingIn from "../sing-in/sing-in";
import MyFilmList from "../my-list/my-list";
import NoMatch from "../common/no-match/no-match";


const App = () => {
    const isInitialization = useSelector(getInitializingStatus)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFilms())
    }, [dispatch])


    return (
        <Switch>
            <Route exact path="/">
                {isInitialization === 'loading' && <Loading/>}
                {isInitialization === 'failed' && <ErrorLoading/>}
                {isInitialization === 'succeeded' && <Main/>}
            </Route>
            <Route path='/login'>
                <SingIn/>
            </Route>
            <Route
                path="/films/:id"
                render={({match}) =>
                    <FilmDetail id={match.params.id}/>
                }
            />
            <Route path="/genre/:type"
                render={({match}) =>
                   <Main genreType={match.params.type}/>
                }
            />
            <Route path="/play">
                <FullVideoPlayer/>
            </Route>
            <Route path={'/mylist'}>
                <MyFilmList/>
            </Route>
            <Route path="*">
                <NoMatch />
            </Route>
        </Switch>
    )
}

export default App
