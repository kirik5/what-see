import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import films from './mocks/films.js';

const init = (filmsList) => {

  ReactDOM.render(
    <App
      films={filmsList}
    />, document.getElementById(`root`)
  );
};

init(films);
