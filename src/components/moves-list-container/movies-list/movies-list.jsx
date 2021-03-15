import React from 'react'
import SmallMovieCardContainer from "../../small-movie-card-container/small-movie-card-container"


const MoviesList = ({filmsIds}) => {
    return (
        <div className="catalog__movies-list">
            {
                filmsIds.map((id) => {
                    return (
                        <SmallMovieCardContainer
                            key={id}
                            id={id}
                        />
                    )
                })
            }
        </div>
    )
}

// class MoviesList extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeFilm: -1,
//     };
//   }
//
//   filmCardOverHandler = (index, name) => {
//     console.log(name);
//
//     this.setState((prevState) => {
//       return{
//         activeFilm: index,
//       }
//     }, () => {
//       console.log(this.state);
//     });
//   }
//
//   render() {
//     const {films} = this.props;
//
//     return (
//
//     );
//   }
// }

export default MoviesList;
