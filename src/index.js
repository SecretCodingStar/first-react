import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';

// YouTube API Key
const API_KEY = 'AIzaSyDA-RfWDGFTkvtJcblQaBvM3MdlPQjWdXA';

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = { videos: [] };
             
        YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => {
            this.setState({ videos:videos });
        });
    }
    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// Render DOM react components
ReactDOM.render(<App/>, document.querySelector('.container'));