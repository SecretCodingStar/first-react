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
        
        this.state = { 
            selectedVideo: null,
            videos: [] 
        };
             
        YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => {
            this.setState({ 
                videos:videos ,
                selectedVideo: videos[0]
            });
        });
    }
    
    render(){
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// Render DOM react components
ReactDOM.render(<App/>, document.querySelector('.container'));