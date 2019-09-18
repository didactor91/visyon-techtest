import React from 'react'
import './styles.sass'

function ListSearch({ onSearchVideo }) {

    function onInputChange(e) {
        if (e.key === 'Enter') {
            const {
                value: search
            } = e.target
            onSearchVideo(true,search)
        }
    }

    return (
        <div className="listSearchCont">
            <input className="listSearchInput"
                type='text'
                name='search'
                placeholder='SIMILAR VIDEOS'
                onKeyDown={onInputChange}
            />
        </div>
    );

}
export default ListSearch;

/*class ListSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {term:''}
        this.onInputChange = this.onInputChange.bind(this)
    }
    onInputChange(e){
        e.preventDefault()
        if (e.key === 'Enter'){

        this.setState({term: e.target.value})
        this.props.onVideoSearch(e.target.value)}
    }

    render() {
        return (
            <div className="listSearchCont">
                <input className="listSearchInput"
                type='text'
                placeholder='SIMILAR VIDEOS'
                onKeyDown={this.onInputChange}
                />
            </div>
        );
    }
}

export default ListSearch;*/