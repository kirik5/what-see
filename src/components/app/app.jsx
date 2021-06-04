import React from 'react';
import Main from '../main/main.jsx';
import FilmDetail from '../film-detail/film-detail.jsx';
import {Switch, Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {getInitializingStatus} from "../../reducers/films-slice";
import Loading from "../common/loading/loading";
import ErrorLoading from "../common/error-loading/error-loading";
import FullVideoPlayer from "../full-video-player/full-video-player";
import {isAuthorized} from "../../reducers/autorization-slice";
import SingIn from "../sing-in/sing-in";


const App = () => {
    const isInitialization = useSelector(getInitializingStatus)
    const isUserAuthorized = useSelector(isAuthorized)


    return (
        <>
            {/*{!isUserAuthorized && <Redirect to={'/login'}/>}*/}
            <Switch>
                <Route exact path="/">
                    {isUserAuthorized && isInitialization === 'loading' && <Loading/>}
                    {isUserAuthorized && isInitialization === 'failed' && <ErrorLoading/>}
                    <Main/>
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
            </Switch>

        </>
    )
};

export default App
