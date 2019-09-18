import React from 'react'
import ListSearch from './ListSearch'
import MiniVideo from './MiniVideo'
import './styles.sass'

const VideoList = ({ onSearchVideo, videos, onSelectVideo }) => {
    if(!videos) {
        return(
            <h3>WAIT... LOADING...</h3>
        )
    }

    const videoItems = videos.map((video) => {
        return (
            <MiniVideo
                onSelectVideo={onSelectVideo}
                key={video.etag}
                video={video}
            />
        )

    })

    return (
        <div className="videoListCont">
            <ListSearch className='listSearchCont' onSearchVideo={onSearchVideo} />
            <div className='videoItemsList'>
                <ul className='miniVideoItem'>{videoItems}</ul>
            </div>
        </div>

    )
}

export default VideoList;