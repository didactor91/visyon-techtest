import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faEye, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import './styles.sass'

const VideoInfo = (props) => {

    const {video} = props
    const {snippet:{channelTitle,title,description}, statistics:{viewCount,likeCount,commentCount}} = video

    return (

        <div className="videoInfoCont">
            <div className="videoInfoHeader">
                <span className="videoInfoHeaderItem">{channelTitle}</span>
                <span className="videoInfoHeaderItem">SHARE</span>
            </div>
            <div className="videoInfoTitle">
                <h2>{title}</h2>
            </div>
            <div className="videoInfoText">
                <p>{description}</p>
            </div>
            <hr/>
            <div className="videoInfoFooter">
                <div><FontAwesomeIcon icon={faShare} />{likeCount}</div>
                <div><FontAwesomeIcon icon={faEye} />{viewCount}</div>
                <div><FontAwesomeIcon icon={faCommentAlt} />{commentCount}</div>
            </div>
        </div>
    )
}

export default VideoInfo