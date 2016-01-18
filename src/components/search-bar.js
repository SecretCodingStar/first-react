import React, { Component } from 'react';

class SearchBar extends Component {
    render(){
        return <input onInputChange={this.onInputChange} />;
    }
    
    onInputChange(event) {
        console.log(event.target.value);
    }
}

export default SearchBar;