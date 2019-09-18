import React from 'react'
import VideoInfo from './VideoInfo'
import VideoPlay from './VideoPlay'
import'./styles.sass'

const VideoData = (props) => {

    const video = props.video

    if(!video) {
        return(
            <h3>WAIT... LOADING...</h3>
        )
    }

    return (

        <div className="videoDataCont">
            <VideoPlay video={video}/>
            <VideoInfo video={video}/>
        </div>
    )
}

export default VideoData