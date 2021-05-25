import React from 'react';
import Main from '../main/main.jsx';
import FilmDetail from '../film-detail/film-detail.jsx';
import {Switch, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import {getInitializingStatus} from "../../reducers/films-slice";
import Loading from "../common/loading/loading";
import ErrorLoading from "../common/error-loading/error-loading";
import FullVideoPlayer from "../full-video-player/full-video-player";


const App = () => {
    const isInitialization = useSelector(getInitializingStatus)

    return (
        <>
            {isInitialization === 'loading' && <Loading/>}
            {isInitialization === 'succeeded' && (
                <Switch>
                    <Route exact path="/">
                        <Main/>
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
                </Switch>)
            }
            {isInitialization === 'failed' && <ErrorLoading/>}
        </>
    )

};

export default App;
