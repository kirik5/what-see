import React from 'react';
import Main from '../main/main.jsx';
import FilmDetail from '../film-detail/film-detail.jsx';
import {Switch, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import {getInicializationStatus} from "../../reducers/films-slice";


const App = () => {
    const isInitialization = useSelector(getInicializationStatus)

    return isInitialization === 'succeeded' ? (
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
        </Switch>
    ) : <div>Inicializing... Please wait...</div>
};

export default App;
