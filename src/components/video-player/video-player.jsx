import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';


const VideoPlayer = ({previewVideoLink}) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        video.oncanplaythrough = () => {
            // video.muted = true;
            video.play();
        };
    }, [])

    return (
        <video
            width="280"
            height="175"
            src={previewVideoLink}
            ref={videoRef}
        />
    )
}

export default VideoPlayer;

VideoPlayer.propTypes = {
    previewVideoLink: PropTypes.string.isRequired
}