import React from 'react';
import Main from '../main/main.jsx';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FilmDetail from '../film-detail/film-detail.jsx';

const App = ({films}) => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Main
              filmsList={films}
            />
          </Route>
          <Route
            path="/films/:name"
            exact
            render={({match}) =>
              <FilmDetail
                detail={films.find((film) => film.name.toLowerCase() === match.params.name)}
              />
            }
          />
        </Switch>
      </Router>
    </React.Fragment>
  );

};

export default App;
