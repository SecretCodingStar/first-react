import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';

// YouTube API Key
const API_KEY = 'AIzaSyDA-RfWDGFTkvtJcblQaBvM3MdlPQjWdXA';

YTSearch({key: API_KEY, term: 'surfboard'}, function(data){
   console.log(data); 
});

class App extends Component {
    render(){
        return (
            <div>
                <SearchBar/>
            </div>
        );
    }
}

// Render DOM react components
ReactDOM.render(<App/>, document.querySelector('.container'));