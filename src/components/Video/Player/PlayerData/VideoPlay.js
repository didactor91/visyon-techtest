import React from 'react'
import'./styles.sass'

const VideoPlay = (props) => {

    const {video} = props;

    return (<div className="videoPlayCont">
        <iframe title='Player' id="player" type="text/html" width="100%" height="100%"
  src={`http://www.youtube.com/embed/${video.id.videoId}?enablejsapi=1`}
  frameborder="0"></iframe>
        </div>
    )
}

export default VideoPlay