import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';

// YouTube API Key
const API_KEY = 'AIzaSyDA-RfWDGFTkvtJcblQaBvM3MdlPQjWdXA';

const App = ()=> {
    return (
    <div>
        <SearchBar/>
    </div>
    );
}

// Render DOM react components
ReactDOM.render(<App/>, document.querySelector('.container'));