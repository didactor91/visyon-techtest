import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faEye, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import './styles.sass'

const VideoInfo = (props) => {

    const {video} = props
    const {snippet:{channelTitle,title,description}} = video

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
                <div><FontAwesomeIcon icon={faShare} />{Math.floor(Math.random()*1365)}</div>
                <div><FontAwesomeIcon icon={faEye} />{Math.floor(Math.random()*7659)}</div>
                <div><FontAwesomeIcon icon={faCommentAlt} />{Math.floor(Math.random()*650)}</div>
            </div>
        </div>
    )
}

export default VideoInfo