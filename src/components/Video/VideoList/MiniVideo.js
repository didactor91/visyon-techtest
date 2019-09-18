import React from 'react'
import './styles.sass'

const MiniVideo = ({ video, onSelectVideo }) => {

    const imgUrl = video.snippet.thumbnails.high.url

    function handleSelectVideo(e){
        e.preventDefault()
        onSelectVideo(video)

    }

    return (
        <ul className="miniVideoCont" onClick={handleSelectVideo}>
            <div className="miniVideoMedia">
                <div className="videoMediaImg">
                    <img className="mediaImg" alt='Video Img' src={imgUrl} />
                </div>
                <div className="videoMediaText">
                    <div className="mediaText">{video.snippet.title}</div>
                </div>
            </div>
        </ul>
    )

}

export default MiniVideo