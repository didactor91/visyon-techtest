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
        (async() => this.handleSearchVideo(useApi, firstSearch))()
    }

    handleSearchVideo = async (use, term) => {

        try {
            const {items} = await videoLogic.SearchVideo(use, term)
            debugger
            const {items: video} = await videoLogic.SelectVideo(items[0].id.videoId)
            this.setState({
                videos: items,
                videoPlay: video[0],
            })
        }
        catch ({ message }) {
            this.setState({ error: message })
        }
    }

    handleSelectVideo = async (videoID) => {
        try{
            debugger
            const {items: video} = await videoLogic.SelectVideo(videoID)
            this.setState({
                videoPlay: video[0]
            })
        }
        catch ({ message }) {
            this.setState({ error: message })
        }
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
