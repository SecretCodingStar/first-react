import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

// YouTube API Key
const API_KEY = 'AIzaSyDA-RfWDGFTkvtJcblQaBvM3MdlPQjWdXA';

class App extends Component {
    // Constructor Function
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
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// Render DOM react components
ReactDOM.render(<App/>, document.querySelector('.container'));