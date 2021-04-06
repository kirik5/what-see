import React, {useRef} from 'react';
import PropTypes from 'prop-types';


const VideoPlayer = ({previewVideoLink}) => {
    const videoRef = useRef(null);

    return (
        <video
            width="280"
            height="175"
            src={previewVideoLink}
            ref={videoRef}
            muted={true}
            loop={true}
            autoPlay={true}
        />
    )
}

export default VideoPlayer;

VideoPlayer.propTypes = {
    previewVideoLink: PropTypes.string.isRequired
}