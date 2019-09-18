import React from 'react';
import PlayerData from './PlayerData'
import './styles.sass'

const Player = (props) => {

    const video = props.video

    return(
    <div className="playerCont">
    <PlayerData video={video}/>
    </div>

)}

export default Player;