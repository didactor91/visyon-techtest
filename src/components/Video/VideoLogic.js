import validate from '../../common/validate'

const API_KEY = process.env.REACT_APP_API_KEY
const results = 10
const resultsOffline = require('../../common/fixedResults.json')

const videoLogic = {

    SearchVideo(use, term) {
        validate.arguments([
            { name: 'use', value: use, type: 'boolean', notEmpty: true },
            { name: 'term', value: term, type: 'string', notEmpty: true }
        ])

        return (async () => {

            if (use) {

                const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${results}&q=${term}&type=video&key=${API_KEY}`
                const data = await fetch(apiUrl)
                return data.json()
            }
            else {
                return resultsOffline
            }
        }
        )()
    },

    SelectVideo(videoID) {
        validate.arguments([
            { name: 'videoID', value: videoID, type: 'string', notEmpty: true }
        ])

        return (async () => {
            debugger
            const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${videoID}&maxResults=1&key=${API_KEY}`
            const data = await fetch(apiUrl)
            debugger
            return data.json()
        }
        )()
    }

}

export default videoLogic


