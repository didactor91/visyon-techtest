import React from 'react'
import'./styles.sass'

const VideoPlay = (props) => {

    const {video} = props;
    debugger
    return (<div className="videoPlayCont">
        <iframe title='Player' id="player" type="text/html" width="100%" height="100%"
  src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1`}
  frameborder="0"></iframe>
        </div>
    )
}

export default VideoPlay