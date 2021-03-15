import React from 'react';
import Main from '../main/main.jsx';
import FilmDetail from '../film-detail/film-detail.jsx';
import {Switch, Route} from "react-router-dom";


const App = () => {
    return (
        <Switch>
            <Route exact path="/" >
                <Main/>
            </Route>
            <Route
                path="/films/:name"
                exact
                render={({match}) =>
                    <FilmDetail
                        // detail={films.find((film) => film.name.toLowerCase() === match.params.name)}
                    />
                }
            />
        </Switch>
    );
};

export default App;
