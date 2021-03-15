import React from 'react';
import VideoPlayer from '../../video-player/video-player.jsx';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

class SmallMovieCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlayingVideo: false,
      isCursorOnSmallMovieCard: false,
    };

    this.state.isCreate = true;
  }

  handleMouseEnter = () => {
    this.setState({
      isCursorOnSmallMovieCard: true,
    });

    this.props.onMouseOver(this.props.index, this.props.name);

    setTimeout(() => {this.state.isCursorOnSmallMovieCard && this.state.isCreate && this.setState({isPlayingVideo: true})}, 1000);
  }

  handleMouseLeave = () => {
    this.setState({
      isCursorOnSmallMovieCard: false,
      isPlayingVideo: false
    });
  }

  render() {
    const {src, name, videoSrc} = this.props;

    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onClick={() => this.props.history.push('/films/' + name.toLowerCase())}>

        {
          !this.state.isPlayingVideo ? (
            <div className="small-movie-card__image">
              <img src={`img/${src}`} alt={name} width="280" height="175"/>
            </div>
          ) :
            <VideoPlayer
              src={videoSrc}
              poster={`img/` + src}
            />
        }

        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{name}</a>
        </h3>
      </article>
    );
  }

  componentWillUnmount() {
    this.state.isCreate = false;
  }
};

SmallMovieCard.propTypes = {
  src: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  videoSrc: PropTypes.string.isRequired
};

export default withRouter(SmallMovieCard);
