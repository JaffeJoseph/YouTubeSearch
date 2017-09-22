import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
const API_KEY = 'AIzaSyAYP7QuDpR_QO2uTruZA9BCgUTPEIqDXms';



// Create a new component. This component sholud procude some HTML
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {videos: []};

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
				this.setState({ videos });
				// the above resolves to this.setState({ videos: videos});
			});
	}
	render(){
		return(
	 	<div>
	 		<SearchBar />
	 		<VideoList videos={this.state.videos} />
	 	</div>
		 );
	}
}


// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));