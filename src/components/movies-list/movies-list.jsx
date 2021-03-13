import React from 'react';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilm: -1,
    };

  }

  filmCardOverHandler = (index, name) => {
    console.log(name);

    this.setState((prevState) => {
      return{
        activeFilm: index,
      }
    }, () => {
      console.log(this.state);
    });
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {
          films.map((el, i) => {
            return (
              <SmallMovieCard
                key={`films-${i}`}
                src={el.src}
                index={i}
                onMouseOver={this.filmCardOverHandler}
                name={el.name}
                videoSrc={el.videoSrc}
              />
            );
          })
        }
      </div>
    );
  }
}

export default MoviesList;
