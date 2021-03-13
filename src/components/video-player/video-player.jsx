import React from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
  }

  render() {
    return (
      <video
        width="280"
        height="175"
        src={this.props.src}
        ref={this._videoRef}
        poster={this.props.poster}
      />
    );
  }

  componentDidMount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = () => {
      video.muted = true;
      video.play();

    };
  }
}



VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default VideoPlayer;
