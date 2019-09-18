import React, { Component } from 'react'
import VideoList from './VideoList'
import Player from './Player'
import videoLogic from './VideoLogic'
import './styles.sass'

const useApi = false
const firstSearch = 'Visyon'

class Video extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            videoPlay: null,
            error: null
        }

    }

    componentDidMount() {
        (async () => {
        const {items}= await videoLogic.SearchVideo(useApi, firstSearch)
        this.setState({
            videos: items,
            videoPlay: items[0],
        })})()
    }

    handleSearchVideo = async (use, term) => {

        try {
            const {items} = await videoLogic.SearchVideo(use, term)
            this.setState({
                videos: items,
                videoPlay: items[0],
            })
        }
        catch ({ message }) {
            this.setState({ error: message })
        }
    }

    handleSelectVideo = (selected) => {
        this.setState({
            videoPlay: selected
        })
    }

    render() {
        const {
            state: { videos, videoPlay },
            handleSearchVideo,
            handleSelectVideo
        } = this
        return (
            <div className="videoCont">
                <Player video={videoPlay} />
                <VideoList videos={videos} onSearchVideo={handleSearchVideo} onSelectVideo={handleSelectVideo} />
            </div>
        );
    }
}

export default Video;
